import { NativeBaseProvider, Center } from "native-base";
import { ActionAlert, AlertExample, BasicAlert, CompositionAlert, StatusAlert, VariantAlert } from "./MyAlert";
import { BasicProgress, CustomTrackColor, FlatProgress, ProgressColorSchema, SizesProgress } from "./MyProgress";

export default DataDisplya = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      {/* <AlertExample/> */}
      {/* <BasicAlert/> */}
      {/* <StatusAlert/> */}
      {/* <VariantAlert/> */}
      {/* <CompositionAlert/> */}
      {/* <ActionAlert/> */}

      {/* <BasicProgress/> */}
      {/* <ProgressColorSchema/> */}
      {/* <SizesProgress/> */}
      {/* <FlatProgress/> */}
      <CustomTrackColor/>
    </Center>
  </NativeBaseProvider>;
}