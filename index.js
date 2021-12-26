/*
 * @Author: Shirtiny
 * @Date: 2021-12-26 18:26:34
 * @LastEditTime: 2021-12-26 20:03:20
 * @Description:
 */

console.log("启动");

const createWorkerUrl = (text) => {
  const blob = new Blob([text], { type: "text/javascript" });
  return URL.createObjectURL(blob);
};

const Product = () => {
  return new Worker(createWorkerUrl("WORK_STRING"));
};

const worker = Product();

console.log(worker);
worker.postMessage("快干活！");
worker.addEventListener("message", (e) => {
  console.log(e);
});

export {};
