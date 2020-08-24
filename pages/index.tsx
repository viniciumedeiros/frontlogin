// import Head from 'next/head'

import { Heading, Grid, Flex, Link, Button, Text } from '@chakra-ui/core';
import Divider from '../componets/Divider';
import Input from '../componets/Input';

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
        <img src="/fronteng.svg" alt="Robot Login" width="230" height="44" />
        <Heading size="2xl" lineHeight="shorter" marginTop={16}>
          Going far beyond<br></br>field service
        </Heading>
      </Flex>

      <Flex gridArea="form" height="100%" backgroundColor="gray.700" borderRadius="md" flexDir="column" alignItems="stretch" padding={16}>
        <Input placeholder="Email" />

        <Input marginTop={2} placeholder="Password" />

        <Link alignItems="flex-start" marginTop={2} fontSize="sm" color="cyan.600" fontWeight="bold" _hover={{ color: 'cyan.300' }}> Forgot your password?</Link>

        <Button backgroundColor="cyan.500" height="50px" borderRadius="sm" marginTop={6} _hover={{ backgroundColor: 'cyan.700'}}>LOGIN</Button>

        <Text textAlign="center" fontSize="sm" color="gray.300" marginTop={6}>
          Not a customer? {" "}
          <Link color="cyan.600" fontWeight="bold" _hover={{ color: 'cyan.300' }}>
            Sign Up
          </Link>
        </Text>

        <Divider />

        <Flex alignItems="center">
          <Text fontSize="sm">Or enter with</Text>
          <Button height="50px" flex="1" backgroundColor="gray.600" marginLeft={6} borderRadius="sm" _hover={{ backgroundColor: 'cyan.500' }}>GITHUB</Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
