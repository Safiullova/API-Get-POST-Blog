const container = document.querySelector('.container'); // переменная для постов
let postContent = ""; // Переменная для отрисовки карточки (объект поста)

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())

    .then(json => {
        for ( let post of json) { // Цикл перебирает данные для каждого поста
            postContent += `<div class='post'>
                <h2>Заголовок: ${post.title}</h2>
                <div>Статья: ${post.body}</div>
                </div>`;
        }
        container.innerHTML = postContent; //Добавляю html-разметку в нужный элемент
    }
)