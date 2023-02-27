import { ScrollView, VStack, Center, useTheme, Heading } from "native-base";

export function MyScrollView() {
  const {
    colors
  } = useTheme();

  const TitleScroll = ({ title }) => {
    return <Center mt="6" mb="4">
      <Heading fontSize="xl">{title}</Heading>
    </Center>;
  }

  const ColorsScroll = ({ color }) => {
    return <VStack flex="1">
      {Object.keys(colors.red).map((key, index) => {
        if (index >= 1 && index <= 5) {
          return <Center 
            py="4" key={`${ color }.${ key }`}
            bg={`${ color }.${ key }`}
          >
            {key}
          </Center>;
        }
      })}
    </VStack>;
  }

  return <ScrollView w={[ "200", "300" ]} h="96">
    <TitleScroll title='Cyan'/>
    <ColorsScroll color='cyan'/>

    <TitleScroll title='Yellow'/>
    <ColorsScroll color='yellow'/>

    <TitleScroll title='Violet'/>
    <ColorsScroll color='violet'/>
  </ScrollView>;
}