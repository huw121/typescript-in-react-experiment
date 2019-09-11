import styled from 'styled-components';

export const Product = styled.article`
    display: flex;
    margin: 1em
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `
export const ImageContainer = styled.div`
    padding: 1em;
  `
export const ProductInfo = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
  `
export const ImportantInfo = styled.h1`
    font-weight: bold;
    font-size: 2.5em;
  `
export const Description = styled.p`
    font-size: 1.3em;
  `
export const StyledButton = styled.button`
    font-size: 1.3em;
    font-weight: bold;
    padding: 0.25em 1em;
    border: 1px solid #b20e53;
    background: white;
    color: #b20e53;
    &:hover {
      cursor: pointer;
    }
  `
export const BasketImage = styled.img`
    max-width: 500px;
`
export const QuantityDisplay = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1em 0;   
`
export const Notice = styled.h1`
  font-weight: bold;
  font-size: 3.5em;
  margin: 1em;
`