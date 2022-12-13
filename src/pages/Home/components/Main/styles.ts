import styled from 'styled-components'

export const ContainerMain = styled.div`
  display: flex;
  gap: 56px;
  justify-content: space-between;
  align-items: center;
  margin-top: 94px;
  flex-wrap: wrap;

  @media only screen and (max-width: 1395px) {
    justify-content: center;
  }
`

export const Content = styled.div`
  display: flex;
  width: 50%;
  max-width: 588px;
  flex-direction: column;
  justify-content: center;

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-family: 'Baloo 2', cursive;

    h1 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 130%;
    }

    p {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;
    }
  }

  @media only screen and (max-width: 1395px) {
    width: 100%;
  }
`

export const NavContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 46px;

  div {
    li {
      align-items: center;
      display: flex;
      flex-grow: 1;
      list-style-type: none;
      gap: 12px;
      margin-top: 12px;
    }
  }
`

export const ImageContainer = styled.span`
  text-align: center;

  img {
    width: 100%;
  }
`
