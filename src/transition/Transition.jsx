import { NativeBaseProvider, Center } from "native-base";
import { Fade, ScaleFade } from "./MyPresenceTransition";
import { BasicSlide, SlideComposition, SlideWrapped } from "./MySlide";
import { MyStagger } from "./MyStagger";

export default Transition = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      {/* <Fade/> */}
      {/* <ScaleFade/> */}
      
      {/* <BasicSlide/> */}
      {/* <SlideWrapped/> */}
      {/* <SlideComposition/> */}

      <MyStagger/>
    </Center>
  </NativeBaseProvider>;
}