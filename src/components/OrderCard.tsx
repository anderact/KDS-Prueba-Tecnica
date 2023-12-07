'use client'

import React from "react"
import styled from "styled-components"
import StyledComponentsRegistry from "@/app/registry"
import ActionButtons from "./ActionButtons"
import { Order, Product, OrderStatus } from "@/types/Order"

interface OrderCardProps {
  order: Order
}

const getOrderBackgroundColor = (status: OrderStatus) => {
  switch (status) {
    case "Cancelado":
      return "#FFB9B9"
    case "En atencion":
      return "#fffab9"
    case "Completado":
      return "#C8FFB9"
    default:
      return "#D8D8D8"
  }
}

const getOrderTitleColor = (status: OrderStatus) => {
  switch (status) {
    case "Cancelado":
      return "#d15b5b"
    case "En atencion":
      return "#c7bd39"
    case "Completado":
      return "#66c74c"
    default:
      return "#797979"
  }
}

const OrderCardContainer = styled.div<{ status: OrderStatus }>`
  color: black;
  padding: 1.5rem;
  border-radius: 3%;
  background-color: ${(props) => getOrderBackgroundColor(props.status)};
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const OrderHeader = styled.div<{ status: OrderStatus }>`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: ${(props) => getOrderTitleColor(props.status)};
`

const OrderNumber = styled.h2`
  font-weight: 600;
  margin: 0;
  font-size: 0.85rem;
`

const ElapsedTime = styled.p`
  font-weight: 600;
  margin: 0;
  font-size: 0.8rem;
`

const OrderDetails = styled.div`
  margin-top: 0.5rem;
  flex-grow: 1;
`;

const ProductDetails = styled.ul<{ status: OrderStatus }>`
  background-color: white;
  border-radius: 3%;
  padding: 0.5rem;
  height: 100%;
  list-style: none;
  margin-bottom: 0.3rem;
  max-height: 10.95rem;
  overflow-y: auto;

  scrollbar-width: thin;  /* Para navegadores no basados en WebKit */
  scrollbar-color: darkgrey lightgrey;  /* Para navegadores no basados en WebKit */

  &::-webkit-scrollbar {
    width: 9px;  /* Ancho del scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => getOrderTitleColor(props.status)};  /* Color del área deslizable del scrollbar */
    border-radius: 6px;  /* Bordes redondeados del área deslizable */
  }

  &::-webkit-scrollbar-track {
    background-color: white; /* Color del área de fondo del scrollbar */
  }
`;

const ProductNameQuantity = styled.p`
  font-size: 0.85rem;
  margin: 0;
`

const ProductDescription = styled.p`
  font-size: 0.7rem;
  font-style: italic;
`

const ProductDetailItem = styled.li`
  margin-bottom: 0.5rem;
`;

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <StyledComponentsRegistry>
      <OrderCardContainer status={order.status}>
        <OrderHeader status={order.status}>
          <OrderNumber>Número de orden #{order.id}</OrderNumber>
          <ElapsedTime> {order.timeElapsed} mins</ElapsedTime>
        </OrderHeader>
        <OrderDetails>
          <ProductDetails status={order.status}>
            {order.products.map((product: Product, index: number) => (
              <ProductDetailItem key={index}>
                <ProductNameQuantity>{`${product.quantity} x ${product.name}`}</ProductNameQuantity>
                {product.details && (
                  <ProductDescription>{`${product.details}`}</ProductDescription>
                )}
              </ProductDetailItem>
            ))}
          </ProductDetails>
        </OrderDetails>
        <ActionButtons
          orderStatus={order.status}
        />
      </OrderCardContainer>
    </StyledComponentsRegistry>
  );
}
