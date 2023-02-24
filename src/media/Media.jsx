import { NativeBaseProvider, Center } from "native-base";
import { AvatarBadge, AvatarGroup, BasicAvatar, FallbacksAvatar, SizesAvatar } from "./MyAvatar";
import { BasicIcon, CreateIcon, CustomIcon, NativeBaseIcons, ThirdPartyIcons } from "./MyIcon";
import { BasicImage, BorderRadiusImage, FallbackImage, ImageSizes, ImageWithRef } from "./MyImage";

export default Media = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      {/* <BasicAvatar/> */}
      {/* <SizesAvatar/> */}
      {/* <FallbacksAvatar/> */}
      {/* <AvatarBadge/> */}
      {/* <AvatarGroup/> */}

      {/*
      * Probar los Componentes de aqui en adelante
      */}
      {/* <BasicIcon/> */}
      {/* <NativeBaseIcons/> */}
      {/* <CustomIcon/> */}
      {/* <CreateIcon/> */}
      {/* <ThirdPartyIcons/> */}

      {/* <BasicImage/> */}
      {/* <ImageSizes/> */}
      {/* <BorderRadiusImage/> */}
      {/* <FallbackImage/> */}
      <ImageWithRef/>
    </Center>
  </NativeBaseProvider>;
}