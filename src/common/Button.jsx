import React from 'react'
import { Button } from '@chakra-ui/react'

const Buttons = ({children}) => {
  return (
    <Button
      color='#fff'
      w={['75%', '35%']}
      mt='1rem'
      fontFamily={`var(--font-raleway)`}
      bg='transparent'
      border='1px solid #fff'
      borderRadius='1rem'
      _hover={{
        color: '#02091B',
        bg: '#fff'
      }}
    >
      {children}
      {/* &#8725;&gt;  */}
    
    </Button>
  )
}

export default Buttons