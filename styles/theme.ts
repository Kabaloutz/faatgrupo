// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
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