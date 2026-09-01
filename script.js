const UPI_ID = "9700375788@ptaxis";
const PAYEE_NAME = "Siddi Youth Club";

function showDonation() {
  document.getElementById("blessing").classList.add("hidden");
  document.getElementById("donation").classList.remove("hidden");
  window.scrollTo(0, 0);
}

function showBlessing() {
  document.getElementById("donation").classList.add("hidden");
  document.getElementById("blessing").classList.remove("hidden");
  window.scrollTo(0, 0);
}

function donate(amount) {
  if (!Number.isFinite(amount) || amount <= 0) return;

  const upiUrl =
    "upi://pay" +
    "?pa=" + encodeURIComponent(UPI_ID) +
    "&pn=" + encodeURIComponent(PAYEE_NAME) +
    "&am=" + encodeURIComponent(amount.toFixed(2)) +
    "&cu=INR";

  window.location.href = upiUrl;
}

function donateCustom() {
  const value = prompt("Enter donation amount in ₹:");
  if (value === null) return;

  const amount = Number(value.replace(/,/g, "").trim());

  if (!Number.isFinite(amount) || amount <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }

  donate(amount);
}
