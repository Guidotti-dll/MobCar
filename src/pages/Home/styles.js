import styled from 'styled-components'
import { ModalContainer } from '../../components/Modal/styles'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Footer = styled.footer`
  width: 100%;
  height: 8vh;
  background-color: #000000;
  color: #00adee;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: -8vh;
  font-size: 18px;
`
export const Main = styled.main`
  min-height: 100vh;
  padding-bottom: 8vh;
  width: 100%;
  display: flex;
  justify-content: fle;
  align-items: center;
  flex-direction: column;
`
export const Content = styled.div`
  width: 60vw;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 30px;

  @media (max-width: 700px) {
    width: 90vw;
  }
`

export const Controller = styled.header`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const TitlesZone = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const Title = styled.h1`
  font-family: Helvetica;
  font-size: 28px;
  font-weight: 700;
`
export const SubTitle = styled.h2`
  font-family: Helvetica;
  font-size: 20px;
  font-weight: 400;
`
export const FormContainer = styled(ModalContainer)`
  height: fit-content;
`
