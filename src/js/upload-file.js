const upload_btn = document.querySelector(".upload-btn input");
const progress_wrapper = document.querySelector(".progress-bars");
const uploaded_wrapper = document.querySelector(".uploaded-images");

const html = (name, progress) => `<div class="upload-progress">
                                    <div class="upload-progress-info">
                                      <span class="uploaded-filename">${name}</span>
                                      <span class="uploaded-amount">${progress}%</span>
                                    </div>
                                    <div class="progressbar">
                                      <div class="progressbar-inner"></div>
                                    </div>
                                  </div>`

const image = src => `<div class="uploaded-image">
                        <button class="refuse-action">
                          <i class="fas fa-times"></i>
                        </button>
                        <img src="${src}" alt="">
                      </div>`

upload_btn.addEventListener("change", function () {
  const files = [...this.files]

  console.log(files)

  progress_wrapper.innerHTML = ''
  uploaded_wrapper.innerHTML = ''

  files.forEach(file => {
    const reader = new FileReader()
    progress_wrapper.insertAdjacentHTML("beforeend", html(file.name, 100))

    reader.onload = ({ target }) => {
      uploaded_wrapper.insertAdjacentHTML("beforeend", image(target.result))
    }

    reader.readAsDataURL(file)
  })
})