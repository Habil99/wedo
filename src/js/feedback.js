const stars = [...document.querySelectorAll(".feedback-star input")];
const events = ['click', 'change']

stars.forEach((star) => {
  events.forEach(event => {
    star.addEventListener(event, function () {
      const rate = parseInt(star.dataset['rate'])
      const group = stars.filter(s => s.dataset['target'] === star.dataset['target'])

      group.forEach((g, i) => {
        if (i < rate) {
          g.checked = true
        } else {
          g.checked = false
        }
      })
    })

  })
})

function toggleSuccessModal(event) {
  event.preventDefault();

  setTimeout(function () {
    $('#feedbackSucceeded').modal('hide')
  }, 3000)
}