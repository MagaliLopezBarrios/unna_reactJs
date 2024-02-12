import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Box, Spacer } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <Flex>
            <Box p="2" bg="purple" color="black">
                UNNA Villa Elisa
            </Box>

            <Spacer />
            <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    CATEGORIAS
                </MenuButton>
                <MenuList>
                    <MenuItem>UNNA Sale</MenuItem>
                    <MenuItem>LIBRERIA</MenuItem>
                    <MenuItem>JUGUETERIA</MenuItem>
                    <MenuItem>BLANCO Y DECO</MenuItem>
                </MenuList>
            </Menu>
            </Box>

            <Spacer />
            <Box>
            <CartWidget />

            </Box>



        </Flex>





    )
}

export default NavBar;