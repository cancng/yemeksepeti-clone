import { Flex, Text } from '@chakra-ui/react';
import { GrFacebook } from 'react-icons/gr';

function ConnectFacebook() {
  return (
    <Flex
      bgColor='facebook.500'
      textColor='white'
      w='full'
      py='2'
      px='4'
      alignItems='center'
      justifyContent='center'
      rounded='sm'
    >
      <GrFacebook size={16} style={{ marginRight: 6 }} />
      <Text fontSize='14px'>Facebook Hesabını Bağla</Text>
    </Flex>
  );
}

export default ConnectFacebook;
