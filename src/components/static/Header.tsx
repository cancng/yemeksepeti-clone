import {
  Button,
  chakra,
  Container,
  Flex,
  IconButton,
  Image,
  Input,
  Select,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <chakra.header h='80px' bg='brand.red100'>
      <Container h='full' maxW='5xl'>
        <Flex alignItems='center' h='full' justifyContent='space-between'>
          <Image src='/logo2.png' />
          <Select bg='white' w='25%'>
            <option>kek</option>
          </Select>
          <Flex w='50%'>
            <Input
              placeholder='Yemek, mutfak veya restoran arayın.'
              bg='white'
              roundedRight='none'
              w='88%'
            />
            <IconButton
              w='12%'
              aria-label='search icon'
              icon={<FaSearch />}
              roundedLeft='none'
              bgGradient='linear-gradient(180deg,#fec13d 0,#fd9a2c)'
              _hover={{ bg: 'brand.orange', textColor: 'white' }}
            />
          </Flex>
        </Flex>
      </Container>
    </chakra.header>
  );
}

export default Header;
