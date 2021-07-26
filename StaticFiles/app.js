//Document elements 
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const plus = document.querySelector("#increment");
const minus = document.querySelector("#decrement");
let textArea = document.getElementsByTagName('textArea');
let text = document.getElementById('textArea');
const changeFont = document.getElementById('background');
let file = document.getElementById('file');
const button = document.getElementById('submit');


//Global variable declaration
let font = 1.2;

//Handles switching of pages
sign_up_btn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
});

//Event listener for increment
plus.addEventListener('click', () => {
    increaseFont();
});

//Event listener for decrement
minus.addEventListener('click', () => {

    decreaseFont();
});

//Event listener for increment
plus.addEventListener('touchstart', (e) => {
    e.preventDefault();
    increaseFont();

});

//Event listener for decrement
minus.addEventListener('touchstart', () => {
    e.preventDefault();
    decreaseFont();
});

//Event to listen to a click on the submit buttun and run function
button.addEventListener('click', () => {
    fileOpener();
});

//Event to listen to a click on the submit buttun and run function
button.addEventListener('touchstart', () => {
    e.preventDefault();
    fileOpener();
});


//Functions increases font
function increaseFont() {
    if (font < 2.2) {  //sets limit
        font = font + 0.2; //increases font number
        var fixedFont = font.toFixed(1); //sets font to a one decimal place
        text.style.cssText = 'font-size: ' + fixedFont.toString() + 'em;'; //changes font size property
        minus.style.cssText = 'color: #00B4D8;'; //sets minus font color back to normal if it has exceeded its limit 
        //changes color if limit is met
        if (fixedFont == 2.4) {
            plus.style.cssText = 'color: #b3d7df;';
        }
    }
}

//Functions decreases font
function decreaseFont() {
    if (font > 0.8) { //sets limit
        font = font - 0.2;//decreses font number
        var fixedFont = font.toFixed(1);// sets font number to a one decimal place
        text.style.cssText = 'font-size: ' + fixedFont.toString() + 'em;';//changes the font property
        plus.style.cssText = 'color: #00B4D8;'; //sets plus font color back to normal if its has exceeded its limit
        //changes color if limit is met
        if (fixedFont == 0.8) {
            minus.style.cssText = 'color: #b3d7df;';
        }
    }
}


//Function changes font of the text area
function textFont(option) {
    if (option.value == 'time') {
        text.style.cssText = 'font-family : Calligraffitti';
    } else if (option.value == 'arial') {
        text.style.cssText = 'font-family : EB Garamond';
    } else if (option.value == 'cursive') {
        text.style.cssText = 'font-family : Playfair Display';
    } else if (option.value == 'sans') {
        text.style.cssText = 'font-family : Roboto';
    } else if (option.value == 'default') {
        text.style.cssText = 'font-family : Segoe UI';
    }
}


function fileOpener() {
    if (file.files.length == 0) { //Flags an error when no file is uploading
        alert('Error : No file selected');
        return;
    } else {
        var ext = file.value.split('.').pop();
        if (ext == 'txt') { //checks if file is a .txt file
            alert('Enter space bar in text area.');
        } else {
            alert('Recommended file type is .txt file.');//when file is not a .txt file
            return;
        }

    }
    let textfile = file.files[0];

    let fr = new FileReader();
    //loads file and read contents to the textarea
    fr.onload = (e) => {
        const textfile = e.target.result;
        const lines = textfile.split(/\r\n|\n/);
        text.value = lines.join('\n');
    };

    //when an error is encountered
    fr.onerror = (e) => {
        alert(e.target.error.name);
    };
    fr.readAsText(textfile);

    //count words available in document
    let text;
    let i;
    for (text of textArea) {
        continue;
    }
    var space = text.value.match(/\S+/g);
    var word = space ? space.length : 0;
    spanword.innerHTML = "Words : " + word;

}

