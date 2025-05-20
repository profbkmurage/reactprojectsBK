import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
    return (<div>
        <h1>QR Code Generator</h1>
        <div>
            <input type="text" name="qrcodegen" placeholder="Enter your details here" />
            <button>Generate</button>
        </div>
        <div>
            <QR
        </div>
    </div>
    );
}