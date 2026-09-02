const UPI_ID = "9700375788@ybl";
const PAYEE_NAME = "Siddi Youth Club";
let selectedAmount = null;

function showDonation() {
  document.getElementById("blessing").classList.add("hidden");
  document.getElementById("receipt").classList.add("hidden");
  document.getElementById("donation").classList.remove("hidden");
  window.scrollTo(0,0);
}

function showBlessing() {
  document.getElementById("donation").classList.add("hidden");
  document.getElementById("receipt").classList.add("hidden");
  document.getElementById("blessing").classList.remove("hidden");
  window.scrollTo(0,0);
}

function startPayment(amount) {
  selectedAmount = Number(amount);
  const upiLink =
    "upi://pay" +
    "?pa=" + encodeURIComponent(UPI_ID) +
    "&pn=" + encodeURIComponent(PAYEE_NAME) +
    "&am=" + encodeURIComponent(selectedAmount.toFixed(2)) +
    "&cu=INR";
  window.location.href = upiLink;
}

function customPayment() {
  const value = prompt("Enter contribution amount in ₹:");
  if (value === null) return;
  const amount = Number(value.replace(/,/g,"").trim());
  if (!Number.isFinite(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }
  selectedAmount = amount;
  startPayment(amount);
}

function showReceipt() {
  const now = new Date();
  document.getElementById("receiptDate").textContent =
    "Thank you • " + now.toLocaleString("en-IN", {dateStyle:"medium", timeStyle:"short"});
  document.getElementById("donation").classList.add("hidden");
  document.getElementById("receipt").classList.remove("hidden");
  window.scrollTo(0,0);
}

function downloadReceipt() {
  // Creates a downloadable PNG contribution receipt.
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 1500;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#fff8e8";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.strokeStyle = "#b9852d";
  ctx.lineWidth = 10;
  ctx.strokeRect(35,35,1130,1430);

  ctx.textAlign = "center";
  ctx.fillStyle = "#7d1839";
  ctx.font = "bold 62px Georgia";
  ctx.fillText("Siddi Youth Club",600,180);

  ctx.fillStyle = "#633044";
  ctx.font = "bold 42px Georgia";
  ctx.fillText("Ganesh Utsav 2026",600,245);

  ctx.font = "30px Georgia";
  ctx.fillText("Ram Nagar, Armoor",600,295);

  ctx.fillStyle = "#b77a22";
  ctx.font = "40px Georgia";
  ctx.fillText("❖",600,360);

  ctx.fillStyle = "#7d1839";
  ctx.font = "bold 46px Georgia";
  ctx.fillText("🙏",600,450);

  ctx.font = "bold 40px Georgia";
  ctx.fillText("Contribution Receipt",600,525);

  ctx.fillStyle = "#35151d";
  ctx.font = "30px Georgia";
  ctx.fillText("Thank you for supporting our Ganesh Utsav.",600,620);

  ctx.fillText("May Lord Ganesha bless you and your family",600,690);
  ctx.fillText("with happiness, prosperity, good health and success.",600,745);

  ctx.fillStyle = "#941e3d";
  ctx.font = "bold 34px Georgia";
  ctx.fillText("गणपति बप्पा मोरया 🙏",600,835);

  ctx.fillStyle = "#6e555a";
  ctx.font = "25px Arial";
  ctx.fillText("This receipt is generated from the Siddi Youth Club donation page.",600,940);

  if (selectedAmount) {
    ctx.fillStyle = "#7d1839";
    ctx.font = "bold 38px Arial";
    ctx.fillText("Contribution amount: ₹" + selectedAmount.toLocaleString("en-IN"),600,1030);
  }

  ctx.fillStyle = "#765c61";
  ctx.font = "22px Arial";
  ctx.fillText(new Date().toLocaleString("en-IN"),600,1110);

  ctx.fillStyle = "#b77a22";
  ctx.font = "34px Georgia";
  ctx.fillText("🪔  🙏  🪔",600,1240);

  ctx.fillStyle = "#7d1839";
  ctx.font = "bold 30px Georgia";
  ctx.fillText("Siddi Youth Club",600,1330);

  const link = document.createElement("a");
  link.download = "Siddi-Youth-Club-Ganesh-Utsav-Contribution-Receipt.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}
