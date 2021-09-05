const editable = document.querySelector(".editable-area"),
  edit_btn = document.getElementById("edit-btn"),
  edit_wrapper = document.querySelector(".edit-info"),
  initial_info = document.getElementById("initial-info"),

  // these selectors were redeclared because of jquery access
  $edit_wrapper = $(edit_wrapper),
  $initial_info = $(initial_info),
  $edit_btn = $(edit_btn),

  events = {
    window: ["load", "resize"],
    target: ["resize", "input"]
  },
  setHeight = target => {
    const $style = window.getComputedStyle(target, null);
    
    scrollHeight = target.scrollHeight

    target.style.height = "";
    target.style.height = target.scrollHeight + "px"
  };

events.window.forEach(event => {
  window.addEventListener(event, () => setHeight(editable))
})

events.target.forEach(event => {
  editable.addEventListener(event, ({ target }) => setHeight(target))
})

const toggleEditableArea = (elements, type) => {
  const { $edit_wrapper, $initial_info, $btn } = elements;

  if (type === "show") {
    $edit_wrapper.removeClass("hidden")

    $edit_wrapper.slideDown()
    $initial_info.slideUp()
    $btn.fadeOut()
  } else {
    $edit_wrapper.addClass("hidden")

    $btn.fadeIn()

    $edit_wrapper.slideUp()
    $initial_info.slideDown()
  }
}

const conf = { $edit_wrapper, $initial_info }

$edit_btn.on("click", function () {
  const $this = $(this);

  if ($edit_wrapper.hasClass("hidden")) {
    toggleEditableArea({ ...conf, $btn: $this }, "show")

    setHeight(editable);
  }
})

$(".cancel-action").on("click", (e) => {
  e.preventDefault();

  toggleEditableArea({ ...conf, $btn: $edit_btn }, "hide")
})