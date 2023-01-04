import styled from 'styled-components'

export const CompleteOrderContainer = styled.div`
  h3 {
    font-size: 18px;
    font-family: 'Baloo 2';
  }
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2.5rem;
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`
