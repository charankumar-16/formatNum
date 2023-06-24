let telInput = document.getElementById("phone");

telInput.addEventListener("input", modifyPhoneNumber);

function modifyPhoneNumber() {
  const Number = telInput.value.replace(/\D/g, "").substring(0, 10);
  const firstPart = Number.substring(0, 3);
  const secondPart = Number.substring(3, 6);
  const lastPart = Number.substring(6, 10);

  if (Number.length > 6) {
    telInput.value = `(${firstPart}) ${secondPart}-${lastPart}`;
  } else if (Number.length > 3) {
    telInput.value = `(${firstPart}) ${secondPart}`;
  } else if (Number.length > 0) {
    telInput.value = `${firstPart}`;
  } else {
    telInput.value = "";
  }
}
