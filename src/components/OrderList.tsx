'use client'

import React, { useState } from "react"
import styled from "styled-components"
import StyledComponentsRegistry from "@/app/registry"
import OrderCard from "./OrderCard"
import FilterComponent from "./FilterComponent"
import { Order } from "@/types/Order"

interface OrderListProps {
  orders: Order[]
}

const OrderListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
  padding: 2rem 6rem;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export default function OrderList({ orders }: OrderListProps) {
  const [filteredStatus, setFilteredStatus] = useState<string>('')

  const handleFilterChange = (selectedStatus: string) => {
    setFilteredStatus(selectedStatus)
  }

  const filteredOrders = filteredStatus
    ? orders.filter((order) => order.status === filteredStatus)
    : orders

  return(
    <StyledComponentsRegistry>
      <FilterComponent onChange={handleFilterChange} />
      <OrderListContainer>
        {filteredOrders.map((order) => (
          <OrderCard key={order.id} order={order}/>
        ))}
      </OrderListContainer>
    </StyledComponentsRegistry>
  )
}