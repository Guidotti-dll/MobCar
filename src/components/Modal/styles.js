import styled from 'styled-components'
import Modal from 'react-modal'

export const ModalContent = styled(Modal)`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  transition: 0.5s;
`

export const ModalContainer = styled.div`
  width: 448px;
  height: fit-content;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 18px;

  @media (max-width: 500px) {
    width: 97%;
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
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
`
export const DescriptionContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 200px) {
    width: 100%;
  }
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
