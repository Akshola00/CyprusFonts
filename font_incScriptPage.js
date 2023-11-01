const hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click', () => {

    var ham1 = document.getElementById('ham1')
    var ham2 = document.getElementById('ham2')
    var ham3 = document.getElementById('ham3')

    ham1.classList.toggle('x1')
    ham2.classList.toggle('x2')
    ham3.classList.toggle('x3')
})

function header() {
    var mynav = document.getElementById('menu')
    mynav.classList.toggle('show')
}


function viewFunc(displayName) {
    const hider = document.querySelectorAll('.p0001');
    const advert = document.querySelector('.DisplaySectionAdvert');
    const popup = document.querySelector('.popupbody')
    hider.forEach((content) => {
        content.style.display = 'none';
        advert.style.display = "none";
    });


    if (window.innerWidth <= 712) {
        popup.style.display = "grid";
        popup.style.position = "fixed";
    }
    document.getElementById(displayName).style.display = 'block'; 
}

const popupbody = document.getElementById('popupbody');
const closebutton = document.getElementById('closebutton')
closebutton.addEventListener('click', () => {
    popupbody.style.display = 'none'
});

window.addEventListener("click", (event) => {
    if (event.target == popupbody) {
        popupbody.style.display = "none";
    }
});

function oninputFunc(IDofPreview, textBoxOfPreview, typesofthefont) {
    let fontsetter = document.getElementById(IDofPreview)
    let showtextdivID = document.getElementById(textBoxOfPreview)


    let newsize = `${fontsetter.value}px`
    showtextdivID.style.fontSize = newsize

}

const typessser = document.querySelector('.john')
typessser.addEventListener('click', () => {
    document.getElementById('types').classList.toggle('shower');
})

function onchangeFontType(IDofPreview, textBoxOfPreview) {
    let typesofthefont = document.getElementById(IDofPreview);
    let mytextBoxOfPreview = document.getElementById(textBoxOfPreview)

    let fontWeight = 'normal';
    let fontStyle = 'normal';

    if (typesofthefont.value == 'Bold') {
        fontWeight = 'bold'
    } else if (typesofthefont.value == 'Italics') {
        fontStyle = 'italic'
    } else if (typesofthefont.value == 'Thin') {
        fontStyle = 'lighter'
    }

    mytextBoxOfPreview.style.fontWeight = fontWeight;
    mytextBoxOfPreview.style.fontStyle = fontStyle;

}

const searchInput = document.getElementById("searchbar");
const fontList = document.getElementById("fontDisplaySection");

const egfont = document.getElementsByClassName("egfont")

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const fonts = fontList.getElementsByClassName("henry");
    for (const font of fonts) {
        const fontName = font.querySelector(".name").textContent.toLowerCase();
        if (fontName.includes(searchTerm)) {
            font.style.display = "block";
            egfont.style.flexGrow = 1
        } else {
            font.style.display = "none";
        }
    }
});

const firstpopup = document.getElementById('firstpopup')
function fpop() {
    firstpopup.style.display = "block";
}
//    setTimeout(fpop, 6000) ;

const mibc = document.getElementById('mainpopup_inside_buttons_close');
mibc.addEventListener('click', () => {
    firstpopup.style.display = "none";
})

function randad() {
    window.addEventListener('click', () => {
        window.location.href = "newpage.html";
    })
}
// setTimeout(randad, 6000);