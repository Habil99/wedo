const chat = document.getElementsByClassName("app-grid")[0],
  chat_left = chat.getElementsByClassName("app-grid-left")[0],
  chat_main = chat.getElementsByClassName("app-grid-chat")[0],
  transition_buttons = [...chat.querySelectorAll("[data-notification]")],
  chat_rooms = [...chat.querySelectorAll(".chat-room")],
  back_buttons = [...document.querySelectorAll(".chat__header--back")],

  { md } = {
    md: 768
  },

  { hide, fade, grow, unread, active } = {
    hide: "visually-hidden",
    fade: "transition",
    grow: "flex-grow-1",
    unread: "unread",
    active: "active"
  },

  showChat = () => {
    chat_main.classList.add(grow);
    chat_main.classList.remove(hide);
    chat_left.classList.add(hide);
    chat_left.classList.remove(grow);
  },

  toggleActive = (button) => {
    transition_buttons.forEach(btn => {
      if (btn !== button && btn.classList.contains("active")) {
        btn.classList.remove(active)
      } else if (btn === button) {
        btn.classList.add(active)
      }
    })
  },

  checkUnread = (button) => {
    if (button.classList.contains(unread)) {
      setTimeout(() => {
        button.classList.remove(unread)
      }, 200)
    }
  },

  getToTheRoom = (button) => {
    const user_id = button.dataset.userId;

    chat_rooms.forEach(room => {
      const id = room.dataset.chatRoomId;

      if (id === user_id) {
        if (window.innerWidth < md) {
          showChat()
        }

        room.classList.remove(hide);
        room.classList.add(fade);
      } else {
        room.classList.add(hide);
        room.classList.remove(fade);
      }
    })

    toggleActive(button);
    checkUnread(button);
  },

  initTransitions = () => transition_buttons.forEach(button => {
    button.addEventListener("click", () => getToTheRoom(button))
  }),

  backToNotifications = () => {
    chat_main.classList.remove(grow);
    chat_main.classList.add(hide);
    chat_left.classList.remove(hide);
    chat_left.classList.add(grow);
  },

  resizeGrid = () => {
    if (window.innerWidth < md) {
      chat_main.classList.add(hide);
      chat_left.classList.add(grow);
      console.log("worked IF")
    } else {
      chat_main.classList.remove(hide);
      chat_left.classList.remove(grow);
      chat_left.classList.remove(hide);
      console.log("worked ELSE")
    }
  };

// window.onresize = () => resizeGrid();

back_buttons.forEach(button => {
  button.addEventListener("click", () => backToNotifications())
});

resizeGrid();
initTransitions();