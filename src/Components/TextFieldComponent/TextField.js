import React from 'react'
import './TextFieldStyles.css';

function TextField(props) {
  return (
    <input required type={props.type} className={props.className} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
  )
}

export default TextField