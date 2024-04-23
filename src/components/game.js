import React, { useState } from 'react';
// import "../../src/style/page/game.css" // 게임 페이지 스타일 시트 불러오기

function Game() {
  // 입력 상자의 값을 추적하기 위한 상태 변수
  const [inputValue, setInputValue] = useState('');
  // 박스들의 상태를 추적하기 위한 상태 변수
  const [boxes, setBoxes] = useState([]);
  // 각 박스에 대한 결과 값을 추적하기 위한 상태 변수
  const [resultValues, setResultValues] = useState([]);

  // 1부터 100까지의 랜덤 숫자를 생성하는 함수
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  // 입력 상자 값이 변경될 때 호출되는 핸들러 함수
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

// 박스들을 생성하는 핸들러 함수
const handleGenerateBoxes = () => {
  const numBoxes = parseInt(inputValue);
  if (!isNaN(numBoxes)) {
    // 입력된 숫자만큼 빈 상자를 생성
    const newBoxes = Array.from({ length: numBoxes }, (_, index) => ({
      id: index,
      value: '', // 빈 상자 생성
    }));
    setBoxes(newBoxes); // 생성된 박스들 상태 업데이트
    setResultValues([]); // 결과 값 초기화
  } else {
    alert('Please enter a valid number');
  }
};

// 각 상자에 랜덤 숫자를 추가하는 핸들러 함수
const handleAddRandomNumber = () => {
  const newBoxes = boxes.map(box => ({
    ...box,
    value: box.value === '' ? generateRandomNumber().toString() : box.value + ', ' + generateRandomNumber().toString(),
  }));
  setBoxes(newBoxes); // 박스들 상태 업데이트
  updateResultValues(newBoxes); // 결과 값 업데이트
};
  // 주어진 배열의 합의 일의 자리 숫자를 계산하는 함수
  const calculateLastDigitSum = (values) => {
    const sum = values.reduce((total, value) => total + parseInt(value), 0);
    return sum % 10;
  };

  // 각 박스에 대한 결과 값을 업데이트하는 함수
  const updateResultValues = (newBoxes) => {
    const newResultValues = newBoxes.map(box => {
      const values = box.value.split(',').map(value => parseInt(value.trim()));
      return calculateLastDigitSum(values); // 각 상자에 대한 합의 일의 자리 숫자 계산
    });
    setResultValues(newResultValues); // 결과 값 상태 업데이트
  };

  // JSX 반환
  return (
    <div>
      {/* 입력 상자 */}
      <input type="number" value={inputValue} onChange={handleInputChange} />
      {/* 박스 생성 버튼 */}
      <button onClick={handleGenerateBoxes}>Generate Boxes</button>
      {/* 랜덤 숫자 추가 버튼 */}
      <button onClick={handleAddRandomNumber}>Add Random Number</button>
      {/* 생성된 박스들 표시 */}
      <div>
        {boxes.map((box, index) => (
          <div key={box.id}>
            {/* 각 상자에 대한 입력 상자 */}
            <input
              type="text"
              value={box.value}
              readOnly // 읽기 전용으로 설정하여 사용자가 값을 변경할 수 없도록 합니다.
            />
            {/* 각 상자에 대한 결과 값 표시 상자 */}
            <input
              type="text"
              value={resultValues[index] || ''}
              readOnly // 읽기 전용으로 설정하여 사용자가 값을 변경할 수 없도록 합니다.
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;
