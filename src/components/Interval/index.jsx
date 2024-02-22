/* eslint-disable import/no-anonymous-default-export */
import Card from '../Card'
import './interval.css'
import React from 'react'

export default props => {
  return (
    <Card red title="Intervalo de Números">
      <span>
        <strong>Mínimo</strong>
        <input type="number" value={0} />
      </span>
      <span>
        <strong>Máximo</strong>
        <input type="number" value={10} />
      </span>
    </Card>
  )
}