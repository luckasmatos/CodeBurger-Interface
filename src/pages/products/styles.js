import styled from 'styled-components'

export const Container = styled.article`
    background-color: black;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 475px) {
      min-height: 100vh;
      background-color: yellow;
    }
`

export const HomeImg = styled.img`
    width: 100%;

    @media screen and (max-width: 700px) {
      width: auto;
      height: 175px;
    }
`

export const ContainerMenu = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 20px;
    width: 100%;
    padding: 0 5px;
`

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: relative;
  color: ${props => props.$isActiveCategory ? 'rgb(214, 155, 12)' : 'rgb(80, 80, 80)'};
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  padding-bottom: 5px;
  overflow: hidden;
  margin: 5px 10px;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.$isActiveCategory ? '100%' : '0'};
    height: 2px;
    background-color: rgb(214, 155, 12);
    transition: width 500ms ease;
  }

  @media screen and (max-width: 950px) {
    font-size: 15px;
  }
`

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  margin-top: 10px;
`