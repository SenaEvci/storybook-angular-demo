module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@storybook/addon-notes',
    '@storybook/addon-actions'
  ],
  babel: async (options) => ({
    ...options,
    // any extra options you want to set
  }),
}

