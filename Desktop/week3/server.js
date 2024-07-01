const express = require('express');
const app = express();
const port = 3000;
const path = require('path'); // 引入 path 模組

// 連接到 html，設置靜態文件資料夾(可略)
app.use(express.static('public'));

// 設定完這步驟如果路徑用 http://localhost:3000/getData.html 就可以看到檔案
app.listen(3000, ()=>{
    console.log("測試這段文字什麼時候會出現");
});

// app.get > 路徑用 http://localhost:3000/ 會看到該段文字，但這樣不會是用一份 HTML 檔案
app.get("/" ,(req,res)=>{
    res.send("Hello, My Server!");
});


// query string

app.get("/getData", (req, res) => {
    const number = req.query.number;
    if (!number) {
      res.send("Lack of Parameter");
    } else if (isNaN(number)) {
      res.send("Wrong Parameter"); //如果檢查出來不是數字，會回傳 False，並且印出 Wrong Parameter
    } else {
      console.log(23);
      const answer = (number * (Number(number) + 1)) / 2; // Number 將 number 轉換成數字
      res.send(answer.toString());
    }
  });
  

//Assignment3

app.get("/sum" ,(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'sum.html'));
});