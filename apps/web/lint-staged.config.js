export default {
  '**/*.{ts,tsx,vue}': (filenames) => {
    return [`eslint ${filenames.map((filename) => `"${filename}"`).join(' ')} --fix --color --cache`];
  },
};
