$(function () {
  const wrapperSelectors = ['.complain-form', '.profile-settings', '#workers'];

  $(wrapperSelectors).each(function (_, $selector) {
    $(`${$selector} select`).each(function (_, select) {
      console.log('worked')
      $(select).niceSelect()
    })
  })
})