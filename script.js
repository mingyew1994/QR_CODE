// Initialize the QR code object once
const qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

function generateQR() {
    const input = document.getElementById("qr-input").value;
    
    if (input.trim() === "") {
        alert("Please enter some text or a URL!");
        return;
    }
    
    // Update the QR code with the new input
    qrcode.makeCode(input);
}