// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
    yellow: {
      700: "#975A16",
      // ...
      900: "#1a202c",
    },
    white: {
      100: "#ffffff",
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#f7fafc",
        color: "white",

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