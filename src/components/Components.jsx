import styled from 'styled-components'

export const AdviceId = styled.span`
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.3rem;
  margin-bottom: 1.5rem;
`

export const AdviceText = styled.p`
  text-align: center;
  font-size: 1.75rem;

  &::before {
    content: '“';
  }

  &::after {
    content: '”';
  }
`

export const ButtonDice = styled.button`
  border: none;
  cursor: pointer;
  display: grid;
  place-items: center;
  width: 4rem;
  border-radius: 50%;
  aspect-ratio: 1;
  margin-bottom: -4rem;

  @media screen and (min-width: 800px) {
    margin-bottom: -5rem;
  }
`
