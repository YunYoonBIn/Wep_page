import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['자바', '파이썬', '자바스크립트']);
  let [좋아요, 좋아요변경] = useState(0);

  let [모달, 모달변경] = useState(false);

  let [누른제목숫자, 누른제목숫자변경] = useState(0);

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
        글제목.map(function (a,i) {
          return (
            <div className="list">
              <h3 onClick={ ()=>{ 누른제목숫자변경(i) } }> {a} 
              <span onClick={ ( )=>{ 좋아요변경 (좋아요 + 1) } }>👍</span> { 좋아요 } </h3>
              <p>9월 20일 적음</p>
              <hr />
            </div>
          )
        })
      }

      <button onClick={() => { (모달변경(!모달)) }}>게시글 열고닫기</button>
      {
        모달 === true
          ? <Modal 글제목 = { 글제목 } 누른제목숫자 = { 누른제목숫자 }> </Modal>
          : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>제목 : {props.글제목[props.누른제목숫자] }</h2>
      <p>날짜 : 2021/9/20</p>
      <p>내용 : 가나다라마바사아자차카타파하</p>
    </div>
  )
}

export default App;
