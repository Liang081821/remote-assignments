// 第一題

function calculate(args) {
    let value;
  
    if (args.op == "+") {
      value = args.n1 + args.n2;
    } else if (args.op == "-") {
      value = args.n1 - args.n2;
    } else {
      value = "Not supported";
    }
  
    return value;
  }
  
  // 第二題
  
  function max(numbers) {
    let maxnumber = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxnumber) {
        maxnumber = numbers[i];
      }
    }
    return maxnumber;
  }
  
  // 第三題
  function calculate(data) {
    let sum = 0; //初始化 sum
    for (let i = 0; i < data.products.length; i++) {
      sum += data.products[i].price;
    }
    const total = sum * (1 - data.discount);
    return total;
  }
  