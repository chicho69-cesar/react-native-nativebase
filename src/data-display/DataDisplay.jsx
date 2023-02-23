import { NativeBaseProvider, Center } from "native-base";
import { BadgeExample, ColorSchemaBadge, CompositionBadge, VariantBadges } from "./MyBadge";
import { CompositionDivider, DividerBasic, DividerExample, DividerOrientation } from "./MyDivider";

export default DataDisplya = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      {/* <BadgeExample/> */}
      {/* <ColorSchemaBadge/> */}
      {/* <VariantBadges/> */}
      {/* <CompositionBadge/> */}

      {/* <DividerExample/> */}
      {/* <DividerBasic/> */}
      {/* <DividerOrientation/> */}
      <CompositionDivider/>
    </Center>
  </NativeBaseProvider>;
}