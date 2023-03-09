import { NativeBaseProvider, Center } from "native-base";
import RDesigns from "./designs/RDesigns";
import RForms from "./forms/RForms";

export default Receipes = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      {/* <RDesigns/> */}
      <RForms/>
    </Center>
  </NativeBaseProvider>;
}