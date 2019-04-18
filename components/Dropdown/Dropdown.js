class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('.dropdown-button');
    this.content = this.element.querySelector('.dropdown-content');
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
      this.dropsD()
    })
  }
  dropsD() {
    this.content.toggleContent()
  }
}
    class Content {
  constructor(dropElement) {
    this.dropElement = dropElement;
  }

toggleContent() {
  this.dropElement.classList.toggle("change");
}
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new Dropdown(dropdown));