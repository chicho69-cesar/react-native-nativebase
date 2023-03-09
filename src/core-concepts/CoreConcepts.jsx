import { Center, NativeBaseProvider } from 'native-base';
import { NestingPseudoProps, UnderstandingIcons } from './Does';
import { FocusProps, HoverProps, PlatformSpecificStyling, PressedProps } from './PseudoProps';
import { ArraySintax, DemoResponsive, ObjectSintax } from './Responsive';
import { UtilityFirstNB, /* UtilityFirstRN */ } from './UtilityFirst';

export default CoreConcepts = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        {/* <UtilityFirstRN/> */}
        {/* <UtilityFirstNB/> */}

        {/* <HoverProps/> */}
        {/* <PressedProps/> */}
        {/* <FocusProps/> */}
        {/* <PlatformSpecificStyling/> */}

        {/* <NestingPseudoProps/> */}
        {/* <UnderstandingIcons/> */}

        {/* <ArraySintax/> */}
        {/* <ObjectSintax/> */}
        <DemoResponsive/>
      </Center>
    </NativeBaseProvider>
  );
};
