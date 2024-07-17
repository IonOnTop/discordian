function inject(theme) {
  let CSSLinks = document.getElementsByTagName("link")
  CSSLinks[1].href = theme // Discord Theme
}

function create_Element(type_of_elem) {
  const new_Elem = document.createElement(type_of_elem)
  body.appendChild(new_Elem)
  return new_Elem;
}

let ThemeButton = create_Element("button")
let ThemeInput = create_Element("input")

ThemeButton.onclick = () => {
  inject(ThemeInput.value)
}
