const work_list = document.querySelectorAll(".work-types-list"),
  required = 3,
  btnHtml = `<button class="btn-no-style btn-edit" show-more>Показать еще</button>`,

  showMore = (btn, surpluses) => {
    if (!btn && !surpluses.length < 1) {
      throw new Error("Buttons have not been rendered");
    } else {
      toggleSurplusİtems(surpluses, "show");
      btn.classList.add("hidden")
    }
  },

  setActionToButtons = (buttons, surpluses) => {
    buttons.forEach(btn => {
      btn.addEventListener("click", () => showMore(btn, surpluses))
    })
  },

  getShowMoreButtons = () => {
    const buttons = document.querySelectorAll("[show-more]");

    return [...buttons];
  },

  insertShowMoreBtn = (list) => {
    const parent = list.parentElement;

    parent.insertAdjacentHTML("beforeend", btnHtml)
  },

  toggleSurplusİtems = (surpluses, type) => {
    if (type === "hide") {
      surpluses.forEach(item => {
        item.classList.add("hide");
      })
    } else {
      surpluses.forEach(item => {
        item.classList.remove("hide");
      })
    }
  },

  modifyLists = () => {
    const lists = getListsSurplus()
    const length = lists.length || 0;

    if (length > 0) {
      lists.forEach(list => {
        const children = list.children;
        const surpluses = [...children].slice(required, children.length);

        toggleSurplusİtems(surpluses, "hide");
        insertShowMoreBtn(list);

        const buttons = length ? getShowMoreButtons() : []

        setActionToButtons(buttons, surpluses)
      })
    } else {
      throw new Error("There are not any lists which have surpluses")
    }

  },

  getListsSurplus = () => [...work_list].filter(list => {
    const childCount = list.childElementCount;

    if (childCount > required) {
      return list;
    }
  });

modifyLists();