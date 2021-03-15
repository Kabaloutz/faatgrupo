import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import theme from "../styles/theme"
const themes = extendTheme(theme)
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={themes}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}