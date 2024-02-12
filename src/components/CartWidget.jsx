import React from 'react'
import carrito from '../assets/img/carrito.png'
import { Flex, Box, Divider } from '@chakra-ui/react'


const CartWidget = () => {
  return (
    <Flex>
      <Box>
        <img src={carrito} height={70} width={70} />
      </Box>
      <Divider />
      <Box>
        <p>3</p>
      </Box>
    </Flex>
  )
};

export default CartWidget;
