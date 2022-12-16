let parentElement = document.querySelector('.gridHolder');

function div16() {
        for (let column = 1; column <= 256; column++) {
            let element = document.createElement("div");
            element.className = 'container'
            element.style.width = "32px";
            element.style.height = "32px";
            element.style.border = '1px';
            parentElement.appendChild(element);
        }  
}


function div32() {
    for (let column = 1; column <= 1024; column++) {
        let element = document.createElement("div");
        element.className = 'container'
        element.style.width = "16px";
        element.style.height = "16px";
        element.style.color = 'red';
        parentElement.appendChild(element);
    }  
}

div32();