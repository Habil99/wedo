$(function () {
  const $dropdown = $(".notification-dropdown-menu")
  const $btn = $("#notification-btn")

  $btn.on("click", function (e) {
    e.stopPropagation();

    $dropdown.toggleClass("visually-hidden");
  })

  $dropdown.on("click", function (e) {
    e.stopPropagation();
  })

  $(window).on("click", function (e) {
    const $target = e.target;

    if (!$dropdown.is($target) && $dropdown.has($target).length === 0) {
      $dropdown.addClass("visually-hidden");
    }
  })
})