import React from 'react'
import "./Steps.css"
import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'

const Steps = ( { currentStep} ) => {
  return (
    <div className='steps'>
      <div className="step active">
        <AiOutlineUser />
        Identificação
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ''}`}>
        <AiOutlineStar />
        Avaliação
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ''}`}>
        <FiSend />
        Envio
      </div>
    </div>
  )
}

export default Steps