import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Front/card';
import App from './App';
import CardBack from './Front/CardBack';
import Click from './Front/Click';
import AddNew from './Fetch/fetch';

document.getElementById("SaveAnime").addEventListener("click", AddNew)

let Spine = JSON.parse(localStorage.getItem("Spine"));
let SpineLength = Spine.length;
setTimeout(CardBack , 600);

const stem = ReactDOM.createRoot(document.getElementById('stem'));
const char = ReactDOM.createRoot(document.getElementById("Characters"));
const seao = ReactDOM.createRoot(document.getElementById("Season"));

//dsffgnhmnbvfgm b
//tdhjckv

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
{Array(SpineLength).fill(<Card/>)}

</>)

setTimeout(Click, 1000)

export {stem , char , seao };




