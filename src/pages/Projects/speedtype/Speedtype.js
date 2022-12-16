import React from'react';
import ReactDOM from'react-dom';

function Speedtype() {
  return (
    <>
      <div class="timer" style="color: red;">0</div>
      <div class="container">
        <div class="random-text">
          <p id="randomText">
          </p>
        </div>
        <textarea placeholder="Type here" id="inputText" cols="30" rows="10" autofocus></textarea>
      </div>
      <div class="end-screen">
        <span class="time" id="time">Time: 60 seconds</span>
        <span class="wpm" id="wpm">WPM: 100wpm</span>
        <span class="accuracy" id="accuracy"></span>
        <button class="restart" onclick="getNextText()">Restart</button>
      </div>
    </>
  )
}