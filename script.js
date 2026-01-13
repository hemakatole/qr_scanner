let scanner;

function startScanner() {
    scanner = new Html5Qrcode("reader");

    scanner.start(
        { facingMode: "environment" },
        {
            fps: 10,
            qrbox: 250
        },
        (decodedText) => {
            document.getElementById("output").innerText = decodedText;
            console.log("Scanned:", decodedText);
        },
        (errorMessage) => {
            console.log(errorMessage);
        }
    ).catch(err => {
        alert("Camera start failed");
        console.error(err);
    });
}

function stopScanner() {
    if (scanner) {
        scanner.stop().then(() => {
            document.getElementById("output").innerText = "Scanner stopped";
        }).catch(err => {
            console.error(err);
        });
    }
}
