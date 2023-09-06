export const objectToQueryString = (object: { [key: string]: any }, prefix = '') => {
  return (
    prefix +
    Object.keys(object)
      .map((key) => {
        return `${key}=${object[key]}`;
      })
      .join('&')
  );
};
