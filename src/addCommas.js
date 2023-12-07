function addCommas (num) {
  
  let numStr = String(num);
  let isNegative = false;

  if (numStr[0] === '-') {
    numStr = numStr.slice(1);
    isNegative = true;
  }

  if (numStr.length <= 3) {
    if (isNegative) {
      numStr = '-' + numStr;
    }
    return numStr;
  }

  else {
    let result = '';
    let count = 0;
    for (let i = numStr.length - 1; i >= 0; i--) {
      result = numStr[i] + result;
      count++;
      if (count % 3 === 0 && i !== 0) {
        result = ',' + result;
      }
    }
    if (isNegative) {
      result = '-' + result;
    }
    return result;
  }
}

module.exports = { addCommas };