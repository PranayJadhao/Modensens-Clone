import React from "react";
import {Box,Flex,Image,Heading,Text,  FormControl,
    FormLabel,
    FormErrorMessage,Button,
    FormHelperText,Grid,Input,
    GridItem,
    Container,} from "@chakra-ui/react"
import {EmailIcon} from "@chakra-ui/icons"
import {Link} from "react-router-dom"









function Signup(){
    return(
        <>
        <Flex justifyContent='space-evenly'>

      
    <Box>
        <Image boxSize={"xxl"} w='600px' marginTop={"180px"} src='data:image/jpeg;base64,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'></Image>
    
        
    
       
           
           
    </Box>
    
    
    
    
    <Box>
    <Container size='xl' lineHeight={2}>

 
        <FormControl>
        <Heading>Join Modsence</Heading>
        <Text>Already have an account?<span>Login</span></Text>

        <Button leftIcon={<EmailIcon />}  bg='black' variant='solid' color='white' p={10}>
    Continue with Email
  </Button>
  <Text>OR</Text>

  <Grid templateColumns='repeat(2, 1fr)' gap={4}>
    <GridItem colSpan={1}>
    <FormLabel>First name</FormLabel>
  <Input type='text' />
    </GridItem>

    <GridItem colSpan={1}>
    <FormLabel>Last name</FormLabel>
  <Input type='text' />
    </GridItem>

    <GridItem colSpan={2}>
    <FormLabel>Email address</FormLabel>
  <Input type='email' />
    </GridItem>

    <GridItem colSpan={2}>
    <FormLabel>Username<span color="black.100">(only letters, numbers, and underscores)</span></FormLabel>
  <Input type='email' />
    </GridItem>

    <GridItem colSpan={2}>
    <FormLabel>Password<span> (min. 8 char)</span></FormLabel>
  <Input type='password' />
    </GridItem>

    <GridItem colSpan={2} w='full'>
    <Link to={`/login`}> <Button w='full' bg='black' color='white' p={10}>Join</Button></Link>
       
    </GridItem>
    
  </Grid>
        </FormControl>


        <Text>By joining, you agree to the <span color='blue'>Terms</span> and<span color='blue'> Privacy Policy.</span></Text>
        </Container>
    </Box>
   

  
    </Flex>
   
        </>
    )
}
export default Signup;