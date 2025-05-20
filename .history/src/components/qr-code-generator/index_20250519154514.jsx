import { useState } from 'react'
import QRCode from 'react-qr-code'

export default function QRCodeGenerator () {
  const [qrCode, setQrCode] = useState('')
  const [input, setInput] = useState('')

  function handleGenerate () {
    setQrCode(input)
  }
  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          type='text'
          name='qrcodegen'
          placeholder='Enter your details here'
          onChange={e => e.target.value}
        />
        <button disabled = {input && input.trim() !== '' } onClick={handleGenerate}>Generate</button>
      </div>
      <div>
        <QRCode id='qr-code-value' value='' />
      </div>
    </div>
  )
}
