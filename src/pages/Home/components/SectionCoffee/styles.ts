import styled from 'styled-components'

export const Title = styled.div`
  margin-top: 100px;
  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Section = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;

  margin-top: 40px;
`

export const CardCoffee = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border-radius: 6px 36px;
  background-color: ${(props) => props.theme['base-card']};

  max-width: 256px;
  height: 310px;

  header {
    padding: 0 20px;

    h1 {
      font-family: 'Baloo 2', 'Cursive';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 130%;

      text-align: center;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;

      text-align: center;

      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const ContainerBuy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin-top: 33px;
  font-family: 'Baloo 2', cursive;
  color: ${(props) => props.theme['base-text']};

  p {
    font-size: 14px;

    span {
      font-size: 24px;
      padding-left: 3px;
    }
  }
`

export const ContainerQuantityBuy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  width: 72px;
  height: 38px;

  background-color: ${(props) => props.theme['base-button']};
  border: none;
  border-radius: 8px;

  padding: 8px;

  button {
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.purple};

    cursor: pointer;
  }
`

export const Buy = styled.div`
  button {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;
    border: none;
    border-radius: 8px;

    width: 38px;
    height: 38px;

    background: ${(props) => props.theme['purple-dark']};

    cursor: pointer;
  }
`

export const ImgCoffeType = styled.div`
  img {
    position: relative;
    width: 120px;
    height: 120px;
    left: calc(50% - 120px / 2);
    top: -20px;
  }

  p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;

    text-transform: uppercase;

    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 100px;

    padding: 4px 8px;
    margin-bottom: 16px;
  }
`
