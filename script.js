const btn = document.querySelector("#verify");
const input = document.querySelector("#code");
const error = document.querySelector("#error");

const code = "MWRBPMKMT3T5593L95K8C2F6E";
let verified = false;

function verify() {
  if (input.value === "") {
    error.textContent = "يجب ألا يكون الحقل فارغًا";
  } else if (input.value.length < 25 || input.value !== code) {
    error.textContent = "كود غير صالح";
  } else {
    error.textContent = "";
    document.body.classList.add("loading");

    setTimeout(() => {
      document.body.classList.remove("loading");

      window.open("./MWRBPMKMT3T5593L95K8C2F6E.pdf", "_blank");
    }, 3000);
    input.value = "";
  }
}
btn.addEventListener("click", () => {
  verify();
});
