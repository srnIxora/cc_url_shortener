import * as path from "node:path";
import * as fs from "node:fs";


function getEmojiType() {
  try {
    const configPath = path.join(process.cwd(), '.czrc');

    const data = fs.readFileSync(configPath, 'utf8');

    const types = JSON.parse(data).config['cz-emoji'].types;

    return types.map((type) => type.name);
  } catch (e) {
    console.error(e);
    return [];
  }
}

export default getEmojiType;
