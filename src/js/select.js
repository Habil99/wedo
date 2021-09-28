$(function () {
  const wrapperSelectors = ['.complain-form', '.profile-settings', '#workers', '.find-work', '.create-task-form'];

  $(wrapperSelectors).each(function (_, $selector) {
    $(`${$selector} select`).each(function (_, select) {
      console.log('worked')
      $(select).niceSelect()
    })
  })
})