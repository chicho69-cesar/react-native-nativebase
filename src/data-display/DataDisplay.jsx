import { NativeBaseProvider, Center } from "native-base";
import { BadgeExample, ColorSchemaBadge, CompositionBadge, VariantBadges } from "./MyBadge";

export default DataDisplya = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      {/* <BadgeExample/> */}
      {/* <ColorSchemaBadge/> */}
      {/* <VariantBadges/> */}
      <CompositionBadge/>
    </Center>
  </NativeBaseProvider>;
}