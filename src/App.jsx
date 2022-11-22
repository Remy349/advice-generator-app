import React, { useEffect, useState } from 'react'
import { AdviceId, AdviceText, ButtonDice } from './components/Components'

import iconDice from './images/icon-dice.svg'
import patternDividerMobile from './images/pattern-divider-mobile.svg'
import patternDividerDesktop from './images/pattern-divider-desktop.svg'

function App() {
  const [idAdvice, setIdAdvice] = useState('')
  const [advice, setAdvice] = useState('')

  const apiCall = async () => {
    try {
      const url = 'https://api.adviceslip.com/advice'
      const res = await fetch(url, { method: 'GET' })

      if (res.ok) {
        const data = await res.json()

        setIdAdvice(data.slip.id)
        setAdvice(data.slip.advice)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleOnClick = () => {
    apiCall()
  }

  useEffect(() => {
    apiCall()
  })

  return (
    <main className='advice'>
      <div className='advice__card'>
        <AdviceId className='advice__card-id'>Advice #{idAdvice}</AdviceId>
        <AdviceText className='advice__card-text'>{advice}</AdviceText>
        <picture>
          <source media='(min-width: 800px)' srcSet={patternDividerDesktop} />
          <img
            src={patternDividerMobile}
            className='advice__card-divider'
            alt='Pattern divider mobile'
          />
        </picture>
        <ButtonDice
          className='advice__card-btn'
          type='button'
          onClick={handleOnClick}
        >
          <img
            src={iconDice}
            alt='Icon dice'
            className='advice__card-btn_icon'
          />
        </ButtonDice>
      </div>
    </main>
  )
}

export default App
