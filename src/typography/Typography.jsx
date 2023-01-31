import { NativeBaseProvider, Center } from 'native-base';

import { 
  ChangingFontSize, 
  // Truncated,
  Nested,
  Overriden
} from './MyText';

import {
  Basic,
  Sizes,
  Truncated,
  Override,
  Composition
} from './MyHeading';

export default Typography = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        {/* <ChangingFontSize/> */}
        {/* <Truncated/> */}
        {/* <Nested/> */}
        {/* <Overriden/> */}

        {/* <Basic/> */}
        {/* <Sizes/> */}
        {/* <Truncated/> */}
        {/* <Override/> */}
        <Composition/>
      </Center>
    </NativeBaseProvider>
  );
}
