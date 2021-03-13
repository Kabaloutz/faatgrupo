// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  layerStyles: {
    base: {
      bg: "gray.50",
      border: "2px solid",
      borderColor: "gray.500",
    },
    selected: {
      bg: "teal.500",
      color: "teal.700",
      borderColor: "orange.500",
    },
    Display: {
      position: "relative",
      justifyContent:"end",
      w:"100%",
      h:"300px",
      bg: "teal.500",
      color: "teal.700",
      borderColor: "gray",
    },
    container: {
      mt:"5",
      mb:"5",
      position: "relative",
      justifyContent:"center",
      alignItems:"center",
      Image:{
        w:"10%",
      },
    },    

  },
  
  colors: {
    principal: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
    preto:{
      100:"#2A2929",
      200:"#282829",
    },
    elementos: {
      ar: "#00AFEF",
      terra: "#5F8E49",
      agua: "#3B708D",
      fogo: "#ED3237",
      },
  },
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
},
})
export default theme