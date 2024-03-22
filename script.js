function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // susbstituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/imagem1.jpg")
  } else {
    // se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/imagem2.jpg")
  }
}
