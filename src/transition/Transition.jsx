import { NativeBaseProvider, Center } from "native-base";
import { Fade, ScaleFade } from "./MyPresenceTransition";

export default Transition = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      <Fade/>
      <ScaleFade/>
    </Center>
  </NativeBaseProvider>;
}