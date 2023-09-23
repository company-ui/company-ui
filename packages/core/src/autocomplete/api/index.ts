import type { CompanyAutocompleteOptions, CompanyDataType } from '../types';
import { queryQccOpenAPI } from './qcc-open';
import { queryClearBitAPI } from './clear-bit';

export const handleQueryData = async (
  keyword: string,
  options: CompanyAutocompleteOptions
): Promise<CompanyDataType[]> => {
  switch (options.api) {
    case 'qcc_open':
      return await queryQccOpenAPI(keyword);
    case 'clearbit':
      return await queryClearBitAPI(keyword);
    default:
      return [];
  }
};
