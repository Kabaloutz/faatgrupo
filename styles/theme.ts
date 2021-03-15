// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({  
  styles: {
    global: {          
      // styles for the `body`
      body: {
        bg: "#9E9A98",
        color: "#fff",
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },      
      },
  },
  quadroStyle:{
    box:{
      bg:"red",
    }, 
    a:{
      color:"red",
    },
    Text:{
      
      color:"red",
    }
  },
},
})
export default theme