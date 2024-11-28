import React, { MouseEventHandler } from 'react'

function Button(props: ButtonProps) {

const { onClick, disabled, children } = props

  const { //fallback if unspecified (default props)
    backgroundColor = '#007bff',
    color = '#fff',
    fontWeight = 'normal',
    fontFamily = 'arial',
    fontSize = '14px',
  } = props.style ? props.style : {}

  const customProps = {//consolidating into single object
    backgroundColor,
    color,
    fontWeight,
    fontFamily,
    fontSize,
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        ...customProps,
        ...standardProps,
      }}
    >
      {children}
    </button>
  )
}

const standardProps = {//for consistency, these cannot be changed
  padding: '6px 12px',
  borderRadius: '4px',
  width: 'fit-content',
  cursor: 'pointer',
  lineHeight: 1.5,
  border: 'solid 1px transparent',
}

interface ButtonProps {
  children?: React.ReactNode
  onClick?: MouseEventHandler
  className?: string
  disabled?: boolean
  style?: {
    color?: string
    backgroundColor?: string
    fontFamily?: string
    fontSize?: string
    fontWeight?: string
  }
}

export default Button
