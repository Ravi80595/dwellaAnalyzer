import { Box } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {


return (
    <Box w={'100%'} position={'fixed'} h={'50px'} background={'white'} pt={5} zIndex={9999}>
        <h2>Orders by State</h2>
    </Box>
  )
}

export default Navbar