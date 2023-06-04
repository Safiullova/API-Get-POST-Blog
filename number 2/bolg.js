//получаю элементы и записываю в переменные
const title = document.querySelector('.form__title');
const text = document.querySelector('.form__text');
const btn = document.querySelector('.form__button');
const blog = document.querySelector('.blog');

let addSting = '';

btn.addEventListener('click', () => { //вешаю событие "клик" на кнопку, по клику сработает функция 

    let titleNew = title.value; //Перезаписываю в новую переменную значение из inputa (Заголовок статьи)
    titleNew = titleNew.substring(0, 1).toUpperCase() + titleNew.substr(1)
        .toLowerCase(); //Перезаписываю в правильном регистре

    let titleUp = "";
    if (titleNew === '') { // Проверяю заполнено ли поле ввода заголовка
        titleUp = "Статья без заголовка"
    }else {
        titleUp = titleNew;
        };

    let textNew = text.value; //Перезаписываю в новую переменную значение из inputa (текст статьи).
    textNew = textNew.substring(0, 1).toUpperCase() + textNew.substr(1)
        .toLowerCase(); //Перезаписываю в правильном регистре

        let textUp = "";
    if (textNew === '') { // Проверяю заполнено ли поле ввода заголовка
        textUp = "Текст отсутствует"
    }else {
        textUp = textNew;
        };

    addSting = `<div class="blog">
    <div class="item">
        <p class="title">${titleUp}</p>
        <p class="text">${textUp}</p>
    </div>
</div>` + addSting ;

    blog.innerHTML = addSting;// создаю новую разметку в блоге и передаю туда отредактированные значения ФИО и комментария

    title.value = ""; // очищаю поле ввода заголовка после клика
    text.value = "";   // очищаю поле ввода текста после клика 

    // делаю POST-запрос, чтобы создать пост
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: titleUp,
      body: textUp,
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

    
})



