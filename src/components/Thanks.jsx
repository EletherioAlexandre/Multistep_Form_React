import React from 'react'
import "./Thanks.css"
import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsEmojiNeutralFill, BsFillEmojiFrownFill } from 'react-icons/bs'

const Thanks = ({data}) => {
  const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill />,
    neutral: <BsEmojiNeutralFill />,
    satisfied: <BsFillEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />
  }
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>A sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para a sua próxima compra.</p>
      <p>Para concluir a sua avaliação, clique no botão de Enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação:</h3>
      <p className='review-data'>
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </p>
      <p className='review-data'>
        <span>Comentário:</span>
        {data.comment}
      </p>
    </div>
  )
}

export default Thanks