import { NativeBaseProvider, Center } from "native-base";
import RDesigns from "./designs/RDesigns";
import RForms from "./forms/RForms";
import RLayout from "./layout/RLayout";

export default Receipes = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      {/* <RDesigns/> */}
      {/* <RForms/> */}
      <RLayout/>
    </Center>
  </NativeBaseProvider>;
}