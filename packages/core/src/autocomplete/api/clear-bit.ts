import type { ClearBitResponseType, CompanyDataType } from '../types';

export const queryClearBitAPI = async (
  keyword: string,
  abortController?: AbortController
): Promise<CompanyDataType[]> => {
  if (keyword.length < 2 || keyword.length >= 100) {
    throw new Error('keyword length must be between 2 and 100');
  }
  const url: string = `https://autocomplete.clearbit.com/v1/companies/suggest?query=${keyword}`;
  const res: Response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    signal: abortController?.signal,
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
