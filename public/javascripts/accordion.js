class Accordion {
  constructor(el, data) {
    this.el = el;
    this.data = data;
  }
  template() {
    return `
      ${this.data
        .map(
          item => `<button class="accordion" aria-label="">${
            item.heading
          }</button> 
          <div class="panel">
            <p>${item.content}</p>
          </div>`
        )
        .join("")}
          `;
  }
  // Remove all active tabs. (for switching between tabs)
  closeAllOpenTabs() {
    const acc = this.el.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
      if (acc[i].classList.contains("active")) {
        let panel = acc[i].nextElementSibling;
        acc[i].classList.remove("active");
        panel.style.maxHeight = null;
        acc[i].removeAttribute("aria-label");
      }
    }
  }
  closeActiveTab(el) {
    el.classList.remove("active");
    el.nextElementSibling.style.maxHeight = null;
  }
  openSelectedTab(el) {
    const panel = el.nextElementSibling;
    if (!el.classList.contains("active")) {
      el.setAttribute("aria-label", "opened tab");
      el.classList.add("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
      el.scrollIntoView();
    }
  }
  // Toggle Active tabs
  addToggleEvents() {
    const acc = this.el.getElementsByClassName("accordion"),
      me = this;
    //loop through all the tabs
    for (let i = 0; i < acc.length; i++) {
      // add click event
      acc[i].addEventListener("click", function() {
        // is the panel selected is open, close it
        if (this.classList.contains("active")) {
          me.closeActiveTab(this);
        } else {
          me.closeAllOpenTabs();
          me.openSelectedTab(this);
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
