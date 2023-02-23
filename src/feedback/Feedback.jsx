import { NativeBaseProvider, Center } from "native-base";
import { ActionAlert, AlertExample, BasicAlert, CompositionAlert, StatusAlert, VariantAlert } from "./MyAlert";

export default DataDisplya = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      {/* <AlertExample/> */}
      {/* <BasicAlert/> */}
      {/* <StatusAlert/> */}
      {/* <VariantAlert/> */}
      {/* <CompositionAlert/> */}
      <ActionAlert/>
    </Center>
  </NativeBaseProvider>;
}