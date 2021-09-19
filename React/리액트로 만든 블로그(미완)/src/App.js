import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['자바', '파이썬', '자바스크립트']);
  let [좋아요, 좋아요변경] = useState(0);

  let [모달, 모달변경] = useState(false);

  function 제목바꾸기(params) {
    var newArray = [...글제목];
    newArray[2] = 'C언어';
    글제목변경(newArray);
  }

  function 정렬(params) {
    var newArray = [...글제목];
    newArray = newArray.sort();
    글제목변경(newArray);
  }

  return (
    <div className="App">

      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <button onClick={정렬}>test정렬</button>
      <button onClick={제목바꾸기}>test제목 바꾸기</button>

      {
        글제목.map(function (i) {
          return (
            <div className="list">
              <h3> { i } <span onClick={() => { 좋아요변경(좋아요 + 1) }}>👍</span> {좋아요} </h3>
              <p>9월 11일 작성</p>
              <hr />
            </div>
          )
        })
      }

      <button onClick={() => { (모달변경(!모달)) }}>버튼</button>
      {
        모달 === true
          ? <Modal> </Modal>
          : null
      }

    </div>
  );
}

function Modal(params) {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>내용</p>
    </div>
  )
}

export default App;
