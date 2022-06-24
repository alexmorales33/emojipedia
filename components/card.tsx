import * as React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
  } from '@chakra-ui/react';

  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

  import { useDisclosure } from '@chakra-ui/react'

  
export interface CardProps {
    code?: string,
    emoji: string,
    name: string,
    category?: string,
    group?: string,
    subgroup?: string
}

const Card: React.FunctionComponent<CardProps> = ({
    code,
    emoji,
    name,
    category,
    group,
    subgroup,
}) => {

    const [isPressed, setIsPressed] = React.useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
          <Center py={12}>
            <Box
              role={'group'}
              p={5}
              maxW={'175px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}
              border='1px'
              borderColor='#B7791F'
              >
              <Box 
                display="flex" 
                alignItems="center"
                justifyContent="center"
                rounded={'lg'}
                height={'100px'} >
                <Text align={'center'} fontSize={'70'}>
                  {emoji}
                </Text>
              </Box>
              <Stack pt={5} align={'center'}>
                <Heading fontSize={'15'}  fontWeight={500} >
                  {name}
                </Heading>
                <Button
                    onClick={onOpen}
                    flex={1}
                    fontSize={'15'}
                    rounded={'full'}
                    _focus={{
                      bg: 'gray.200',
                    }}>
                    View More
                  </Button>
              </Stack>
            </Box>
          </Center>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent borderRadius='15'>
              <ModalHeader textAlign='center'>{name.toUpperCase()}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                    <Text textAlign='center' fontSize='60'>
                      <Text>
                        {emoji}
                      </Text>
                    </Text>
                    <Box mt='3' >
                      <Text as='em'>Code: </Text>{code}
                    </Box>
                    <Box mt='3'>
                      <Text as='em'>Category: </Text>{category}{' '}
                    </Box>
                    <Box mt='3' mb='2'>
                    <Text as='em'>Group:</Text> {group}{' '}
                    </Box>
                    <Center>
                      <Button colorScheme='yellow' onClick={onClose} mb='3' mt='3' >
                        Ok, thanks!
                      </Button>
                    </Center>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
    )
}

export default Card