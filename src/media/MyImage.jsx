import { Center, Image, Heading, ScrollView, VStack } from "native-base";
import { useRef, useEffect } from "react";

export function BasicImage() {
  return <Center>
    <Image 
      source={{
        uri: "https://wallpaperaccess.com/full/317501.jpg"
      }} 
      alt="Alternate Text" 
      size="xl" 
    />
  </Center>;
}

export function ImageSizes() {
  return <>
    <Heading mb="10" textAlign="center" mt="3">
      Image Sizes
    </Heading>
    
    <ScrollView>
      <VStack 
        space={2} justifyContent="center" 
        alignItems="center" safeAreaTop mb={6}
      >
        {[ "xs", "sm", "md", "lg", "xl", "2xl" ].map(size => 
          <Image 
            key={size} size={size} resizeMode="cover" 
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg"
            }} 
            alt={"Alternate Text " + size} 
          />
        )}
      </VStack>
    </ScrollView>
  </>;
}

export function BorderRadiusImage() {
  return <Center>
    <Image 
      size={150} borderRadius={100} 
      source={{
        uri: "https://wallpaperaccess.com/full/317501.jpg"
      }} 
      alt="Alternate Text" 
    />
  </Center>;
}

export function FallbackImage() {
  return <Center>
    <Image 
      size={150} alt="fallback text" borderRadius={100} 
      source={{
        uri: "https://-page-icon.png"
      }} 
      fallbackSource={{
        uri: "https://www.w3schools.com/css/img_lights.jpg"
      }} 
    />
  </Center>;
}

export function ImageWithRef() {
  const myRef = useRef(null);

  useEffect(() => {
    if (myRef.current && myRef.current.setNativeProps) {
      const styleObj = {
        borderWidth: 4,
        borderRadius: 4,
        borderColor: "#22D3EE"
      };
      myRef.current.setNativeProps({
        style: styleObj
      });
    }
  }, [ myRef ]);

  return <Center>
    <Image 
      ref={myRef} source={{
        uri: "https://wallpaperaccess.com/full/317501.jpg"
      }} alt="Alternate Text" size="xl" 
    />
  </Center>;
}