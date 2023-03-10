import { NativeBaseProvider, Center } from "native-base";
import { CMUseColorMode, LightAndDarkPseudoProps } from "./ColorMode";
import { BasicFactory, DefiningComponentTheme, UsingMode, UsingRefFactory } from "./NBFactory";
import { ColorAndBackground, InteractionProps, InternalProps, LayoutWidthAndHeight, MarginAndPadding, UPBorders, UPBordersRadius, UPFlexbox, UPPosition, UPShadow, UPText, UPTypography } from "./UtilityProps";

export default Features = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      {/* <MarginAndPadding/> */}
      {/* <ColorAndBackground/> */}
      {/* <UPTypography/> */}
      {/* <UPText/> */}
      {/* <LayoutWidthAndHeight/> */}
      {/* <UPFlexbox/> */}
      {/* <UPBorders/> */}
      {/* <UPBordersRadius/> */}
      {/* <UPPosition/> */}
      {/* <UPShadow/> */}
      {/* <InternalProps/> */}
      {/* <InteractionProps/> */}

      {/* <CMUseColorMode/> */}
      {/* <LightAndDarkPseudoProps/> */}

      {/* <BasicFactory/> */}
      {/* <DefiningComponentTheme/> */}
      {/* <UsingMode/> */}
      <UsingRefFactory/>
    </Center>
  </NativeBaseProvider>;
}