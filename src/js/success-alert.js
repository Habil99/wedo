$(function() {
  const $alert = $(".success-alert")

  setTimeout(function() {
    if($alert.hasClass("show")) {
      $alert.removeClass("show")
    }
  }, 5000)

  $alert.addClass("show");
  $(".close-alert").on("click", function() {
    $alert.removeClass("show")
  })
})