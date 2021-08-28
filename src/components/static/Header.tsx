import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  Portal,
  Select,
  Text,
  useBoolean,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

function Header() {
  const [isSearchOpen, { toggle }] = useBoolean(false);
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
              onFocus={toggle}
              onBlur={toggle}
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
      {isSearchOpen && (
        <Portal>
          <Box
            height='100%'
            position='absolute'
            left='0'
            right='0'
            top='0'
            bottom='0'
            sx={{
              bgColor: 'rgba(0,0,0,.35)',
            }}
          />
          <Box
            bgColor='white'
            position='absolute'
            p='4'
            top='64px'
            left='50%'
            border='1px solid #ffd55a'
            w={['300px', '400px']}
          >
            <Box>
              <Text fontWeight='bold' fontSize='13px'>
                Popüler Aramalar
              </Text>
              <HStack>
                <Button
                  variant='outline'
                  size='sm'
                  rounded='md'
                  _hover={{
                    color: 'brand.orange',
                  }}
                >
                  döner
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  rounded='md'
                  _hover={{
                    color: 'brand.orange',
                  }}
                >
                  pizza
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  rounded='md'
                  _hover={{
                    color: 'brand.orange',
                  }}
                >
                  tatlı
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  rounded='md'
                  _hover={{
                    color: 'brand.orange',
                  }}
                >
                  burqer
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  rounded='md'
                  _hover={{
                    color: 'brand.orange',
                  }}
                >
                  lahmacun
                </Button>
              </HStack>
            </Box>
            <Box>
              <Text fontWeight='bold' fontSize='13px' mt='3'>
                Mutfak
              </Text>
              <Wrap spacing='4' flexWrap='wrap'>
                {Array(9)
                  .fill('')
                  .map((_, i) => (
                    <WrapItem key={i}>
                      <Image
                        boxSize='64px'
                        objectFit='cover'
                        src='https://cdn.yemeksepeti.com/App_Themes/cuisines/discover/kebap-turk-mutfagi.png'
                      />
                    </WrapItem>
                  ))}
              </Wrap>
            </Box>
          </Box>
        </Portal>
      )}
    </chakra.header>
  );
}

export default Header;
