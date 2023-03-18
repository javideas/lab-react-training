import React from 'react'

function IdCard ({ lastName, firstName, gender, height, birth, picture } ) {
  return (
    <div className='card' style={{width: '30%'}}>
      <div className='card-body d-flex flex-row justify-content-start border border-3 border-dark '>

        <img className='card-img-top me-3' src={picture} alt={firstName} style={{maxWidth: '150px'}} />
        <div className='d-flex flex-column gap-1 justify-content-start text-left'>
          <p className='d-flex flex-row justify-content-start m-0'>
            <span>First Name:</span> {firstName}
          </p>
          <p className='d-flex flex-row justify-content-start m-0'>
            <span>Last Name:</span> {lastName}
          </p>
          <p className='d-flex flex-row justify-content-start m-0'>
            <span>Gender:</span> {gender}
          </p>
          <p className='d-flex flex-row justify-content-start m-0'>
            <span>Height:</span> {height}
          </p>
          <p className='d-flex flex-row justify-content-start m-0'>
            <span>Birth:</span> {birth.toDateString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default IdCard