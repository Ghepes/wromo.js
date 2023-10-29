const { program } = require('commander');

program
  .version('1.0.0')
  .description('A wonderful script called "wromo"');

program
  .command('hello')
  .description('Displays a greeting message')
  .action(() => {
    console.log('Hello from "wromo"!');
  });

program.parse(process.argv);
