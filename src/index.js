import prompt from "prompt";

import mainPrompt from "./prompts/prompt-main.js";
import chalk from "chalk";

async function main(params) {
  prompt.get(mainPrompt, async (err, result) => {
    if (result.select == 1) console.log(chalk.green("Escolheu o QRCode"));
    if (result.select == 2) console.log(chalk.green("Escolheu o Password"));
  });

  prompt.start();
}

main();
