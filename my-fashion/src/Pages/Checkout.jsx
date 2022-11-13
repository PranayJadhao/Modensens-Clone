import {Box,Container,Grid,GridItem,FormLabel,Input,Button} from "@chakra-ui/react"
import {Link} from "react-router-dom"

function Checkout(){
    return (
        <Box>

      
        <h1>Payment Page</h1>
        <h3>Enter Address Details</h3>
        <Container w={'30%'} m='auto'>
        <Grid templateColumns='repeat(2, 1fr)' gap={4}>
    <GridItem colSpan={1}>
    <FormLabel>Address Line 1</FormLabel>
  <Input type='text' />
    </GridItem>

    <GridItem colSpan={1}>
    <FormLabel>Address Line 1</FormLabel>
  <Input type='text' />
    </GridItem>

    <GridItem colSpan={2}>
    <FormLabel>City</FormLabel>
  <Input type='text' />
    </GridItem>

    <GridItem colSpan={2}>
    <FormLabel>State</FormLabel>
  <Input type='text' />
    </GridItem>

    <GridItem colSpan={2}>
    <FormLabel>Landmark</FormLabel>
  <Input type='text' />
    </GridItem>

  </Grid>
  <hr></hr>
  <h3>Enter Card Details</h3>
  <label>Enter Card No   </label>
  <Input></Input>
  <br></br>
  <br></br>
  <label>Enter CVV   </label>
  <Input></Input>
  <br></br>
  <br></br>
  <label>Enter Card Holder Name  </label>
  <Input></Input>
<br></br>
<br></br>

<Link to={"/thankyou"}>


  <Button bg='black' color='white' p={10}>Submit</Button>
       
  </Link>
   </Container>
        </Box>
    )
}
export default Checkout;