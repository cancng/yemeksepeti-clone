import {
  Avatar,
  Box,
  Button,
  chakra,
  Divider,
  Flex,
  Input,
  SimpleGrid,
  Text,
  VStack,
  useBoolean,
  FlexProps,
  BoxProps,
} from '@chakra-ui/react';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown, FaRegTrashAlt, FaTimes } from 'react-icons/fa';
import ConnectFacebook from '../ConnectFacebook';

const MotionFlex = motion<Omit<FlexProps, 'transition'>>(Flex);
const MotionBox = motion<Omit<BoxProps, 'transition'>>(Box);

function Leftbar() {
  const [isOpen, { toggle }] = useBoolean(false);

  return (
    <Flex w={['100%', '100%', '25%']} mr={['0', '0', '10px']}>
      <VStack spacing='1' w='full'>
        <Flex
          bgColor='gray.100'
          border='1px'
          borderColor='#e5e5e5'
          borderRadius='4px'
          p='2'
          w='full'
          alignItems='center'
          justifyContent='space-between'
        >
          <Box display='flex' alignItems='center'>
            <Avatar size='md' mr='1' bg='red.500' />
            <Flex flexDirection='column' maxW='140px' overflow='hidden'>
              <Text
                color='brand.orange'
                fontWeight='bold'
                whiteSpace='nowrap'
                fontSize='12px'
              >
                Mahmut Can Çıngı
              </Text>
              <chakra.span fontSize='sm'>16 Toplam puan</chakra.span>
            </Flex>
          </Box>
          <MotionBox
            animate={{
              rotate: isOpen ? 180 : 0,
            }}
            transition={{
              duration: 0.35,
            }}
          >
            <FaChevronDown onClick={toggle} />
          </MotionBox>
        </Flex>

        <AnimatePresence initial={false}>
          {isOpen && (
            <MotionFlex
              border='1px solid #e5e5e5'
              borderTop='none'
              flexDir='column'
              w='full'
              initial='collapsed'
              animate='open'
              exit='collapsed'
              variants={{
                open: { height: 'auto', opacity: 1 },
                collapsed: { height: 0, opacity: 0 },
              }}
              transition={{ duration: 0.35 }}
            >
              <Flex flexDir='column' px='2' py='1'>
                <Text fontWeight='bold' fontSize='13px'>
                  Bildirimlerim
                </Text>
                <Text fontWeight='bold' fontSize='13px'>
                  Profilim
                </Text>
                <Text fontWeight='bold' fontSize='13px'>
                  Siparişlerim
                </Text>
                <Text fontWeight='bold' fontSize='13px'>
                  Favorilerim
                </Text>
                <Text fontWeight='bold' fontSize='13px'>
                  Adreslerim
                </Text>
                <Text fontWeight='bold' fontSize='13px'>
                  Bilgilerim
                </Text>
              </Flex>
              <Flex
                px='2'
                py='3'
                bgColor='#eff0f2'
                color='brand.red200'
                fontWeight='bold'
                fontSize='13px'
              >
                ÇIKIŞ YAP
              </Flex>
            </MotionFlex>
          )}
        </AnimatePresence>

        <ConnectFacebook />

        <Flex w='full' flexDirection='column'>
          <Flex
            justifyContent='space-between'
            alignItems='center'
            bgColor='brand.red200'
            color='white'
            py='2'
            px='3'
          >
            <Text fontWeight='bold' fontSize='12px'>
              YEMEK SEPETiM
            </Text>
            <FaRegTrashAlt size={14} />
          </Flex>

          <Flex flexDirection='column' bgColor='brand.yellow' py='2' px='3'>
            <Text color='brand.orange' fontSize='11px' fontWeight='bold'>
              Restoran adı, ilçe (Örnek Mah.)
            </Text>
            <Text fontSize='11px'>İlçe, (Örnek mah.)</Text>
          </Flex>

          {new Array(4).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              <SimpleGrid
                columns={2}
                borderLeft='1px solid #e5e5e5'
                borderRight='1px solid #e5e5e5'
                p='1'
              >
                <Flex
                  fontSize='9px'
                  color='brand.orange'
                  alignItems='center'
                  overflow='hidden'
                >
                  Yemek ismi
                </Flex>
                <Flex alignItems='center' justifyContent='space-between'>
                  <Input
                    size='xs'
                    w='14px'
                    fontSize='9px'
                    p='0'
                    textAlign='center'
                    value={1}
                    readOnly
                    max='99'
                  />
                  <Box fontSize='11px' display='flex' alignItems='center'>
                    <Text mr='2'>20,00 TL</Text> <FaTimes color='#b50208' />
                  </Box>
                </Flex>
              </SimpleGrid>
              <Divider />
            </React.Fragment>
          ))}

          <Flex
            justifyContent='space-between'
            fontWeight='bold'
            fontSize='14px'
            p='1'
            borderLeft='1px solid #e5e5e5'
            borderRight='1px solid #e5e5e5'
          >
            <Text>Toplam</Text>
            <Text>80,00 TL</Text>
          </Flex>
          <Box p='2' bg='#e5e5e5'>
            <Button w='full' size='sm' colorScheme='green'>
              SEPETi ONAYLA
            </Button>
          </Box>
        </Flex>
      </VStack>
    </Flex>
  );
}

export default Leftbar;
