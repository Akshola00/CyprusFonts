function viewFunc(displayName) {
    const hider = document.querySelectorAll('.p0001');
    const advert = document.querySelector('.DisplaySectionAdvert')
    hider.forEach((content) => {
        content.style.display = 'none';
        advert.style.display = "none";
    });

    document.getElementById(displayName).style.display = 'block'; // Corrected this line
}

function oninputFunc(IDofPreview, textBoxOfPreview,typesofthefont){
    let fontsetter = document.getElementById(IDofPreview)
    let showtextdivID = document.getElementById(textBoxOfPreview)


    let newsize = `${fontsetter.value}px`
    showtextdivID.style.fontSize = newsize

}

function onchangeFontType(IDofPreview,textBoxOfPreview){
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