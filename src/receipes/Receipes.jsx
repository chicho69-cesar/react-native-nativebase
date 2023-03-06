import { NativeBaseProvider, Center } from "native-base";
import RDesigns from "./designs/RDesigns";

export default Receipes = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      <RDesigns/>
    </Center>
  </NativeBaseProvider>;
}