import { Center, NativeBaseProvider } from 'native-base';
import { UtilityFirstNB, /* UtilityFirstRN */ } from './UtilityFirst';

export default CoreConcepts = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        {/* <UtilityFirstRN/> */}
        <UtilityFirstNB/>
      </Center>
    </NativeBaseProvider>
  );
};
