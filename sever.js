const express = require('express');
const app = express();
const PORT = 3000;

let feedbacks = []; // 후기 저장 배열

app.use(express.json());
app.use(express.static('public')); // static 파일 제공

// 후기 저장 API
app.post('/feedback', (req, res) => {
    const { feedback } = req.body;
    feedbacks.push(feedback); // 후기 저장
    res.sendStatus(200); // 성공 응답
});

// 후기 조회 API
app.get('/feedback', (req, res) => {
    res.json(feedbacks); // 저장된 후기 전송
});

// 기본 경로
app.get('/', (req, res) => {
    res.send('홈페이지에 연결되었습니다!');
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다`);
});
