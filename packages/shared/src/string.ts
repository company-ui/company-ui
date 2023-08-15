export const stringToJson = (str: string): any[] => {
  try {
    const result = JSON.parse(str);
    if (Array.isArray(result)) {
      return result;
    } else {
      return [];
    }
  } catch (e) {
    return [];
  }
};
