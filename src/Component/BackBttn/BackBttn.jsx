import React from 'react'

function BackBttn() {
    const handle=()=>{
        window.history.back()
    }
  return (
    <div className="ms-5">
            <button className='btn btn-light ' onClick={handle}>Go Back</button>
          </div>
  )
}

export default BackBttn