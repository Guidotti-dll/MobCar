import styled from 'styled-components'

export const CarList = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  padding-top: 24px;
`

export const CardCar = styled.li`
  position: relative;
  width: 100%;
  height: 148px;
  border-top: 0.5px solid #000000;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

export const Images = styled.img`
  height: 60%;
  max-width: 90vw;
  border-radius: 8px;
`

export const Description = styled.div`
  height: 100%;
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 14px 0px;

  @media (max-width: 700px) {
    padding: 14px 10px;
  }
`

export const Model = styled.h3`
  font-family: Helvetica;
  font-size: 24px;
  font-weight: 700;
`
export const Year = styled.p`
  font-family: Helvetica;
  font-size: 24px;
  font-weight: 400;
  color: #595959;
`

export const View = styled.a`
  font-family: Helvetica;
  font-size: 20px;
  line-height: 20px;
  font-weight: 400;
  color: #00adee;
  text-decoration: none;
  cursor: pointer;
`

export const OptionsContainer = styled.div`
  right: 0px;
  position: absolute;
  display: inline-block;
`

export const Options = styled.ul`
  display: none;
  position: absolute;
  top: -10;
  right: 0px;
  list-style: none;
  width: 100px;
  height: 120px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  z-index: 1;

  &.dropOpen {
    display: flex;
  }

  & li {
    padding-left: 15px;
    cursor: pointer;
    width: 100%;
    height: 33%;

    &:hover {
      background-color: #c1c1c1;
    }
  }
`

export const Info = styled.p`
  font-size: 16px;
  font-family: helvetica;
  display: flex;
  justify-content: center;
  margin: 8px;
`
