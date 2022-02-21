import anime from "animejs"

function shrinkNotificationBar() {
  const notificationBar = document.getElementById("nav__notification_bar")
  if (notificationBar) {
    anime({
      targets: "#nav__notification_bar",
      height: 0,
      duration: 300,
      easing: "easeInOutQuad",
    })
  }
}

function animeScrollToTop() {
  const scrollElement = window.document.scrollingElement || window.document.body
  if (scrollElement) {
    anime({
      targets: scrollElement,
      scrollTop: 0,
      duration: 500,
      easing: "easeInOutQuad",
    })
  }
}

export { animeScrollToTop, shrinkNotificationBar }
