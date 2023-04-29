import React from 'react'
import { Button } from './styles'
import PropTypes from 'prop-types'

export const SubmitButton = ({ title, type, onClick }) => {
  return (
    <Button type={type} onClick={onClick}>{title}</Button>
  )
}

SubmitButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
}
