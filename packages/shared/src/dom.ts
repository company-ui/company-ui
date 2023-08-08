export const removeHtmlTags = (str: string): string => {
  return str.replace(/(<([^>]+)>)/gi, '')
}
