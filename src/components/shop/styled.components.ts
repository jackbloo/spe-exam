import styled from "styled-components"

export const Container = styled.div``

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`
export const Header = styled.th`
  color: white;
  padding: 10px;
`
export const Product = styled.td`
  width: 100%;
  display: flex;
`
export const Quantity = styled.td`
  width: 30%;
`
export const Subtotal = styled.td`
  width: 10%;
`

export const HeaderContainer = styled.thead`
  background: black;
`
export const Image = styled.img`
  height: 100px;
  width: 120px;
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.36);
  -webkit-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.36);
`

export const Row = styled.tr`
  border: 1px solid rgb(0, 0, 0, 0.3);
  padding: 10px;
  > td {
    padding: 10px;
  }
`

export const ProductData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 80%;
  margin-left: 20px;
`
export const ProductCode = styled.div`
  color: blue;
  margin-bottom: 5px;
`
export const ProductName = styled.div`
  text-align: left;
  margin-bottom: 5px;
  font-weight: bold;
`
export const ProductPrice = styled.div`
  margin-bottom: 5px;
`
export const ProductStock = styled.div`
  color: red;
  margin-bottom: 5px;
`

export const InputQuantity = styled.input`
  width: 20px;
  height: 30px;
`

export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background: black;
  padding: 10px;
`

export const TotalContent = styled.div`
  color: white;
  margin-right: 20px;
`
