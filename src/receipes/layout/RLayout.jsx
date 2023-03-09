import { View } from "native-base";
import { AppDrawer } from "./AppDrawer";
import { Footer } from "./Footer";

export default function RLayout() {
  return <View w='100%'>
    {/* <AppDrawer/> */}
    <Footer/>
  </View>;
}