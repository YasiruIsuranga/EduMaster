import React from 'react'

function Signin() {
  return (
    <div className='d-flex justify-content-center align-items-center 100-w vh-100 bg-info signin'>
      <div className='40-w p-5 rounded bg-white'>
      <form action="Post">
        <h3>Sign In</h3>
        <div className='mb-2 d-flex flex-column'>
          <label htmlFor="text">Student Number : </label>
          <input type="text" placeholder='Enter Your Number'/>
        </div>
        <div className='mb-2 d-flex flex-column'>
          <label htmlFor="password">Password : </label>
          <input type="password" placeholder='Enter Your Password' />
        </div>
        <div className='d-grid'>
          <button className='btn btn-primary'>Sign In</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Signin