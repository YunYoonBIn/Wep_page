const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function begin(){
    main.style.WebkitAnimation = "fadeOut 0.8s";
    main.style.animation = "fadeOut 0.8s";
    setTimeout(() => {
      qna.style.WebkitAnimation = "fadeIn 0.8s";
      qna.style.animation = "fadeIn 0.8s";
      setTimeout(() => {
        main.style.display = "none";
        qna.style.display = "block";
      }, 350)
    }, 350);
  }
  