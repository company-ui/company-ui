export const setSuggestionItemClass = (
  suggestions: HTMLElement[],
  index: number,
  className: string
) => {
  suggestions.forEach((item) => {
    item.classList.remove(className);
  });
  suggestions[index].classList.add(className);
};
