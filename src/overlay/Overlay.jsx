import { NativeBaseProvider, Center } from "native-base";
import { BasicAlertDialog } from "./MyAlertDialog";
import { BasicMenu, GroupMenu, MenuOptionGroup, MenuPlacement } from "./MyMenu";

export default MyOverlay = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      {/* <BasicAlertDialog/> */}

      {/* <BasicMenu/> */}
      {/* <GroupMenu/> */}
      {/* <MenuOptionGroup/> */}
      <MenuPlacement/>
    </Center>
  </NativeBaseProvider>;
}