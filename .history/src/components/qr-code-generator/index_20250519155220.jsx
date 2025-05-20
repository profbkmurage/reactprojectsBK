import { useState } from 'react'
import QRCode from 'react-qr-code'

export default function QRCodeGenerator () {
  const [qrCode, setQrCode] = useState('')
  const [input, setInput] = useState('')

  function handleGenerate () {
      setQrCode(input)
      set
  }
  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          type='text'
          name='qrcodegen'
          value={input}
          placeholder='Enter your details here'
          onChange={e => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim() !== '' ? false : true}
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id='qr-code-value' value={qrCode} size={400} />
      </div>
    </div>
  )
}
