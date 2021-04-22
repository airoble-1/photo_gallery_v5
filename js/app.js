baguetteBox.run(".gallery")

function filterImages() {
  // Declare variables
  let input = document.getElementById("search").value.toLowerCase()
  let x = document.getElementsByTagName("a")

  // Loop through all the a elements and hide those who don't match the search query
  for (let i = 0; i < x.length; i++) {
    let imageCaption = x[i].getAttribute("data-caption").toLowerCase()
    if (!imageCaption.includes(input)) {
      x[i].style.display = "none"
    } else {
      x[i].style.display = "inline-block"
    }
  }
}
