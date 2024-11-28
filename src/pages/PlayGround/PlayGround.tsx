import React, { useEffect, Fragment } from 'react'
import useText from './useText'
import TextInput from './TextInput'

function TextManipulation() {
  useEffect(() => {
    console.log('rendered ', text)
  })
  const { text, updateText } = useText();

  return (
    <Fragment>
      <div style={{ marginTop: 50 }}>
        <div>
          <input placeholder='Type a text here' type="text" value={text} onChange={updateText} />
        </div>
        {/* <TextInput /> */}
        <div>Text entered is: {text}</div>
      </div>
    </Fragment>
  )
}

export default TextManipulation
