import { NativeBaseProvider, Center } from "native-base";
import { BasicFab, CustomPositionFab, PlaceFab } from "./MyFab";
import { BasicHidden, HiddenBreakpoints, HiddenColorMode, HiddenPlatform } from "./MyHidden";

export default Transition = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      {/* <BasicFab/> */}
      {/* <PlaceFab/> */}
      {/* <CustomPositionFab/> */}

      {/* <BasicHidden/> */}
      {/* <HiddenBreakpoints/> */}
      {/* <HiddenColorMode/> */}
      {/* <HiddenPlatform/> */}
    </Center>
  </NativeBaseProvider>;
}