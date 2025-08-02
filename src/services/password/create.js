const { default: chalk } = require("chalk");

async function createPassword() {
  console.log(chalk.green("password"));
}

export default createPassword;
