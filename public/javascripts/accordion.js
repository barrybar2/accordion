class Accordion {
  constructor(el, data) {
    this.el = el;
    this.data = data;
  }
  template() {
    return `
              ${this.data.map(
                item => `<button class="accordion">${
                  item.heading
                }</button> <div class="panel">
                <p>${item.content}</p>
              </div>`
              )}
          `;
  }
  addToggleEvents() {
    const acc = this.el.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
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
