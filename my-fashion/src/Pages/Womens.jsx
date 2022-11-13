import {Box,Container,Flex,Image,Text,Button, GridItem,Grid} from "@chakra-ui/react"
import {Link} from "react-router-dom"



function Womens(){
    return (
           <Container>
            <Box>
                <Flex>
                    <Box>
                        <Image src='https://cdn.modesens.com/availability/57841520?w=800'></Image>
                    </Box>
                    <Box>
                       <Container>
                        <h1>ETRO</h1>
                        <h2>Prented Jersery One Sleeved Mini Dress in Red</h2>
                        <h3><span color='Red'>$557(26% OFF)</span>-$1450 Set Alert</h3>
                       <Link to={"/checkout"}>

                     
                        <Button bg='black' color='white' p='10px'>Shop Now</Button>
                        </Link>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                       </Container>
                    </Box>
                  
                </Flex>
            </Box>
            <Box>
                <Flex>
                <Image src='https://img.brownsfashion.com/19/09/18/31/19091831_42034666_800.jpg' />
                    
                            <Image boxSize="md" src='https://img.brownsfashion.com/19/09/18/31/19091831_42033619_800.jpg'></Image>
                   
                          
                  
                    
                </Flex>
            </Box>
           </Container>
    )
}
export default Womens;