// Components
import { GrNext, GrPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import Steps from './components/Steps'

// Hooks
import { useForm } from './hooks/useForm'
import { useState } from 'react'

import './App.css'

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
}

function App() {
  const [data, setData] = useState(formTemplate)

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <Thanks data={data}/>
  ]

  const {currentStep, currentComponent, changeStep, isLastStep, firstStep} = useForm(formComponents)

  return (
    <div className="app">
      <h1>React Multistep</h1>
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div className="form-container">
       <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            { !firstStep && 
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
            <GrPrevious />
            <span>Voltar</span>
          </button>
          }
            
            { !isLastStep
             ? 
            <button type="submit">
              <span>Avançar</span>
              <GrNext />
            </button>
            :
            <button type="submit">
            <span>Enviar</span>
            <FiSend />
          </button>
            }
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
