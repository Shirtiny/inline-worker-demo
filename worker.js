/*
 * @Author: Shirtiny
 * @Date: 2021-12-26 18:16:26
 * @LastEditTime: 2021-12-26 20:02:14
 * @Description:
 */
console.log("worker的代码执行");

self.onmessage = (e) => {
  console.log("收到了一条消息 : ", e);
  self.postMessage("好")
};