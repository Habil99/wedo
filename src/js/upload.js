const upload_field = document.getElementById('imgUpload'),
  profile_img = document.getElementById("profile-img");

upload_field.addEventListener("input", ({ target }) => {
  const file = target.files[0];
  const reader = new FileReader();

  reader.onload = e => {
    profile_img.src = e.target.result;
  }

  reader.readAsDataURL(file)

})