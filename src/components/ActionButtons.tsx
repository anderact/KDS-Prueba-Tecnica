import React, { useState } from 'react'
import styled from 'styled-components'
import { OrderStatus } from '@/types/Order';

interface ActionButtonsProps {
  orderStatus: OrderStatus
}

const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`

const getButtonBackgroundColor = (status: OrderStatus) => {
  switch (status) {
    case 'Cancelado':
      return '#d15b5b';
    case 'En atencion':
      return '#c4b924';
    case 'Completado':
      return '#66c74c';
    default:
      return '#797979';
  }
}

const ActionButton = styled.button<{ disabled: boolean; status: OrderStatus }>`
  flex: 1;
  padding: .5rem;
  margin: 0 .5rem 0 .5rem;
  font-size: .7rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => (props.disabled ? getButtonBackgroundColor(props.status) : 'white')};
  border-radius: 5%;
  color: ${(props) => (props.disabled ? 'white' : 'black')};
`

export default function ActionButtons({ orderStatus }: ActionButtonsProps) {

  return(
    <ActionButtonContainer>
      <ActionButton disabled={orderStatus === 'En atencion'} status={orderStatus}>En atencion</ActionButton>
      <ActionButton disabled={orderStatus === 'Completado'} status={orderStatus}>Completado</ActionButton>
      <ActionButton disabled={orderStatus === 'Cancelado'} status={orderStatus}>Cancelado</ActionButton>
    </ActionButtonContainer>
  )
}