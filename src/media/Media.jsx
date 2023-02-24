import { NativeBaseProvider, Center } from "native-base";
import { AvatarBadge, AvatarGroup, BasicAvatar, FallbacksAvatar, SizesAvatar } from "./MyAvatar";

export default Media = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      {/* <BasicAvatar/> */}
      {/* <SizesAvatar/> */}
      {/* <FallbacksAvatar/> */}
      {/* <AvatarBadge/> */}
      <AvatarGroup/>
    </Center>
  </NativeBaseProvider>;
}