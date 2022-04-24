document.getElementById("upper-case").addEventListener("click", function (){
    let text = document.getElementById("textarea").value.toUpperCase();
    document.getElementById("textarea").value = text;
})

document.getElementById("lower-case").addEventListener("click", function(){
    let text = document.getElementById("textarea").value.toLowerCase();
    document.getElementById("textarea").value = text;
})

document.getElementById("proper-case").addEventListener("click", function(){
    let text = document.getElementById("textarea").value;
    document.getElementById("textarea").value = toProperCase(text);
})

document.getElementById("sentence-case").addEventListener("click", function(){
    let text = document.getElementById("textarea").value;
    document.getElementById("textarea").value = toSentenceCase(text);
})

document.getElementById("save-text-file").addEventListener("click", function (){
    let text = document.getElementById("textarea").value;
    let filename = "text.txt";
    download(filename, text);
},false);

function toProperCase(text) {
    text = text.toLowerCase().split(" ");
    for (let i = 0; i < text.length; i++) {
        if (text[i].charAt(0) !== ".") {
            text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
        } else {
            text[i] = text[i].charAt(0) + text[i].charAt(1).toUpperCase() + text[i].slice(2);
        }
    }
    return text.join(" ");
}

function toSentenceCase(text) {
    text = text.toLowerCase().split(" ");
    text[0] = text[0].charAt(0).toUpperCase() + text[0].slice(1);
    for(let i = 1; i < text.length; i++) {
        if(text[i-1].charAt(text[i-1].length-1) === ".") {
            text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
        }
    }
    return text.join(" ");
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}