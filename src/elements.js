const menuPanel = document.createElement("div")
menuPanel.classList.add("menu-panel-wrapper","hide")
document.body.appendChild(menuPanel)

const menuCloseButton = document.createElement("div")
menuCloseButton.classList.add("menu-close-button", "hide")
document.body.appendChild(menuCloseButton)

menuCloseButton.addEventListener("click", () => {
  menuOpenButton.classList.toggle("hide")
  menuPanel.classList.toggle("hide")
  menuCloseButton.classList.toggle("hide")
})

let clicksOutsideMenuPanel = 0;

const menuOpenButton = document.createElement("div")
menuOpenButton.classList.add("menu-open-button")
document.body.appendChild(menuOpenButton)
menuOpenButton.addEventListener("click", () => {
  menuOpenButton.classList.toggle("hide")
  menuPanel.classList.toggle("hide")
  menuCloseButton.classList.toggle("hide")
  clickOutsideHandler()
})

const menuPanelElementsWrapper = document.createElement("div")
menuPanelElementsWrapper.classList.add("menu-panel-elements-wrapper")
menuPanel.appendChild(menuPanelElementsWrapper)

const bodyElements = Array.prototype.slice.call(document.body.getElementsByTagName("*"));

const filteredElements = bodyElements.filter((element) => {
 if(element.className == "menu-close-button hide" || 
    element.className == "menu-open-button" || 
    element.className == "menu-panel-wrapper hide" || 
    element.localName == "script"
  ) return;
  return element;
})

console.log(filteredElements)

let elementsToPrint = []

filteredElements.forEach(element => {
  elementsToPrint.push({
    HTMLElement: element,
    text: `${element.localName}.${element.className}`
  })
});

elementsToPrint.forEach(element => {
  const elementWrapper = document.createElement("div")
  menuPanelElementsWrapper.appendChild(elementWrapper)
  elementWrapper.classList.add("element-in-panel-wrapper")
  elementWrapper.innerHTML = element.text
  element.HTMLElement.addEventListener("click", () => {
    console.log(element.HTMLElement)
  })
});

const clickOutsideHandler = () => {
  document.addEventListener("click", function(evt) {
    let flyoutElement = menuPanel,
        targetElement = evt.target;
    do {
        if (targetElement == flyoutElement) {
            menuPanel.classList.remove("low-opacity")
            clicksOutsideMenuPanel++;
            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);
    if(clicksOutsideMenuPanel > 0) {
      menuPanel.classList.add("low-opacity")
    }
  });
}