export type ApiType = 'qcc_open' | 'qcc' | 'qixin' | 'tianyancha' | 'clearbit';

export type HistoryType = 'localStorage' | 'sessionStorage';

export interface HistoryOptions {
  /**
   * history enabled
   */
  enabled: boolean;
  /**
   * history save mode
   */
  type: HistoryType;
  /**
   * history save key
   */
  key: string;
  /**
   * show clear history link
   */
  showClear: boolean;
  /**
   * history item icon
   */
  itemIcon: string;
  /**
   * clear history link icon
   */
  clearIcon: string;
}

export interface CompanyAutocompleteOptions {
  /**
   * id of the html element tag
   */
  target: Element | string;
  /**
   * query data source
   */
  api: ApiType;
  /**
   *  query data delay
   */
  queryDelay: number;
  /**
   * input placeholder content
   */
  placeholder: string;
  /**
   * show clear button
   */
  clearable: Boolean;
  /**
   * if backFill selected item the input when using keyboard
   */
  backFill: boolean;
  /**
   * whether to append the popup menu to body.
   */
  popupAppendToBody: boolean;
  /**
   * clear icon
   */
  clearIcon: string;
  /**
   * auto focus
   */
  autoFocus: Boolean;
  /**
   * triggers when the input value change
   */
  onInput: Function;
  /**
   * triggers when the input value change
   */
  onChange: Function;
  /**
   * triggers when query data
   */
  onFetch: Function;
  /**
   * triggers when abort query data
   */
  onAbortFetch: Function;
  /**
   * triggers when a suggestion is clicked
   */
  onSelect: Function;
  /**
   * triggers when the input is cleared by clicking the clear button
   */
  onClear: Function;
  /**
   * triggers when the input focuses
   */
  onFocus: Function;
  /**
   * triggers when the input blurs
   */
  onBlur: Function;
  /**
   * triggers when the button submit
   */
  onSubmit: Function;
  /**
   * triggers when the dropdown appears/disappears
   */
  onDropdownVisibleChange: Function;
  /**
   * search query api url
   */
  // searchUrl?: string;
  /**
   * avatar url
   */
  avatarUrl?: string;
  /**
   * pixels to offset from input bottom
   */
  offsetTop: number;
  /**
   * auto flip
   */
  autoFlip: boolean;
  /**
   * history
   */
  history: HistoryOptions;
  /**
   * show submit button
   */
  showSubmitButton: boolean;
  /**
   * submit button label
   */
  submitButtonLabel: string;
  /**
   * set direction of layout
   */
  // direction: LayoutDirection;
}

export interface CompanyDataType {
  /**
   * company name
   */
  name: string;
  /**
   * company id
   */
  id: string;
  /**
   * company avatar
   */
  avatar?: string;
}

export interface QccOpenAPIResponseType {
  status: string;
  msg: string;
  traceNo: string;
  token: null;
  result: {
    companyName: string;
    keyNo: string;
  }[];
}

export interface QccResponseType {
  status: string;
  result: {
    name: string;
    keyNo: string;
    avatar: string;
  }[];
}

export interface ClearBitResponseType {
  name: string;
  keyNo: string;
  logo: string;
  domain: string;
}
