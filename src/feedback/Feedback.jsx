import { NativeBaseProvider, Center } from "native-base";
import { ActionAlert, AlertExample, BasicAlert, CompositionAlert, StatusAlert, VariantAlert } from "./MyAlert";
import { BasicProgress, CustomTrackColor, FlatProgress, ProgressColorSchema, SizesProgress } from "./MyProgress";
import { BasicSkeleton, ColorSkeleton, CompositionSkeleton, SkeletonExample, SkeletonIsLoaded } from "./MySkeleton";
import { BasicSpinner, ColorsSpinner, SizesSpinner } from "./MySpinner";
import { BasicToast, ClosingToast, CustomComponentToast, PositionToast, PrevetingDuplicateToast, StatusAndVariantReceipes } from "./MyToast";

export default DataDisplya = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      {/* <AlertExample/> */}
      {/* <BasicAlert/> */}
      {/* <StatusAlert/> */}
      {/* <VariantAlert/> */}
      {/* <CompositionAlert/> */}
      {/* <ActionAlert/> */}

      {/* <BasicProgress/> */}
      {/* <ProgressColorSchema/> */}
      {/* <SizesProgress/> */}
      {/* <FlatProgress/> */}
      {/* <CustomTrackColor/> */}

      {/* <SkeletonExample/> */}
      {/* <BasicSkeleton/> */}
      {/* <ColorSkeleton/> */}
      {/* <CompositionSkeleton/> */}
      {/* <SkeletonIsLoaded/> */}

      {/* <BasicSpinner/> */}
      {/* <ColorsSpinner/> */}
      {/* <SizesSpinner/> */}

      {/* <BasicToast/> */}
      {/* <PositionToast/> */}
      {/* <CustomComponentToast/> */}
      {/* <ClosingToast/> */}
      {/* <StatusAndVariantReceipes/> */}
      <PrevetingDuplicateToast/>
    </Center>
  </NativeBaseProvider>;
}