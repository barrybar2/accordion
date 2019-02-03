class Accordion {
  constructor(el, data) {
    this.el = el;
    this.data = data;
  }
  template() {
    return `
      ${this.data
        .map(
          item => `<button class="accordion">${
            item.heading
          }</button> <div class="panel">
        <p>${item.content}</p>
      </div>`
        )
        .join("")}
          `;
  }
  // Remove all active tabs. (for switching between tabs)
  closeAllTabs() {
    const acc = this.el.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
      if (acc[i].classList.contains("active")) {
        let panel = acc[i].nextElementSibling;
        acc[i].classList.remove("active");
        panel.style.maxHeight = null;
      }
    }
  }
  // Toggle Active tabs
  addToggleEvents() {
    const acc = this.el.getElementsByClassName("accordion"),
      me = this;
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        const panel = this.nextElementSibling;
        if (this.classList.contains("active")) {
          this.classList.remove("active");
          panel.style.maxHeight = null;
        } else {
          me.closeAllTabs();
          if (!this.classList.contains("active")) {
            this.classList.add("active");
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        }
      });
    }
  }
  init() {
    this.el.innerHTML = this.template();
    this.addToggleEvents();
  }
}

export { Accordion };
