const texts = document.querySelectorAll("[truncate]");

[...texts].forEach(text => {
  const max = text.dataset["max"];
  const value = text.innerHTML;
  const length = value.length;

  if (length > max) {
    text.innerHTML = value.slice(0, max) + "...";
    console.log(length)
  }
})