import { NativeBaseProvider, Center } from "native-base";
import { BasicButton, ButtonVariants, IconButtons, LoadingButtons, SizesButton } from "./MyButton";
import { AcceptTerms, BasicCheckbox, CheckboxGroup, CheckboxWithRef, Controlled, CustomColor, CustomIcon, Disabled, FormControlled, Invalid, SizeCheckbox, Uncontrolled } from "./MyCheckbox";
import { BasicFormControl, ControlPassword, FormCustomStyle } from "./MyFormControl";
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
      {/* <AccesingEvents/> */}

      {/* <AcceptTerms/> */}
      {/* <BasicCheckbox/> */}
      {/* <Controlled/> */}
      {/* <Uncontrolled/> */}
      {/* <Disabled/> */}
      {/* <Invalid/> */}
      {/* <CustomColor/> */}
      {/* <CustomIcon/> */}
      {/* <SizeCheckbox/> */}
      {/* <CheckboxGroup/> */}
      {/* <FormControlled/> */}
      {/* <CheckboxWithRef/> */}

      {/* <BasicFormControl/> */}
      {/* <FormCustomStyle/> */}
      <ControlPassword/>
    </Center>
  </NativeBaseProvider>;
}