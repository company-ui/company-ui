import type { QccGlobalAPIResponseType, CompanyDataType } from '../types';

export const queryQccGlobalAPI = async (
  keyword: string,
  abortController?: AbortController
): Promise<CompanyDataType[]> => {
  if (keyword.length < 2 || keyword.length >= 100) {
    throw new Error('keyword length must be between 2 and 100');
  }
  const url: string = `https://company-autocomplete-api.vercel.app/qcc-global/search/${keyword}`;
  const res: Response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    signal: abortController?.signal,
  });
  const json = <QccGlobalAPIResponseType>await res.json();
  return json.resultList.map((item) => {
    return {
      name: item.name,
      id: item.keyNo,
      avatar: item.imgUrl,
    };
  });
};
