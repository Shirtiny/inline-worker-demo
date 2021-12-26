/*
 * @Author: Shirtiny
 * @Date: 2021-12-26 18:46:37
 * @LastEditTime: 2021-12-26 19:39:17
 * @Description:
 */

const fs = require("fs");

const run = async () => {
  const workCode = await fs.promises.readFile("./worker.js", {
    encoding: "utf-8",
  });
  const mainCode = await fs.promises.readFile("./index.js", {
    encoding: "utf-8",
  });
  const rs = mainCode.replace("\"WORK_STRING\"", JSON.stringify(workCode));
  await fs.promises.writeFile("./dist.worker.js", rs);
};

run();
