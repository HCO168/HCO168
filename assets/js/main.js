const introButton = document.querySelector('[data-action="toggle-intro"]');
const introBox = document.querySelector('[data-intro-box]');
const passcodeButton = document.querySelector('[data-action="toggle-passcode"]');
const passcodeOutput = document.querySelector('[data-passcode-output]');

if (introButton && introBox) {
  introButton.addEventListener("click", () => {
    const hidden = introBox.classList.toggle("is-hidden");
    introButton.textContent = hidden ? "展示介绍" : "隐藏介绍";
  });
}

if (passcodeButton && passcodeOutput) {
  passcodeButton.addEventListener("click", () => {
    passcodeOutput.textContent = "1919810";
    passcodeButton.disabled = true;
    passcodeButton.textContent = "展示通行码";
  });
}
