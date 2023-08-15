import type { CompanyAutocompleteOptions } from './types';
import { replaceAll } from '@company-ui/shared';

const qccAvatarUrls: string[] = [
  'https://image.qcc.com/logo/{id}.jpg',
  'https://image.qcc.com/auto/{id}.jpg',
];

export const handleAvatar = async (img: HTMLImageElement, options: CompanyAutocompleteOptions) => {
  const id = img.dataset.id || '';
  if (options.avatarUrl) {
    img.src = await getImageData(id, [options.avatarUrl]);
    return;
  }
  switch (options.api) {
    case 'qcc_open':
      img.src = await getImageData(id, qccAvatarUrls);
      break;
  }
};

/**
 * get image data
 * @param id
 * @param urls
 */
export const getImageData = async (id: string, urls: string[]) => {
  for (const url of urls) {
    try {
      const truthUrl = replaceAll(url, '{id}', id);
      // const truthUrl = url + id
      const response = await fetch(truthUrl);
      if (response.status === 200) {
        const blob = await response.blob();
        return URL.createObjectURL(blob);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return '';
};
