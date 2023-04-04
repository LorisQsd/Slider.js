const leftChevron = document.querySelector(".chevron.left");
const rightChevron = document.querySelector(".chevron.right");
const card = document.querySelector(".card");
const cardImgAttr = card.children[0];
const slideTxt = card.children[1];
let lock = false;

// ANIMATE FUNCTIONS
function animeRight(start, end) {
    card.animate([
        { transform: 'translateX(' + start + ')' },
        { transform: 'translateX(' + end + ')' }
    ], {
        duration: 200,
    });
    setTimeout(() => { lock = false }, 200);
}

function animeLeft(start, end) {
    card.animate([
        { transform: 'translateX(' + start + ')' },
        { transform: 'translateX(' + end + ')' }
    ], {
        duration: 200,
    });
    setTimeout(() => { lock = false }, 200);
}

// SET CARD FUNCTION
function setCard(cardNumber) {
    cardImgAttr.setAttribute("src", "ressources/cat-" + cardNumber + ".jpg");
    slideTxt.textContent = "Slide " + cardNumber;
    card.setAttribute("data-pos", cardNumber);
}

// SLIDE RIGHT
rightChevron.addEventListener("click", rightSlide);

function rightSlide() {
    const pos = card.getAttribute("data-pos");
    if (lock) return;
    lock = true;
    animeLeft('0%', '-100%');

    setTimeout(swipeSlide, 170);

    function swipeSlide() {
        if (pos == 1) {
            setCard(2);
            animeRight('100%', '0%')
        } else if (pos == 2) {
            setCard(3);
            animeRight('100%', '0%')
        } else {
            setCard(1);
            animeRight('100%', '0%')
        }
    }
}

// SLIDE LEFT
leftChevron.addEventListener("click", leftSlide)

function leftSlide() {
    const pos = card.getAttribute("data-pos");
    if (lock) return;
    lock = true;
    animeRight('0%', '100%');

    setTimeout(swipeSlide, 170);

    function swipeSlide() {
        if (pos == 1) {
            setCard(3);
            animeLeft('-100%', '0%')
        } else if (pos == 2) {
            setCard(1);
            animeLeft('-100%', '0%')
        } else {
            setCard(2);
            animeLeft('-100%', '0%')
        }
    }
}