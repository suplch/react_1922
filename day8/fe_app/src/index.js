import { add, sub, sum } from './calu';
import './style';
import logo from  './logo';
alert(logo)
console.log('Hello world', add(2, 4))

console.log('bye', sub(5, 2))

console.log(sum(1, 100))

const div = document.createElement("div");

div.className = "box";
div.innerHTML = "Hello";

document.body.appendChild(div);
const img = document.createElement('img');
img.src = logo;
document.body.appendChild(img)