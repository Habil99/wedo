const select_all = document.querySelector("[data-control-all]"),
  category_inputs = [...document.querySelectorAll("[data-category]")],
  subcategory_inputs = [...document.querySelectorAll("[data-subcategory]")],


  toggleSubLists = (input, boolean) => {
    const list = input.closest(".category-list");
    const sublist = list?.querySelector(".category-list-sub");

    if (sublist) {
      if (boolean === true) {
        sublist.classList.remove("visually-hidden")

      } else {
        sublist.classList.add("visually-hidden")
        const subcategories = [...sublist.querySelectorAll("[data-subcategory]")];

        subcategories.forEach(input => input.checked = false)
      }
    }
  },

  toggleLists = (input) => {
    toggleSubLists(input, input.checked);
    if (!input.checked) {
      select_all.checked = false
    }
  },

  toggleInLoop = (collection, target, type) => {
    collection?.forEach(input => {
      if (target.checked) {
        input.checked = true;

        if (type === "main") {
          toggleSubLists(input, input.checked);
        }
      } else {
        input.checked = false;

        if (type === "main") {
          toggleSubLists(input, input.checked);
        }
      }
    })
  },

  toggleCategories = (target) => toggleInLoop(category_inputs, target, "main"),

  toggleSubcategories = (target) => toggleInLoop(subcategory_inputs, target),

  bulkSelect = (target) => {
    toggleCategories(target)
    toggleSubcategories(target)
  },

  initAll = () => category_inputs.forEach(input => {
    toggleLists(input);

    input.addEventListener("input", () => toggleLists(input))
  });

select_all.addEventListener("input", ({ target }) => bulkSelect(target, target.checked));

initAll();
bulkSelect(select_all, select_all.checked)