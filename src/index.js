import prompt from "prompt";
import chalk from "chalk";

import mainPrompt from "./prompts/prompt-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main(params) {
  prompt.get(mainPrompt, async (err, result) => {
    if (err) console.log("Error" + err);

    if (result.select == 1) await createQRCode();
    if (result.select == 2) await createPassword();
  });

  prompt.start();
}

main();
