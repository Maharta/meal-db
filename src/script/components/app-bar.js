/* eslint-disable require-jsdoc */
class Appbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <img class="icon" alt="a movie icon" />
    <p>Movie-Database</p>`;
  }
}

customElements.define("app-bar", Appbar);
