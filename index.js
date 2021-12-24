/*
const readline = require('readline');

let rl = null;

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

process.stdout.write('Hello?\n');
rl.question(':\n', (res) => {
  process.stdout.write(res + '\n');
  if (res.trim() == 'q') {
    process.stdout.write('Goodbye\n');
    rl.close();
    return;
  }
  process.stdout.write('Hello, ' + res + '\n');
});
*/

const cli = require('./cli');

(async function() {
  cli.init();
  cli.send('Welcome.');

  while(true) {
    const answer = await cli.ask('');
    switch (answer) {
      case 'hello':
        cli.send('how are you?');
      break;
      case 'goodbye':
      case 'bye':
      case 'exit':
      case 'quit':
        cli.send('goodbye');
        cli.close();
        process.exit(0);
      break;
      default:
        cli.send('hello, ' + answer);
      break;
    }
  }

  cli.close();
})();

