import React from 'react'
import { Container } from 'react-bootstrap'
import DaysList from './DaysList'
import SplitButton from './SplitButton'

function Contents() {
  return (
    <>
    <Container fluid="sm">
        <SplitButton />
        <DaysList />
    </Container>
    </>
  )
}

export default Contents
