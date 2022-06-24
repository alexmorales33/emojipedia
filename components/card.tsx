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
    return (
        <>
          <Center py={10}>
            <Box
              role={'group'}
              p={3}
              maxW={'175px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}>
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
        </>
    )
}

export default Card