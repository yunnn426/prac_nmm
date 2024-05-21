
// Express와 Body-parser 라이브러리 import
const express = require('express');
const bodyParser = require('body-parser');

// Express 앱 생성
const app = express();

// Body-parser를 사용하여 POST 요청의 body를 파싱
app.use(bodyParser.json());

// POST /login 요청 핸들러
app.post('/signup', (req, res) => {
  const { id, password } = req.body;

  // 예시: 간단한 로그인 처리
  if (id === 'user' && password === 'pw') {
    // 로그인 성공 시 사용자 정보를 반환
    res.json({ id: 'user', name: 'John Doe', email: 'john@example.com' });
  } else {
    // 로그인 실패 시 에러 응답
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// 서버를 지정된 포트에서 실행
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
