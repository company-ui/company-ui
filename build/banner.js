export const generateBanner = (packageJson) => {
  return `/*!
 * ${packageJson.name} v${packageJson.version}
 * (c) 2022-2023 Michael Sun
 * Released under the ${packageJson.license} License.
 */`;
};
