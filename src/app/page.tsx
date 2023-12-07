import React from 'react'
import OrderList from '@/components/OrderList'
import { sampleOrders } from '@/data/SampleOrders'

export default function Home() {
  return (
    <div>
      {/* <h1>Kitchen Display System</h1> */}
      <OrderList orders={sampleOrders}></OrderList>
    </div>
  )
}
