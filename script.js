function imgSlider(anything) {

  const image = document.querySelector(".starbucks");
  image.classList.add("fade-out");

  setTimeout(() => {
    image.src = anything;
    image.classList.remove("fade-out");
  }, 1);

}
