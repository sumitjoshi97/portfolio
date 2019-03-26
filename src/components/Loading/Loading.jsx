import React from 'react'
import './Loading.css'

const Loading = () => (
  <div className='loading'>
    <div className='container'>
      <div className='loading-header'>Loading</div>
      <div className='lds-ripple'>
        <div />
        <div />
      </div>
    </div>
  </div>
)

export default Loading
