// server.js 또는 app.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 정적 파일 제공 (HTML 파일)
app.use(express.static(path.join(__dirname, '.')));

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});
