class TestController {
  static async noTwo(req, res, next) {
    let arrayData = [1, 2, [3, 4], 5, [6, 7], 8];
    let result = arrayData.reduce((pre, current, index) => {
      if (typeof current === "object") {
        for (let i = 0; i < current.length; i++) {
          pre.push(current[i]);
        }
      } else {
        pre.push(current);
      }
      return pre;
    }, []);
    res.status(200).json(result);
  }
  static async noThree(req, res, next) {
    let numberOfData = 56234847;
    numberOfData = numberOfData.toString().split("");
    let result = numberOfData.reduce((pre, current, index) => {
      let zeroCount = "";
      for (let i = 0; i < numberOfData.length - (index + 1); i++) {
        zeroCount += "0";
      }
      pre = [...pre, current + zeroCount];
      return pre;
    }, []);

    res.status(200).json(result);
  }
}
module.exports = TestController;
