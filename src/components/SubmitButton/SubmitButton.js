// SubmitButton.js
import './submitButton.css'

function SubmitButton({ label }) {
  return <input  style = {{backgroundColor: 'black', fontSize: '22px;'}}className='submit-button' type='submit' value={label}/>
}

export default SubmitButton