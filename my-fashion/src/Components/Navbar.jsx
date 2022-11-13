import {Box,HStack,Image,Flex,Heading,Spacer,Button,ButtonGroup} from "@chakra-ui/react"
import {Link,NavLink} from "react-router-dom"
import styles from "../Components/Navbar.module.css"
const links = [

    { path: "/", title: "Home" },
    { path: "/women", title: "Women" },
    { path: "/men", title: "Men" },
    { path: "/Kids", title: "Kids" },
    { path: "/designers", title: "Designers" },
    { path: "/community", title: "Community" },
    { path: "/sale", title: "Sale" },
    { path: "/why ", title: "Why" },
    { path: "/country", title: "Country" },

   
  ];

  const links2=[
    { path: "/login ", title: "Login" },
    { path: "/signup", title: "Signup" },
  ]

function Navbar(){
    return (
        <Box boxSize="90%" margin={"auto"}>
          <Flex >
            <Box>
               <Image boxSize='100px'  src='https://cdn.modesens.com/static/img/20190228newlogo-black.svg'/> 
            </Box>
   
        {/* <Image src='https://cdn.modesens.com/static/img/20190228newlogo-black.svg' /> */}
            <Box
  
  style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "45%",
        margin: "auto",
       
      }}
  >
    {links.map((link)=>(
 
      <NavLink
       className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
          key={link.path}
          to={link.path}
          end
      ><Box>{link.title}</Box></NavLink>
    ))}

    
    
  </Box>

  <Box
  
  style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "20%",
        margin: "auto",
       
      }}
  >
    {links2.map((link)=>(
 
      <NavLink
       className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
          key={link.path}
          to={link.path}
          end
      ><Box>{link.title}</Box></NavLink>
    ))}

    
    
  </Box>


 
          </Flex>




        </Box>
    )
}
export default Navbar;