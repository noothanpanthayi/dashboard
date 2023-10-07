import React, {Fragment, useState} from 'react';

const TextInput=()=>{

    const [text, setText]=useState('');

    const updateText=(e:React.ChangeEvent<HTMLInputElement>)=>{

        setText(e.target.value)
    }

    return <>
        <input type="text" value={text} onChange={updateText}/>
    </>
  
}

export default TextInput