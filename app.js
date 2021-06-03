let container = document.createElement('div');
document.body.appendChild(container);
let head = document.createElement("h2");
container.appendChild(head);
let date;

function callDate() {
    setInterval(() => {
        date = new Date();
        let finalDate = date.toLocaleTimeString();
        head.innerText = finalDate;
    }, 1000);
}

function createClock(className, display, flexDirection, alignItems, justifyContent, width, margin, backgroundColor, border, borderRadius, childPadding, childColor) {
    container.className = className;
    container.style.display = display;
    container.style.flexDirection = flexDirection;
    container.style.alignItems = alignItems;
    container.style.justifyContent = justifyContent;
    container.style.width = width;
    container.style.margin = margin;
    container.style.backgroundColor = backgroundColor;
    container.style.border = border;
    container.style.borderRadius = borderRadius;
    head.style.padding = childPadding;
    head.style.color = childColor;
    callDate();
}

createClock("container", "flex", "row", "center", "center", "18%", "100px auto", "white", "3px solid blue", "30px", "30px 40px", "cyan");

export { createClock };
