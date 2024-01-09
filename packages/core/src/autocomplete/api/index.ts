import type { CompanyDataType } from '../types';
import { queryQccOpenAPI } from './qcc-open';
import { queryClearBitAPI } from './clear-bit';
import { queryQccGlobalAPI } from './qcc-global';

export const handleQueryData = async (
  keyword: string,
  api: string,
  abortController?: AbortController
): Promise<{
  data: CompanyDataType[];
}> => {
  let data: CompanyDataType[];
  switch (api) {
    case 'qcc_open':
      data = await queryQccOpenAPI(keyword, abortController);
      break;
    case 'clearbit':
      data = await queryClearBitAPI(keyword, abortController);
      break;
    case 'qcc_global':
      data = await queryQccGlobalAPI(keyword, abortController);
      break;
    default:
      data = [];
      break;
  }
  return {
    data,
  };
};
