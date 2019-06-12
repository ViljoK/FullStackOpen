import React from 'react'

const Input = ({handler, value, reff}) => <input ref={reff} value={value} onChange={handler}/>

export default Input