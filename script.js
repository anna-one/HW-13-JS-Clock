const time = document.getElementById("time");

function Clock() {
  this.isFull = true;

  this.toggle = function () {
    this.isFull = !this.isFull;
  };

  this.render = function () {
    const date = new Date();
    
    const hour = date.getHours(),
      minute = date.getMinutes(),
      second = date.getSeconds();

    if (this.isFull) {
      time.innerText = hour + ":" + minute + ":" + second;
    } else {
      time.innerText = hour + ":" + minute;
    }
  };
}
let clock = new Clock();

time.addEventListener("click", () => {
  clock.toggle();
});

setInterval(() => {
  clock.render();
}, 1000);
