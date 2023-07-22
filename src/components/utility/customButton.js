import React from 'react'
import Button from 'react-bootstrap/Button';
import { AiOutlineArrowRight } from 'react-icons/ai';
const customButton = (props) => {
  const {text,variant,link,classname,...rest}=props
  return (
    <>
      <Button className={classname} href={link} variant={variant} {...rest}>
        {text} <AiOutlineArrowRight className='ms-2'/>
      </Button>
    </>
  )
}

export default customButton;