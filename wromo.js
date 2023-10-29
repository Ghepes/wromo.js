const { program } = require('commander');
const { Argument, Command, CommanderError, InvalidArgumentError, Help, Option } = require('wromo');

program
  .version('1.0.4')
  .description('A wonderful script called "wromo"');

program
  .command('hello')
  .description('Displays a greeting message')
  .action(() => {
    console.log('Hello from "wromo"!');
  });

program.parse(process.argv);
