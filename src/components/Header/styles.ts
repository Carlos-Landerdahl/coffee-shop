import styled from 'styled-components'

export const HeadertContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 104px;

  background-color: transparent;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    font-weight: bold;
  }
`

export const BtnCity = styled.button`
  border: none;
  background-color: rgb(235, 229, 249);
  color: ${(props) => props.theme.purple};
  border-radius: 8px;

  cursor: pointer;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    font-size: 14px;
    padding: 10px 8px;
  }
`

export const BtnCar = styled.button`
  border: none;
  padding: 10px 8px;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 8px;
  color: ${(props) => props.theme['yellow-dark']};

  cursor: pointer;
  transition: all ease-in 0.2s;

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme['yellow-light']};
  }
`
