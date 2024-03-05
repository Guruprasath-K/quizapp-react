import React from 'react'

export default function (props) {
  return (
    <div className='questionContainer'>
            <h3>Q{props.qnum}: {props.ques}</h3>
            <input type='radio' name={props.qnum} value='A' onChange={(e) => props.onChange(props.qnum, e.target.value)}/>A. {props.opA}
            <br></br>
            <input type='radio' name={props.qnum} value='B' onChange={(e) => props.onChange(props.qnum, e.target.value)}/>B. {props.opB}
            <br></br>
            <input type='radio' name={props.qnum} value='C' onChange={(e) => props.onChange(props.qnum, e.target.value)}/>C. {props.opC}
            <br></br>
            <input type='radio' name={props.qnum} value='D' onChange={(e) => props.onChange(props.qnum, e.target.value)}/>D. {props.opD}
    </div>
  )
}


