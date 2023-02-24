import { NativeBaseProvider, Center } from "native-base";
import { BasicActionSheet, CompositionActionSheet, DisableOverlayActionSheet, IconsActionSheet } from "./MyActionSheet";

export default Disclosure = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      {/* <BasicActionSheet/> */}
      {/* <CompositionActionSheet/> */}
      {/* <DisableOverlayActionSheet/> */}
      <IconsActionSheet/>
    </Center>
  </NativeBaseProvider>;
}