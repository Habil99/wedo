$(function () {
  function toggleSections(type) {
    if (type === "show-edit") {
      $(".work-types #btn-edit").fadeOut();
      $(".work-types-cover").fadeOut();
      $(".work-types-edit").removeClass("hidden");
      $(".work-types-edit").fadeIn();
    } else {
      $(".work-types #btn-edit").fadeIn();
      $(".work-types-cover").fadeIn();
      $(".work-types-edit").addClass("hidden");
      $(".work-types-edit").fadeOut();
    }
  }

  $(".work-types #btn-edit").on("click", () => toggleSections("show-edit"));

  $(".work-types .btn-save").on("click", toggleSections)
  $(".work-types .btn-reject").on("click", toggleSections)
});
