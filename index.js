class SingletonStyle {
  constructor() {
    this.style = document.createElement("style");
    document.head.appendChild(this.style);
  }

  apply(rule) {
    this.style.innerHTML = rule;
  }
}

const styleTag = new SingletonStyle();

setInterval(() => {
  axios.get("http://localhost:3000/styles.css").then(response => {
    styleTag.apply(response.data);
  });
}, 500);
