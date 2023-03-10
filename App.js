import { RecoilRoot } from "recoil";
import CoreConcepts from "./src/core-concepts/CoreConcepts";
import DataDisplay from "./src/data-display/DataDisplay";
import Disclosure from "./src/disclosure/Disclosure";
import Examples from "./src/examples/Examples";
import Features from "./src/features/Features";
import Feedback from "./src/feedback/Feedback";
import Forms from "./src/forms/Forms";
import Hooks from "./src/hooks/Hooks";
import Layout from "./src/layout/Layout";
import Media from "./src/media/Media";
import Others from "./src/others/Others";
import MyOverlay from "./src/overlay/Overlay";
import Receipes from "./src/receipes/Receipes";
import RNComponents from "./src/rn-components/RNComponents";
import Theme from "./src/theme/Theme";
import Transition from "./src/transition/Transition";
import Typography from "./src/typography/Typography";

export default () => {
  return <RecoilRoot>
    {/* <CoreConcepts/> */}
    {/* <Features/> */}
    <Theme/>
    {/* <Layout/> */}
    {/* <Forms/> */}
    {/* <Typography/> */}
    {/* <Examples/> */}
    {/* <DataDisplay/> */}
    {/* <Feedback/> */}
    {/* <MyOverlay/> */}
    {/* <Disclosure/> */}
    {/* <Media/> */}
    {/* <Transition/> */}
    {/* <Others/> */}
    {/* <RNComponents/> */}
    {/* <Hooks/> */}
    {/* <Receipes/> */}
  </RecoilRoot>;
};
