// wromo.js
const { program } = require('commander');
const { Argument } = require('./lib/argument.js');
const { Command } = require('./lib/command.js');
const { CommanderError, InvalidArgumentError } = require('./lib/error.js');
const { Help } = require('./lib/help.js');
const { Option } = require('./lib/option.js');

module.exports = {
    Argument,
    Command,
    CommanderError,
    InvalidArgumentError,
    Help,
    Option
  };

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
