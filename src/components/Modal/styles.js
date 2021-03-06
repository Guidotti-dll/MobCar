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

export const ModalDelete = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & p{
    padding: 10px 0;
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
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 4px;

  @media (max-width:270px){
    display: flex;
  flex-wrap: wrap;
  }
`

export const Info = styled.p`
  font-size: 16px;
  font-family: helvetica;
  display: flex;
  justify-content: flex-start;
  margin: 14px;
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
