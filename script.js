const display = document.querySelector(".display-value");
const input = document.querySelectorAll(".click");

input.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (value === "AC") {
      display.value = "";
    } else if (value === "DC") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch (e) {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});
