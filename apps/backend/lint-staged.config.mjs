export default {
  '**/*.ts': (filenames) => {
    return [
      `eslint ${filenames.map((filename) => `"${filename}"`).join(' ')} --fix --color --cache`,
    ];
  },
};
