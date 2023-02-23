import { NativeBaseProvider, Center } from "native-base";
import { BasicAlertDialog } from "./MyAlertDialog";

export default MyOverlay = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      <BasicAlertDialog/>
    </Center>
  </NativeBaseProvider>;
}