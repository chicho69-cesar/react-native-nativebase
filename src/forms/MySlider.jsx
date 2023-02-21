import { Box, Slider, VStack, Stack, Text, FormControl, Icon, WarningOutlineIcon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export function BasicSlider() {
  return <Box alignItems="center" w="100%">
    <Slider 
      w="3/4" maxW="300" defaultValue={70} 
      minValue={0} maxValue={100} 
      accessibilityLabel="hello world" step={10}
    >
      <Slider.Track>
        <Slider.FilledTrack />
      </Slider.Track>

      <Slider.Thumb />
    </Slider>
  </Box>;
}

export function ColorSlider() {
  return <Box alignItems="center" w="100%">
    <VStack w="3/4" maxW="300" space={4}>
      <Slider defaultValue={70} colorScheme="orange">
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>

      <Slider defaultValue={70} colorScheme="emerald">
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>

      <Slider defaultValue={70} colorScheme="indigo">
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </VStack>
  </Box>;
}

export function ValueSlider() {
  const [ onChangeValue, setOnChangeValue ] = useState(70);
  const [ onChangeEndValue, setOnChangeEndValue ] = useState(70);

  return <Box alignItems="center" w="100%">
    <Stack space={4} alignItems="center" w="75%" maxW="300">
      <Text textAlign="center">onChangeValue - {onChangeValue}</Text>
      <Text textAlign="center">onChangeEndValue - {onChangeEndValue}</Text>
      
      <Slider 
        defaultValue={70} colorScheme="cyan" 
        onChange={v => {
          setOnChangeValue(Math.floor(v));
        }} 
        onChangeEnd={v => {
          v && setOnChangeEndValue(Math.floor(v));
        }}
      >
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </Stack>
  </Box>;
}

export function SizeSlider() {
  return <Box alignItems="center" w="100%">
    <VStack space={4} w="75%" maxW="300">
      <Slider defaultValue={40} size="sm">
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>

      <Slider defaultValue={60} size="md">
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>

      <Slider defaultValue={80} size="lg">
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </VStack>
  </Box>;
}

export function CustomisedSlider() {
  return <Box alignItems="center" w="100%">
    <Slider defaultValue={70} size="sm" colorScheme="green" w="75%" maxW="300">
      <Slider.Track bg="green.100">
        <Slider.FilledTrack bg="green.600" />
      </Slider.Track>

      <Slider.Thumb borderWidth="0" bg="transparent">
        <Icon as={MaterialIcons} name="park" color="green.600" size="sm" />
      </Slider.Thumb>
    </Slider>
  </Box>;
}

export function FormControlledSlider() {
  return <Box alignItems="center" w="100%">
    <VStack space={4} w="75%" maxW="300">
      <FormControl isInvalid>
        <FormControl.Label>Set your budget</FormControl.Label>
        
        <Slider defaultValue={50}>
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>

        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Something is wrong.
        </FormControl.ErrorMessage>
      </FormControl>
    </VStack>
  </Box>;
}