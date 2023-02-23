import { NativeBaseProvider, Center } from "native-base";
import { BasicAlertDialog } from "./MyAlertDialog";
import { BasicMenu, GroupMenu, MenuOptionGroup, MenuPlacement } from "./MyMenu";
import { AvoidKeyBoardModal, BasicModal, CustomBackdropModal, FocusRefModal, ModalPlacement, ModalSizes, MultipleModals } from "./MyModal";
import { BasicPopover, PopoverFocusRef, PositionsPopover } from "./MyPopover";
import { BasicTooltip, CustomisingTooltip, PositionsTooltip } from "./MyTooltip";

export default MyOverlay = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      {/* <BasicAlertDialog/> */}

      {/* <BasicMenu/> */}
      {/* <GroupMenu/> */}
      {/* <MenuOptionGroup/> */}
      {/* <MenuPlacement/> */}

      {/* <BasicModal/> */}
      {/* <MultipleModals/> */}
      {/* <ModalSizes/> */}
      {/* <FocusRefModal/> */}
      {/* <AvoidKeyBoardModal/> */}
      {/* <ModalPlacement/> */}
      {/* <CustomBackdropModal/> */}

      {/* <BasicPopover/> */}
      {/* <PopoverFocusRef/> */}
      {/* <PositionsPopover/> */}

      {/* <BasicTooltip/> */}
      {/* <PositionsTooltip/> */}
      <CustomisingTooltip/>
    </Center>
  </NativeBaseProvider>;
}