import type {
  CompanyDataType,
  QccOpenAPIResponseType,
  ClearBitResponseType,
  CompanyAutocompleteOptions,
} from './types';
import { replaceAll } from '@company-ui/shared';

/**
 * query api
 * @param keyword
 * @param options
 */
export const handleQueryData = async (keyword: string, options: CompanyAutocompleteOptions) => {
  switch (options.api) {
    case 'qcc_open':
      return await queryQccOpenAPI(keyword, options);
    case 'clearbit':
      return await queryClearBitAPI(keyword, options);
    default:
      return [];
  }
};

const getSearchUrl = (keyword: string, defaultUrl: string, customUrl?: string) => {
  const url = customUrl || defaultUrl;
  return replaceAll(url, '{keyword}', keyword);
};

const queryQccOpenAPI = async (
  keyword: string,
  options: CompanyAutocompleteOptions
): Promise<CompanyDataType[]> => {
  if (keyword.length < 2) {
    return [];
  }
  const searchUrl: string =
    'https://c.qcc.com/embed/api/company/getCompanyName?searchKey={keyword}';
  const url = getSearchUrl(keyword, searchUrl, options.searchUrl);
  const res: Response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Referer: 'https://c.qcc.com/',
    },
  });
  const json = <QccOpenAPIResponseType>await res.json();
  const result: CompanyDataType[] = [];
  if (json.status !== '200') {
    return result;
  }
  return json.result.map((item) => {
    return {
      name: item.companyName,
      id: item.keyNo,
    };
  });
};

const queryClearBitAPI = async (
  keyword: string,
  options: CompanyAutocompleteOptions
): Promise<CompanyDataType[]> => {
  if (keyword.length < 2 || keyword.length >= 100) {
    return [];
  }
  const searchUrl: string =
    'https://autocomplete.clearbit.com/v1/companies/suggest?query={keyword}';
  const url = getSearchUrl(keyword, searchUrl, options.searchUrl);
  const res: Response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
  });
  const json = <ClearBitResponseType[]>await res.json();
  return json.map((item) => {
    return {
      name: item.name,
      id: item.domain,
      avatar: item.logo,
    };
  });
};
