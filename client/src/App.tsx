import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import Pages from "./pages";

export default function App() {
  return (
    <ChakraProvider>
      <Pages />
    </ChakraProvider>
  );
}
