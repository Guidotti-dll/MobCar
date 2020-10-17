import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog';

export const ModalContent = styled(Dialog)`
  & .MuiPaper-root{
  width: 448px;
  height: fit-content;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 18px;

  @media (max-width: 500px) {
    width: 97%;
  }
  }
`

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  flex-wrap: wrap;

  & div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  & div h1 {
    font-size: 24px;
    margin-left: 10px;
  }
`

export const ModalImage = styled.img`
  height: 168px;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
`

export const ModalDescription = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
  margin: auto;
  justify-content: space-between;

  @media (max-width: 392px) {
    width: 50%;
  }
`

export const Info = styled.p`
  font-size: 16px;
  font-family: helvetica;
  display: flex;
  justify-content: center;
  margin: 8px;
`

export const ModalActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  & button {
    margin: 5px 0;
  }
`
