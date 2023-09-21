export const generateBanner = (packageJson) => {
  return `/*!
 * ${packageJson.name} v${packageJson.version}
 * (c) 2022-present Michael Sun
 * Released under the ${packageJson.license} License.
 */`;
};
