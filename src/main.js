const Menu = {
  toggle: function () {
    const body = document.body

    body.classList.toggle("menu-active")
  },
}

const buttonOpenMenu = document.querySelector(".btn-menu")

buttonOpenMenu.addEventListener("click", () => {
  Menu.toggle()
})
