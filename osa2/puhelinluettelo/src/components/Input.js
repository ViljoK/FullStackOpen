import React from 'react'

const Input = ({handler, value, reff}) => <input type='text' ref={reff} value={value} onChange={handler}/>

export default Input