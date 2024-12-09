// Create a navbar container
const navbar = document.createElement("nav");
document.body.appendChild(navbar);
navbar.style.display = "flex";
navbar.style.justifyContent = "space-between";
navbar.style.alignItems = "center";
navbar.style.padding = "10px 100px";
navbar.style.backgroundColor = "#0078d7";
navbar.style.color = "white";

// Create the logo
const logo = document.createElement("div");
navbar.appendChild(logo);
logo.innerText = "Logo";
logo.style.fontSize = "24px";
logo.style.fontWeight = "bold";
logo.style.cursor = "pointer"

// Create the menu 
const ul = document.createElement("ul");
navbar.appendChild(ul);
ul.style.display = "flex";
ul.style.gap = "20px";
ul.style.padding = "0px";

const menuItem = ["Home", "About", "Service", "Contact"]
menuItem.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a")
    a.style.cursor = "pointer"
    a.innerText = item;
    li.appendChild(a);
    ul.appendChild(li)
    li.style.listStyle = "none";
})

// add social icons
const socialIcons = document.createElement("div");
navbar.appendChild(socialIcons);
// icon one
const a = document.createElement("a");
a.style.cursor = "pointer"
const i = document.createElement("i");
socialIcons.appendChild(a)
a.appendChild(i)
i.className = "fa-brands fa-square-instagram";
i.style.color = "white";
i.style.marginRight = "20px";
i.style.fontSize = "24px";
// icon two
const a2 = document.createElement("a");
a2.style.cursor = "pointer";
const i2 = document.createElement("i");
socialIcons.appendChild(a2)
a2.appendChild(i2)
i2.className = "fa-brands fa-facebook";
i2.style.color = "white";
i2.style.fontSize = "24px";