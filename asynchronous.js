console.log('Req data 1');

setTimeout(() => {
    console.log('Req data 2');
}, 5000);

console.log('Req data 3 ');

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