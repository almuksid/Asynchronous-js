# 1. ⚡Event Loop Visualizer

| Item | Meaning |
|------|---------|
| **Call Stack** | Runs code |
| **Web APIs** | Process async tasks setTimeout(), fetch(), Event listeners (click, keyup, etc.) |
| **Queues (Task Queue & Microtask Queue)** | Store callbacks until the stack is free |
| **Event Loop** | Traffic manager that moves tasks to the stack |

## example
```js

console.log('Req data 1');

setTimeout(() => {
    console.log('Req data 2');
}, 5000);

console.log('Req data 3 ');
```
---
---
# 2. 📥 Add fetch API to show posts in UL

**1️⃣ First .then = response from server**
**2️⃣ Second .then = actual data**
**3️⃣ Third .catch = error message**
```html
<ul class="dataList"></ul>
```
```js
const dataList = document.querySelector('.dataList');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.title;
            dataList.append(li);
        })
    })
    .catch(err => err.message);
```