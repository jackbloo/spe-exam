import React, { useEffect, useState } from "react"
import {
  Container,
  Header,
  HeaderContainer,
  Image,
  InputQuantity,
  Product,
  ProductCode,
  ProductData,
  ProductName,
  ProductPrice,
  ProductStock,
  Quantity,
  Row,
  Subtotal,
  Table,
  TotalContainer,
  TotalContent,
} from "./styled.components"

const Shop = () => {
  const [shopData, setShopData] = useState([])
  const [quantity, setQuantity] = useState([])
  const [total, setTotal] = useState<number[]>([])
  const getData = async () => {
    try {
      const response = await fetch(
        "https://spe-academy.spesolution.net/api/recruitment",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: " Bearer o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y",
          },
        },
      )
      if (response.ok) {
        const data = await response.json()
        setQuantity(data.map((el: any) => el?.quantity))
        setTotal(data.map((el: any) => el?.quantity * el?.product?.price))
        setShopData(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleQuantity = (data: any, index: number, price: number) => {
    let copyQuantity: any = [...quantity]
    copyQuantity[index] = data
    let copyTotal: any = [...total]
    copyTotal[index] = data * price
    setQuantity(copyQuantity)
  }
  useEffect(() => {
    getData()
  }, [])

  const renderTotal = () => {
    let result = 0
    total.forEach((el) => {
      result += el
    })
    return result?.toLocaleString("en-US")
  }
  return (
    <Container>
      <Table>
        <HeaderContainer>
          <tr>
            <Header>Product</Header>
            <Header>Quantity</Header>
            <Header>Subtotal</Header>
          </tr>
        </HeaderContainer>
        <tbody>
          {shopData.map((el: any, index) => (
            <Row key={index}>
              <Product>
                <Image src={el?.product?.media_url} />
                <ProductData>
                  <ProductCode>{el?.product?.code}</ProductCode>
                  <ProductName>{el?.product?.name}</ProductName>
                  <ProductPrice>
                    IDR {el?.product?.price?.toLocaleString("en-US")}
                  </ProductPrice>
                  <ProductStock>In stock {el?.product?.stock}</ProductStock>
                </ProductData>
              </Product>
              <Quantity>
                <InputQuantity
                  value={quantity[index]}
                  onChange={(e) =>
                    handleQuantity(e.target.value, index, el?.product?.price)
                  }
                />
              </Quantity>
              <Subtotal>{total[index]?.toLocaleString("en-US")}</Subtotal>
            </Row>
          ))}
        </tbody>
        <HeaderContainer>
          <tr>
            <Header></Header>
            <Header>TOTAL</Header>
            <Header>IDR {renderTotal()}</Header>
          </tr>
        </HeaderContainer>
      </Table>
    </Container>
  )
}

export default Shop
