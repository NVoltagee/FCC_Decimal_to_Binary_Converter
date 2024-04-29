const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const checkUserInput = () => {
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert("Please provide a decimal number");
    return;
  }
  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
  convertBtn.addEventListener("click", checkUserInput);
  numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkUserInput();
    }
  });
};

const decimalToBinary = (input) => {
  if (input === 0) {
    return " ";
  } else {
    return decimalToBinary(Math.floor(input / 2));
  }
};

const countDownAndUp = (number) => {
  if (number === 0) {
    console.log("Reached base case");
    return;
  } else {
    countDownAndUp(number - 1);
  }
};

countDownAndUp(3);
