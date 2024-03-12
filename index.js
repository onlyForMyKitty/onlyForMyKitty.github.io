function typeWriterForHeader(text, element_tag) {
    let i = 0; // переместить объявление i внутрь функции
    const intervalId = setInterval(function() {
        if (i < text.length) {
            document.querySelector(element_tag).innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(intervalId); // остановить интервал после завершения анимации
        }
    }, 70);
}


function typeWriterForLast(text, element_tag) {
    let i = 0; // переместить объявление i внутрь функции
    const intervalId = setInterval(function() {
        if (i < text.length) {
            document.querySelector(element_tag).innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(intervalId); // остановить интервал после завершения анимации
        }
    }, 30);
}

window.onload = function() {
    setTimeout(function() {
        document.getElementById("first_loading").style.display = "none";
        requestAnimationFrame(function() {
            document.getElementById('header').style.display = "flex";
            typeWriterForHeader("С Днюшечкой, Булочка!","#header > h1");
        });
    }, 2500);

    setTimeout(function() {
        document.getElementById("wait_text").style.display = "block";
        typeWriterForHeader("Так, подожди-ка...", "#wait_text > h1");
    }, 4700);

    setTimeout(function() {
        document.getElementById("y_e_menu").style.display = "block"
    }, 6800);


}

let count_no_clicks = 0;



// скользящая кнопка нет
document.getElementById("no_button").addEventListener("click", function() {
    var button = document.getElementById("no_button");
    
    var maxX = window.innerWidth - button.offsetWidth;
    var maxY = document.documentElement.clientHeight - button.offsetHeight - 300; // Используем document.documentElement.clientHeight
    
    var randomX = Math.max(0, Math.floor(Math.random() * maxX));
    var randomY = Math.max(0, Math.floor(Math.random() * maxY));
    
    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";

    count_no_clicks++;
    if (count_no_clicks > 5) { // Если кликов больше 5, удаляем кнопку
        document.getElementById("no_button").remove();
    }
});
document.getElementById("yes_button").addEventListener("click", function() {
    if (count_no_clicks === 0) {
                alert("Котенок даже не попробует меня обмануть?");
        } else {
        console.log("сработано");
        document.getElementById("wait_text").remove();;
        document.getElementById("yes_button").remove();;
        document.getElementById("button_container").remove();;
        document.getElementById("question_container").remove();;
        document.getElementById("header").remove();;
        document.getElementById("y_e_menu").remove();
        document.getElementById("first_loading").remove();
        document.getElementById("confeti_gif").style.display = "block";
        document.getElementById("last_text").style.display = "block";
        typeWriterForLast("Поздравляююю!!!😙😗😘Ты стала на годик ближе к совершеннолетию, осталось совсем чуть-чуть🤩Оставайся такой же великолепной, какая ты сейчас!Остальное поздравление уже совсем скоро будет ждать тебя у твоего дома💞💞💞", "#last_text");



    }
});