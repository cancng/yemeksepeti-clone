import React from 'react';
import {
  Badge,
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import Header from './Header';
import { FaHome, FaPizzaSlice, FaStar } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import Slider from 'react-slick';

import ConnectFacebook from '../ConnectFacebook';
import SkeletonLoading from '../static/SkeletonLoading';
import Leftbar from './Leftbar';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Container
        display='flex'
        mx='auto'
        minHeight='calc(100vh - 80px)'
        maxW='6xl'
        flexDir={['column', 'column', 'row']}
        overflow='hidden'
        py='6'
      >
        {/* LEFT BAR */}
        <Leftbar />

        {/* MAIN */}
        <Flex w={['100%', '100%', '75%']} flexDir='column'>
          <Flex w='full' flexDir={['column', 'column', 'row']}>
            <Flex
              w={['100%', '100%', '25%']}
              pr={['0', '0', '4']}
              my={['4', '4', '0']}
            >
              <Flex
                flexDir='column'
                border='5px solid #eff0f2'
                borderBottom='35px solid #eff0f2'
                borderRadius='5px'
                h='222px'
                w='full'
              >
                <Box display='flex' flexDir='column' py='3'>
                  <Flex justifyContent='center'>
                    <FiMapPin />
                    <Text fontWeight='bold' ml='1' fontSize='12px'>
                      Kayıtlı Adreslerim
                    </Text>
                  </Flex>

                  <Flex px='4' py='1' alignItems='center'>
                    <FaHome size={24} color='#529732' />
                    <Flex
                      flexDir='column'
                      fontSize='12px'
                      ml='2'
                      whiteSpace='nowrap'
                      w='75%'
                    >
                      <Text fontWeight='bold'>Ev</Text>
                      <Text
                        overflow='hidden'
                        maxW='full'
                        textOverflow='ellipsis'
                      >
                        Türkiye İl İlçe (Örnek mah.)
                      </Text>
                    </Flex>
                    <Text
                      fontSize='12px'
                      textDecor='underline'
                      color='brand.orange'
                      position='absolute'
                      // bottom='568px'
                      top='300px'
                    >
                      Yeni Adres Ekle
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
            <Flex w={['100%', '100%', '75%']}>
              <Flex
                flexDir='column'
                border='5px solid #eff0f2'
                borderBottom='35px solid #eff0f2'
                borderRadius='5px'
                h='222px'
                w='full'
              >
                <Tabs size='sm'>
                  <TabList>
                    <Tab>
                      <FaPizzaSlice style={{ marginRight: 2 }} /> Siparişlerim
                    </Tab>
                    <Tab>
                      <FaStar style={{ marginRight: 2 }} />
                      Favorilerim
                    </Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <HStack mb='2'>
                        <Badge colorScheme='green'>9,1</Badge>
                        <Text fontSize='13px'>
                          Pizza House (Ziyapaşa mah.) - 1 hafta önce
                        </Text>
                      </HStack>
                      <HStack>
                        <Badge colorScheme='yellow'>6,4</Badge>
                        <Text fontSize='13px'>
                          Pizza House (Ziyapaşa mah.) - 3 hafta önce
                        </Text>
                      </HStack>

                      <Text
                        fontSize='12px'
                        textDecor='underline'
                        color='brand.orange'
                        position='absolute'
                        // bottom='568px'
                        top='300px'
                      >
                        Tüm Siparişlerimi Görüntüle
                      </Text>
                    </TabPanel>
                    <TabPanel>sa</TabPanel>
                  </TabPanels>
                </Tabs>
              </Flex>
            </Flex>
          </Flex>

          <Flex w='full' mt='4' flexDir={['column', 'column', 'row']}>
            <Flex
              w={['100%', '100%', '66%']}
              flexDir='column'
              pr={['0', '0', '4']}
              my={['4', '4', '0']}
            >
              <Image
                src='https://res.cloudinary.com/bomi/image/upload/v1630015017/Web-oa8xxb_h0hh88.jpg'
                rounded='md'
                w='full'
                mb='4'
              />

              <Box pb={6}>
                <Slider
                  {...{
                    dots: false,
                    arrows: false,
                    fade: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                  }}
                >
                  <div>
                    <Image
                      src='https://res.cloudinary.com/bomi/image/upload/v1630081248/Web-1rxl3a_bkrzml.jpg'
                      w='full'
                    />
                  </div>
                  <div>
                    <Image
                      src='https://res.cloudinary.com/bomi/image/upload/v1630081266/Web-2u7em8_tn4mez.jpg'
                      w='full'
                    />
                  </div>
                </Slider>
              </Box>

              <Image
                src='https://res.cloudinary.com/bomi/image/upload/v1630015017/Web-oa8xxb_h0hh88.jpg'
                rounded='md'
                w='full'
                mb='4'
              />

              <Image
                src='https://res.cloudinary.com/bomi/image/upload/v1630082581/Web-auajzo_dyr8lw.png'
                rounded='md'
                w='full'
                mb='4'
              />
            </Flex>
            <Flex w={['100%', '100%', '34%']}>
              <Flex
                flexDirection='column'
                border='5px solid #3993bd'
                w='full'
                rounded='md'
                bgColor='#3993bd'
                alignSelf='flex-start'
              >
                <Box py='3' px='2' bgColor='white' rounded='sm'>
                  <ConnectFacebook />
                </Box>

                <Select bgColor='white' size='sm' mt='3'>
                  <option>Merkez (Örnek mah.)</option>
                </Select>

                <Tabs size='sm' bgColor='white' mt='6' mb='2' height='300px'>
                  <TabList>
                    <Tab>Puan Tablosu</Tab>
                    <Tab>Son Hareketler</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <SkeletonLoading amount={6} />
                    </TabPanel>
                    <TabPanel>nbr</TabPanel>
                  </TabPanels>
                </Tabs>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Layout;
