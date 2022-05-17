


async function getData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    let box = document.getElementById('apiData');
    const heading = document.createElement('h2');
    heading.innerHTML = data.title;
    box.appendChild(heading);
}

getData();