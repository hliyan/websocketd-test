const readline = require('readline');

let rl = null;

function init() {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

function ask(text) {
  return new Promise((resolve, reject) => {
    rl.question(text + '\n', resolve);
  });
}

function close() {
  rl.close();
}

function send(text) {
  process.stdout.write(text + '\n');
}

module.exports = { ask, init, close, send };
