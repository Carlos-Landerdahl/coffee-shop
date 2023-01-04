import styled from 'styled-components'

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  .subtitle {
    font-size: 14px;
    color: ${(props) => props.theme['base-text']};
  }
`
