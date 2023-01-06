import styled from 'styled-components'

export const CompleteOrderContainer = styled.div`
  h3 {
    font-size: 18px;
    font-family: 'Baloo 2';
  }

  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`
