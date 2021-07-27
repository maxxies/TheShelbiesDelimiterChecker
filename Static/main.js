//Document elements
let textBox = document.getElementsByTagName('textArea');
const message = document.getElementById('result-box');
let ul = document.querySelector('.message-box');
const span = document.getElementById('word');
let textBoxId = document.getElementById('textArea');


//Word count function
function wordCount() {
    //Gets value from textarea on every keyup
    let text;
    let i;
    for (text of textBox) {
        continue;
    }
    //Gets words from value
    var spaces = text.value.match(/\S+/g);
    var words = spaces ? spaces.length : 0;
    span.innerHTML = "Words : " + words;
    //Update current word count
    updateMessage();
}

//Checks delimiters on key up
function checkBracket(e) {
    //Gets value from textarea on every keyup
    let text;
    for (text of textBox)
        continue;
    var entry = text.value;
    //Local variables
    let stack = [];
    //condition variable checks if there are impending errors when stack is empty
    var condition;
    var counter;

    //Auto closing parenthesis
    if (e.keyCode == 219 && entry[entry.length - 1] == '[') {
        textBoxId.value = entry + ']';
        entry += ']';
        textBoxId.selectionEnd = textBoxId.selectionEnd - 1;
    } else if (e.keyCode == 219 && entry[entry.length - 1] == '{') {
        textBoxId.value = entry + '}';
        entry += '}';
        textBoxId.selectionEnd = textBoxId.selectionEnd - 1;
    } else if (e.keyCode == 188 && entry[entry.length - 1] == '<') {
        textBoxId.value = entry + '>';
        entry += '>';
        textBoxId.selectionEnd = textBoxId.selectionEnd - 1;
    } else if (e.keyCode == 57 && entry[entry.length - 1] == '(') {
        textBoxId.value = entry + ')';
        entry += ')';
        textBoxId.selectionEnd = textBoxId.selectionEnd - 1;
    }

    //Checks if a shift key is pressed, especially with another key to prevent codes from running twice because of two key ups simultaneoulsy
    if (e.keyCode != 16) {
        for (counter = 0; counter < entry.length; counter++) {
            //Gets character from text value
            var character = entry[counter];
            //Checks if empty spaces is repeatedly entered so All set is not printed

            switch (character) {
                case '(':
                case '[':
                case '{':
                case '<':
                    //Adds opening delimiter to stack
                    stack.unshift(character);
                    break;
                case ')':
                case '}':
                case ']':
                case '>':
                    //sets an error if closing delimiter is entered
                    if (stack.length == 0) {
                        var newmessage = "Error starting with a closing delimiter '" + character + "' .";
                        condition = 1;
                        updateMessage(newmessage);
                    }
                    else {
                        //Checks if delimiter matches and removes it from the stack or flag an error when a mismatch happens
                        //Condition is set to one when delimiter is not removed from the stack
                        switch (character) {
                            case ')':
                                if (stack[0] == '(') {
                                    stack.shift();
                                }
                                else {
                                    var errorOne = "Mismatched delimiter for '" + character + "' .";
                                    condition = 1;
                                    updateMessage(errorOne);
                                }
                                break;
                            case '}':
                                if (stack[0] == '{') {
                                    stack.shift();
                                }
                                else {
                                    var errorTwo = "Mismatched delimiter for '" + character + "' .";
                                    condition = 1;
                                    updateMessage(errorTwo);
                                }
                                break;
                            case ']':
                                if (stack[0] == '[') {
                                    stack.shift();
                                }
                                else {
                                    var errorThree = "Mismatched delimiter for '" + character + "' .";
                                    condition = 1;
                                    updateMessage(errorThree);
                                }
                                break;
                            case '>':
                                if (stack[0] == '<') {
                                    stack.shift();
                                }
                                else {
                                    var errorFour = "Mismatched delimiter for '" + character + "' .";
                                    condition = 1;
                                    updateMessage(errorFour);
                                }
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    }
    //Flags an error when stack is not empty, when there are no more text, and a shift key is pressed
    if (stack.length != 0 && condition != 1 && e.which != 16) {
        var topCharacter = stack[0];
        var closing = "Hey, you are missing closing delimeter for '" + topCharacter + "' .";
        updateMessage(closing);
    }
    //Flags a no error when stack is empty, no more text and shift key is not pressed
    else if (stack.length == 0 && condition != 1 && counter != 0 && entry != " " && e.which != 16) {
        var allSet = "Yay, all set to go.";
        updateMessage(allSet);
    }
}
//Sets error messages 
function updateMessage(info) {
    var li = document.createElement('li');
    li.textContent = info.trim();
    li.classList.add('focus');
    ul.appendChild(li);
}
// removes error messages when there is a key down
function removeTags() {
    var elements = document.querySelectorAll('.focus');
    for (let i of elements) {
        i.remove();
    }
}



