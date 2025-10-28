// parser.js

import { createInterface } from 'readline';
import { Readable } from 'stream';

const parser = async (file) => {
  const rl = createInterface({
    input: new Readable(),
    crlfDelay: Infinity
  });

  const data = [];

  rl.on('line', (line) => {
    data.push(line);
  });

  return new Promise((resolve) => {
    rl.on('close', () => {
      resolve(data);
    });
  });
};

export default parser;