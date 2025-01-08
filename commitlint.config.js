import getEmojiType from "./helper/get_emoji_types.js";

export default {
  extends: ['@commitlint/config-conventional'], formatter: '@commitlint/format', rules: {
    'type-enum': [2, 'always', getEmojiType()]
  }
};
