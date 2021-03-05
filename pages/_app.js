import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { Global } from "@emotion/react"
import theme from "../styles/theme"

const themes = extendTheme(theme)
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={themes}>
      <Global  />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}