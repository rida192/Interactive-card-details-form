const cardNumber = document.querySelector(".cardNumber");
const cardName = document.querySelector(".cardName");
const exp = document.querySelector(".exp");
const cvc = document.querySelector(".cvc");
const form = document.querySelector(".form");
const nameInput = document.querySelector(".nameInput");
const numberInput = document.querySelector(".numberInput");
const expInput = document.querySelector(".expInput");
const cvcInput = document.querySelector(".cvcInput");
const submitBtn = document.querySelector(".submitBtn");
const lastSection = document.querySelector(".lastSection");

const resetFeilds = (name, number, exp) => {
  name.value = "";
  number.value = "";
  exp.value = "";
};

form.addEventListener("keyup", (e) => {
  // e.preventDefault();
  const nameValue = nameInput.value;
  const numberValue = numberInput.value;
  const expValue = expInput.value;
  const cvcValue = cvcInput.value;
  cardName.innerHTML = nameValue;
  cardNumber.innerHTML = numberValue;
  exp.innerHTML = expValue;
  cvc.innerHTML = cvcValue;
  // resetFeilds(nameInput, numberInput, expInput);
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const numberValue = numberInput.value;
  const expValue = expInput.value;
  const cvcValue = cvcInput.value;
  console.log(numberValue);
  if (numberValue.length < 19 || expValue.length < 6 || cvcValue.length < 3) {
    // window.alert("incomplete number");
    const errorMsg = document.querySelector(".error");
    errorMsg.classList.remove("opacity-0");
    setTimeout(() => {
      errorMsg.classList.add("opacity-0");
    }, 1500);
  } else {
    lastSection.innerHTML = `
    <div class="details flex flex-col items-center justify-center">
    <img src="./images/icon-complete.svg" alt="" />
    <p
    class="uppercase text-VeryDarkViolet text-4xl tracking-widest mt-10"
    >
    thank you!
    </p>
    <p class="text-darkGrayishViolet mt-6">
    we've added your card details
    </p>
    <button
    class="reload bg-VeryDarkViolet p-3 rounded-lg w-full mt-10"
    type="submit"
    >
    Confirm
    </button>
    </div>
    `;
    document.querySelector(".reload").addEventListener("click", () => {
      window.location.reload();
    });
  }
});

/**
 * form
nameInput
numberInput
expInput
submitBtn
 */

numberInput.addEventListener("input", (e) => {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});
cvcInput.addEventListener("input", (e) => {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});
nameInput.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/^[0-9!@#\$%\^\&*\)\(+=._-]+$/g, "");
  // e.target.value = e.target.value.replace(/^\d+$/g, "");
  // .replace(/(.{4})/g, "$1 ")
  // .trim();
});
expInput.addEventListener("input", (e) => {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/^(.{2})/g, "$1 /")
    .trim();
});
