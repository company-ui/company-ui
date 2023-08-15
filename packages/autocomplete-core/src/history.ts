import type { HistoryOptions, CompanyDataType } from './types';
import { stringToJson } from '@company-ui/shared';

/**
 * add history item
 * @param company
 * @param options
 */
export const addHistory = (company: CompanyDataType, options: HistoryOptions) => {
  if (!options.enabled || !options.key) {
    return;
  }
  const storage = options.type === 'localStorage' ? localStorage : sessionStorage;
  const list = getHistory(options);
  const index = list.findIndex((e) => e.id === company.id);
  if (index > -1) {
    list.splice(index, 1);
  }
  list.splice(0, 0, company);
  storage.setItem(options.key, JSON.stringify(list.length > 5 ? list.slice(0, 5) : list));
};

/**
 * get history list
 * @param options
 */
export const getHistory = (options: HistoryOptions): CompanyDataType[] => {
  if (!options.enabled || !options.key) {
    return [];
  }
  const storage = options.type === 'localStorage' ? localStorage : sessionStorage;
  const content = storage.getItem(options.key) || '';
  return stringToJson(content);
};

/**
 * remove history item
 * @param options
 */
export const removeHistory = (options: HistoryOptions) => {
  const storage = options.type === 'localStorage' ? localStorage : sessionStorage;
  storage.removeItem(options.key);
};
