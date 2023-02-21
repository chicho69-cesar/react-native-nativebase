import { NativeBaseProvider, Center } from "native-base";
import { BasicButton, ButtonVariants, IconButtons, LoadingButtons, SizesButton } from "./MyButton";
import { AcceptTerms, BasicCheckbox, CheckboxGroup, CheckboxWithRef, Controlled, CustomColor, CustomIcon, Disabled, FormControlled, Invalid, SizeCheckbox, Uncontrolled } from "./MyCheckbox";
import { BasicFormControl, ControlPassword, FormCustomStyle } from "./MyFormControl";
import { BasicIconButton, SizesIconButton, VariantsIconButton } from "./MyIconButton";
import { ControlledInput, FormControlledInput, InputAdons, InputElements, InputExample, InputSizes, InputVariants, PasswordInput } from "./MyInput";
import { ExternalLink, LinkAroundContainers, LinkCustomOnPress, LinkExample, LinkUnderline } from "./MyLink";
import { AccesingEvents, BasicPressable } from "./MyPressable";
import { CustomColorRadio, CustomIconRadio, DisabledRadio, FormControlledRadio, InvalidRadio, RadioExample, RadioWithRef, UncontrolledRadio } from "./MyRadio";

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
      {/* <ControlPassword/> */}
      
      {/* <BasicIconButton/> */}
      {/* <SizesIconButton/> */}
      {/* <VariantsIconButton/> */}
      
      {/* <InputExample/> */}
      {/* <InputSizes/> */}
      {/* <InputVariants/> */}
      {/* <InputAdons/> */}
      {/* <InputElements/> */}
      {/* <PasswordInput/> */}
      {/* <ControlledInput/> */}
      {/* <FormControlledInput/> */}

      {/* <LinkExample/> */}
      {/* <ExternalLink/> */}
      {/* <LinkUnderline/> */}
      {/* <LinkCustomOnPress/> */}
      {/* <LinkAroundContainers/> */}

      {/* <RadioExample/> */}
      {/* <UncontrolledRadio/> */}
      {/* <DisabledRadio/> */}
      {/* <InvalidRadio/> */}
      {/* <CustomColorRadio/> */}
      {/* <CustomIconRadio/> */}
      {/* <FormControlledRadio/> */}
      <RadioWithRef/>
    </Center>
  </NativeBaseProvider>;
}