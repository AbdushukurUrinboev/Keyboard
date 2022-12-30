let uzun = document.querySelectorAll('span').length;
for (let i = 0; i < uzun; i++) {
    document.querySelectorAll("span")[i].addEventListener("click", function () {
        let clickedButton = this.innerHTML;

        console.log(clickedButton);

        makesound(clickedButton);
        buttonAnimation(clickedButton);
    })

}

document.addEventListener("keypress", function (event) {
    let pressedButton = event.key;
    console.log(pressedButton);
    makesound(pressedButton);
    buttonAnimation(pressedButton);

})

function makesound(bob) {
    switch (bob) {
        case 'Shift':
        case "Q":
            let crash = new Audio('1.mp3');
            crash.play();
            break;
        case 'w':
            let kickbass = new Audio('1.mp3');
            kickbass.play();
            break;
        case 'e':
            let snare = new Audio('1.mp3');
            snare.play();
            break;
        case 'r':
            let tom1 = new Audio('1.mp3');
            tom1.play();
            break;
        case 't':
            let tom2 = new Audio('1.mp3');
            tom2.play();
            break;
        case 'y':
            let tom3 = new Audio('1.mp3');
            tom3.play();
            break;
        case 'u':
            let tom4 = new Audio('1.mp3');
            tom4.play();
            break;
        case 'i':
            let i = new Audio('1.mp3');
            i.play();
            break;
        case 'o':
            let o = new Audio('1.mp3');
            o.play();
            break;
        case 'p':
            let P = new Audio('1.mp3');
            P.play();
            break;
        case 'a':
            let a = new Audio('1.mp3');
            a.play();
            break;
        case 's':
            let s = new Audio('1.mp3');
            s.play();
            break;
        case 'd':
            let d = new Audio('1.mp3');
            d.play();
            break;
        case 'f':
            let f = new Audio('1.mp3');
            f.play();
            break;
        case 'g':
            let g = new Audio('1.mp3');
            g.play();
            break;
        case 'h':
            let h = new Audio('1.mp3');
            h.play();
            break;
        case 'j':
            let j = new Audio('1.mp3');
            j.play();
            break;
        case 'k':
            let k = new Audio('1.mp3');
            k.play();
            break;
        case 'l':
            let l = new Audio('1.mp3');
            l.play();
            break;
        case 'z':
            let z = new Audio('1.mp3');
            z.play();
            break;
        case 'x':
            let x = new Audio('1.mp3');
            x.play();
            break;
        case 'c':
            let c = new Audio('1.mp3');
            c.play();
            break;
        case 'v':
            let v = new Audio('1.mp3');
            v.play();
            break;
        case 'b':
            let b = new Audio('1.mp3');
            b.play();
            break;
        case 'n':
            let n = new Audio('1.mp3');
            n.play();
            break;
        case 'm':
            let m = new Audio('1.mp3');
            m.play();
            break;
        case 'Shift':
            let shift = new Audio('1.mp3');
            shift.play();
            break;
        case 'Ctrl':
            let number = new Audio('1.mp3');
            number.play();
            break;
        case 'Space':
            let space = new Audio('1.mp3');
            space.play();
            break;
        case 'Enter':
            let ret = new Audio('1.mp3');
            ret.play();
            break;
        case 'Alt':
            let alt = new Audio('1.mp3');
            alt.play();
            break;
        case 'Meta':
            let windows = new Audio('1.mp3');
            windows.play();
            break;
        case 'Backspace':
            let del = new Audio('1.mp3');
            del.play();
            break;
    }
}

function buttonAnimation(currenKey) {
    // let myKey = document.querySelector('.w');
    let activeButton = document.querySelector('.' + currenKey);
    // console.log(activeButton.innerHTML);
    activeButton.classList.add('pressed');
    setTimeout(function () {
        activeButton.classList.remove('pressed');

    }, 100)
}


function isKeypressed(event) {
    if (event.ctrlKey) {
        makesound("ctrl")
    } else {
        console.log("Bosilmadi");
    }
}


// function isKeypressed(event) {
//     if (event.ctrlKey) {
//         if (event.ctrlKey === true) {
//             makesound("Ctrl")
//             buttonAnimation("Ctrl")
//         }
//     }
// }

function num(event) {
    if (event.shiftKey) {
        if (event.shiftKey === true) {
            makesound("Shift")
            buttonAnimation("Shift")
        }
    }
}

function alt1(event) {
    if (event.altKey) {
        if (event.altKey === true) {
            makesound("Alt")
            buttonAnimation("Alt")
        }
    }
}

function escap(event) {
    if (event.key === "Backspace") {
        makesound("Backspace")
        buttonAnimation("Backspace")
    }
}

function www(event) {
    if (event.key === "Meta") {
        makesound("Meta")
        buttonAnimation("Meta")
    }
}

function space(event) {
    if (event.key === " ") {
        makesound("Space")
        buttonAnimation("Space")
    }
}

