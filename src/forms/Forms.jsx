import { NativeBaseProvider, Center } from "native-base";
import { BasicButton, ButtonVariants, IconButtons, LoadingButtons, SizesButton } from "./MyButton";
import { AccesingEvents, BasicPressable } from "./MyPressable";

export default Forms = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      {/* <BasicButton/> */}
      {/* <SizesButton/> */}
      {/* <ButtonVariants/> */}
      {/* <LoadingButtons/> */}
      {/* <IconButtons/> */}

      {/* <BasicPressable/> */}
      <AccesingEvents/>
    </Center>
  </NativeBaseProvider>;
}