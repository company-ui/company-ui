import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { useMount, useClickAway, useDebounceFn, useGetState, useControllableValue } from 'ahooks';
import { autocomplete } from '@company-ui/core';
import { isUndefined, removeHtmlTags } from '@company-ui/shared';
import { FloatingPortal, useFloating, autoUpdate, offset, size, flip } from '@floating-ui/react';

export type AutoCompleteProps = {
  defaultValue?: string;
  value?: string;
  api?: string;
  queryDelay?: number;
  placeholder?: string;
  clearable?: boolean;
  backFill?: boolean;
  popupAppendToBody?: boolean;
  autoFocus?: boolean;
  showSubmitButton?: boolean;
  submitButtonLabel?: string;
  offsetTop?: number;
  autoFlip?: boolean;
  historyEnabled?: boolean;
  historyType?: autocomplete.Type.HistoryType;
  historyStorageKey?: string;
  historyClearable?: boolean;
  onInput?: (_value: string) => void;
  onFetch?: (_data: autocomplete.Type.CompanyDataType[]) => void;
  onAbortFetch?: (_e: Error) => void;
  onSelect?: (_data: autocomplete.Type.CompanyDataType) => void;
  onClear?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onSubmit?: (_args: { text: string }) => void;
  onDropdownVisibleChange?: (_state: boolean) => void;
};

const SuggestionComponent = {
  default: React.Fragment,
  portal: FloatingPortal,
};

const AutoComponent: React.FC<AutoCompleteProps> = (props) => {
  const {
    api = autocomplete.initialOptions.api,
    queryDelay = autocomplete.initialOptions.queryDelay,
    placeholder = autocomplete.initialOptions.placeholder,
    clearable = autocomplete.initialOptions.clearable,
    backFill = autocomplete.initialOptions.backFill,
    popupAppendToBody = autocomplete.initialOptions.popupAppendToBody,
    autoFocus = autocomplete.initialOptions.autoFocus,
    showSubmitButton = autocomplete.initialOptions.showSubmitButton,
    submitButtonLabel = autocomplete.initialOptions.submitButtonLabel,
    offsetTop = autocomplete.initialOptions.offsetTop,
    autoFlip = autocomplete.initialOptions.autoFlip,
    historyEnabled = autocomplete.initialOptions.history.enabled,
    historyType = autocomplete.initialOptions.history.type,
    historyStorageKey = autocomplete.initialOptions.history.key,
    historyClearable = autocomplete.initialOptions.history.showClear,
    onInput,
    onFetch,
    onAbortFetch,
    onSelect,
    onClear,
    onFocus,
    onBlur,
    onSubmit,
    onDropdownVisibleChange,
  } = props;

  const clearIcon = autocomplete.initialOptions.clearIcon;
  const historyClearIcon = autocomplete.initialOptions.history.clearIcon;
  const historyItemIcon = autocomplete.initialOptions.history.itemIcon;
  const Suggestion = SuggestionComponent[popupAppendToBody ? 'portal' : 'default'];

  const [inputValue, setInputValue] = useControllableValue<string>(props);
  const [abortController, setAbortController] = useState<AbortController>();
  const [latestKeyword, setLatestKeyword] = useState('');
  const [selectSuggestion, setSelectSuggestion] = useState<autocomplete.Type.CompanyDataType>();
  const [suggestionVisible, setSuggestionVisible] = useState(false);
  const [suggestionType, setSuggestionType] = useState('fetch');
  const [suggestions, setSuggestions, getSuggestions] = useGetState<
    autocomplete.Type.CompanyDataType[]
  >([]);
  const [keyboardActiveIndex, setKeyboardActiveIndex] = useState<number>();
  const [floatingFullStyles, setFloatingFullStyles] = useState<React.CSSProperties>();
  const input = useRef<HTMLInputElement>(null);
  const { refs, floatingStyles } = useFloating({
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(offsetTop),
      size({
        apply: ({ rects }) => {
          setFloatingFullStyles((style) => ({
            ...style,
            width: `${rects.reference.width}px`,
          }));
        },
      }),
      ...(autoFlip ? [flip({ fallbackPlacements: ['top'] })] : []),
    ],
  });

  useEffect(() => {
    setFloatingFullStyles((style) => ({
      ...style,
      ...floatingStyles,
    }));
  }, [floatingStyles]);

  useMount(() => {
    if (autoFocus) {
      handleFocus();
    }
  });

  useClickAway(() => {
    hideSuggestion();
  }, refs.reference as React.MutableRefObject<HTMLDivElement>);

  const handleFocus = () => {
    input.current?.focus();
  };

  const handleCancelQuerySuggestion = () => {
    if (abortController) {
      abortController.abort('repeated request');
      setAbortController(undefined);
    }
  };

  const handleQuerySuggestion = (value: string) => {
    handleCancelQuerySuggestion();
    if (inputValue === latestKeyword) {
      showSuggestion();
      return;
    }
    const ac = new AbortController();
    setAbortController(ac);
    autocomplete
      .handleQueryData(value.trim(), api, ac)
      .then(({ data }) => {
        setLatestKeyword(value.trim());
        setSuggestions(data);
        showSuggestion('fetch', data);
        onFetch?.(data);
      })
      .catch((e: Error) => {
        if (e.name === 'AbortError') {
          onAbortFetch?.(e);
        }
      });
  };

  const { run: handleDebounceQuerySuggestion } = useDebounceFn(handleQuerySuggestion, {
    wait: queryDelay,
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    hideSuggestion();
    const { value } = event.target;
    setInputValue(value);
    onInput?.(value);
    setKeyboardActiveIndex(undefined);
    setSelectSuggestion(undefined);
    if (value.length === 0) {
      clearSuggestion();
      return;
    }
    handleDebounceQuerySuggestion(value);
  };

  const handleInputClick = () => {
    if (inputValue) {
      handleQuerySuggestion(inputValue);
    } else if (historyEnabled) {
      setLatestKeyword('');
      handleShowHistory();
    }
  };

  const handleInputFocus = () => {
    onFocus?.();
  };

  const handleInputBlur = () => {
    onBlur?.();
  };

  const handleShowHistory = () => {
    const options = {
      enabled: historyEnabled,
      key: historyStorageKey,
      type: historyType,
    };
    const data = autocomplete.getHistory(options as autocomplete.Type.HistoryOptions);
    setSuggestions(data);
    showSuggestion('history', data);
  };

  const clearSuggestion = () => {
    setSuggestions([]);
  };

  const showSuggestion = (type = 'fetch', suggestions = getSuggestions()) => {
    if (suggestions.length === 0) {
      clearSuggestion();
      hideSuggestion();
      return;
    }
    setSuggestionType(type);
    if (suggestionVisible) {
      return;
    }
    setSuggestionVisible(true);
    onDropdownVisibleChange?.(true);
  };

  const hideSuggestion = () => {
    if (!suggestionVisible) {
      return;
    }
    setSuggestionVisible(false);
    onDropdownVisibleChange?.(false);
  };

  const handleSubmit = () => {
    onSubmit?.({
      text: inputValue,
    });
  };

  const handleInputClear = () => {
    setSelectSuggestion(undefined);
    setInputValue('');
    clearSuggestion();
    hideSuggestion();
    handleFocus();
    onClear?.();
  };

  const handleKeyDown = (event: React.KeyboardEvent<Element>) => {
    switch (event.key) {
      case 'Enter':
        if (!isUndefined(keyboardActiveIndex)) {
          handleSuggestionClick(suggestions[keyboardActiveIndex!]);
        }
        break;
      case 'ArrowUp':
        if (!keyboardActiveIndex) {
          setKeyboardActiveIndex(suggestions.length - 1);
        } else {
          setKeyboardActiveIndex(keyboardActiveIndex - 1);
        }
        backFill && handleFillInput();
        break;
      case 'ArrowDown':
        if (isUndefined(keyboardActiveIndex) || keyboardActiveIndex! >= suggestions.length - 1) {
          setKeyboardActiveIndex(0);
        } else {
          setKeyboardActiveIndex(keyboardActiveIndex! + 1);
        }
        backFill && handleFillInput();
        break;
      case 'Escape':
        handleInputClear();
        break;
    }
  };

  const handleFillInput = () => {
    setSelectSuggestion(suggestions[keyboardActiveIndex!]);
    setInputValue(removeHtmlTags(selectSuggestion!.name || ''));
  };

  const handleHistoryClear = (event: React.MouseEvent) => {
    const options = {
      key: historyStorageKey,
      type: historyType,
    };
    autocomplete.removeHistory(options as autocomplete.Type.HistoryOptions);
    clearSuggestion();
    hideSuggestion();
    event.preventDefault();
  };

  const handleSuggestionClick = (company: autocomplete.Type.CompanyDataType) => {
    setInputValue(removeHtmlTags(company.name));
    const selectSuggestionData = {
      id: company.id,
      name: company.name,
    };
    setSelectSuggestion(selectSuggestionData);
    clearSuggestion();
    hideSuggestion();
    if (historyEnabled && selectSuggestionData) {
      const options = {
        enabled: historyEnabled,
        key: historyStorageKey,
        type: historyType,
      };
      autocomplete.addHistory(selectSuggestionData, options as autocomplete.Type.HistoryOptions);
    }
    onSelect?.(selectSuggestionData);
  };

  return (
    <div
      ref={refs.setReference}
      className={clsx('company-autocomplete', {
        'company-autocomplete--show-submit': showSubmitButton,
        'company-autocomplete--words': inputValue.length > 0,
        'company-autocomplete--activated': suggestionVisible,
      })}
      onKeyDown={handleKeyDown}
    >
      <div className="company-autocomplete__input">
        <input
          ref={input}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onInput={handleInput}
          onClick={handleInputClick}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          aria-autocomplete="list"
          aria-labelledby={
            suggestionVisible && suggestions.length === 0 ? 'suggestion-no-results' : undefined
          }
        />
        {clearable && (
          <div className="company-autocomplete__clear">
            <i
              className="company-autocomplete__clear-icon"
              onClick={handleInputClear}
              dangerouslySetInnerHTML={{ __html: clearIcon }}
            />
          </div>
        )}
      </div>
      {showSubmitButton && (
        <div className="company-autocomplete__submit">
          <button type="button" onClick={handleSubmit}>
            {submitButtonLabel}
          </button>
        </div>
      )}
      <Suggestion>
        <div
          ref={refs.setFloating}
          style={floatingFullStyles}
          className={clsx('suggestion-popper', {
            'suggestion-popper--activated': suggestionVisible,
          })}
        >
          <div className="suggestion-popper__body">
            {suggestions.map((item, index) => (
              <div
                className={clsx('suggestion', {
                  'suggestion--keyboard-active': keyboardActiveIndex === index,
                })}
                key={item.id}
                onClick={() => handleSuggestionClick(item)}
              >
                <div className="suggestion__avatar">
                  {suggestionType === 'history' && (
                    <i
                      className="suggestion__avatar-icon"
                      dangerouslySetInnerHTML={{ __html: historyItemIcon }}
                    />
                  )}
                  {item.avatar && <img alt={item.id} src={item.avatar} />}
                </div>
                <div className="suggestion__label">{item.name}</div>
                <div className="suggestion__extra"></div>
              </div>
            ))}
          </div>
          {historyClearable && suggestionType === 'history' && (
            <div className="suggestion-popper__footer">
              <a href="#" onClick={handleHistoryClear}>
                <i
                  className="suggestion-popper__icon"
                  dangerouslySetInnerHTML={{ __html: historyClearIcon }}
                />
                删除历史
              </a>
            </div>
          )}
        </div>
      </Suggestion>
    </div>
  );
};

export default AutoComponent;
