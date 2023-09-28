<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Teleport',
    props: {
      to: {
        type: String,
        required: true,
      },
      where: {
        type: String,
        default: 'after',
      },
      disabled: Boolean,
    },
    data() {
      return {
        nodes: [] as Node[],
        waiting: false,
        observer: null as MutationObserver | null,
        parent: null as Element | null,
      };
    },
    computed: {
      classes() {
        if (this.disabled) {
          return ['teleporter'];
        }

        return ['teleporter', 'hidden'];
      },
    },
    watch: {
      to: 'maybeMove',
      where: 'maybeMove',
      disabled(value) {
        if (value) {
          this.disable();
          this.teardownObserver();
        } else {
          this.bootObserver();
          this.move();
        }
      },
    },
    mounted() {
      // Store a reference to the nodes
      this.nodes = Array.from(this.$el.childNodes);

      if (!this.disabled) {
        this.bootObserver();
      }

      // Move slot content to target
      this.maybeMove();
    },
    beforeUnmount() {
      // Move back
      this.disable();

      // Stop observing
      this.teardownObserver();
    },
    methods: {
      maybeMove() {
        if (!this.disabled) {
          this.move();
        }
      },
      move() {
        this.waiting = false;

        this.parent = document.querySelector(this.to);

        if (!this.parent) {
          this.disable();

          this.waiting = true;

          return;
        }

        if (this.where === 'before') {
          this.parent.prepend(this.getFragment());
        } else {
          this.parent.appendChild(this.getFragment());
        }
      },
      disable() {
        this.$el.appendChild(this.getFragment());
        this.parent = null;
      },
      // Using a fragment is faster because it'll trigger only a single reflow
      // See https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
      getFragment() {
        const fragment = document.createDocumentFragment();

        this.nodes.forEach((node) => fragment.appendChild(node));

        return fragment;
      },
      onMutations(mutations: MutationRecord[]) {
        // Makes sure the move operation is only done once
        let shouldMove = false;

        for (let i = 0; i < mutations.length; i++) {
          const mutation = mutations[i];
          const filteredAddedNodes = Array.from(mutation.addedNodes).filter(
            (node: Node) => !this.nodes.includes(node)
          );

          if (Array.from(mutation.removedNodes).includes(this.parent!)) {
            this.disable();
            this.waiting = !this.disabled;
          } else if (this.waiting && filteredAddedNodes.length > 0) {
            shouldMove = true;
          }
        }

        if (shouldMove) {
          this.move();
        }
      },
      bootObserver() {
        if (this.observer) {
          return;
        }

        this.observer = new MutationObserver((mutations) => this.onMutations(mutations));

        this.observer.observe(document.body, {
          childList: true,
          subtree: true,
          attributes: false,
          characterData: false,
        });
      },
      teardownObserver() {
        if (this.observer) {
          this.observer.disconnect();
          this.observer = null;
        }
      },
    },
  };
</script>

<style scoped lang="scss">
  .hidden {
    visibility: hidden;
    display: none;
  }
</style>
