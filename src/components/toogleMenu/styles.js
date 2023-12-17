import styled from 'styled-components'
import PersonIcon from '../../assets/person-icon.png'

export const ToggleMenuContainer = styled.div`
  display: none;
  align-items: center;
  position: fixed;
  top: 25px;
  left: 25px;
  z-index: 5;

  @media screen and (max-width: 475px) {
    display: flex;
  }
`

export const MenuButton = styled.div`
  cursor: pointer;
  font-size: 25px;
  color: white;
  z-index: 2;
`

export const MenuContent = styled.div`
  position: absolute;
  top: -25px;
  left: ${props => (props.open ? '-25px' : '-200vw')};
  height: 90vh;
  width: 50vw;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  z-index: 1;
  transition: left 0.4s ease-in-out;
  padding: 15px;

  p {
    color: white;
  }
`

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 85px 30px 0 20px;
    padding-bottom: 35px;
    border-bottom: 1px solid rgb(214,155,12);
    width: 100%;

    div {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 10px;

        p {
            font-size: 16px;
            font-weight: 400;
            line-height: 16px;
        }
    }
`

export const UserIcon = styled.div`
    background-image: url(${PersonIcon});
    background-size: cover;
    width: 40px;
    height: 40px;
    filter: invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg);
`

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 100%;
`

export const PageLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    font-size: 18px;
    font-weight: ${props => props.isActive ? 'bold' : 400};
    background-color: ${props => props.isActive ? 'rgb(214,155,12)' : 'none'};
    line-height: 19px;
    color: ${props => props.isActive ? 'black' : 'white'};
    width: 100%;
    height: 50px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 15px;
    padding-left: 15px;
`

export const LogoutLink = styled.a`
    width: 100%;
    color: white;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-bottom: 20px;
    margin-right: 10px;
    cursor: pointer;
    border-top: 1px solid rgb(214,155,12);
    padding-top: 35px;
`

