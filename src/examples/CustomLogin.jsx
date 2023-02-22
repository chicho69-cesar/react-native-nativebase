import { Input, Icon, Stack, Pressable, Button, FormControl, WarningOutlineIcon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function Login() {
  const [ formData, setFormData ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ show, setShow ] = useState(false);

  const validate = () => {
    if (!formData.nickname) {
      setErrors({
        ...errors,
        nickname: 'Nickname is required'
      });
      return false;
    } else if (formData.nickname.length < 5) {
      setErrors({
        ...errors,
        nickname: 'Nickname is too short'
      });
      return false;
    }

    setErrors({});
    return true;
  }

  const submit = () => {
    validate()
      ? console.log('OK')
      : console.log('Bad');
    console.log(errors);
    console.log(formData);
  }

  return <Stack 
    space={4} w="100%" flex={1} 
    alignItems="center" justifyContent='center'
  >
    <FormControl 
      w="100%" alignItems="center"
      isRequired isInvalid={'nickname' in errors}
    >
      <FormControl.Label w='75%'>
        Nickname...
      </FormControl.Label>
      <Input 
        w={{ base: "75%", md: "25%" }} 
        color='gray.800' fontSize='lg'
        InputLeftElement={
          <Icon 
            as={<MaterialIcons name="person" />} 
            size={5} ml="2" color="muted.400" 
          />
        } 
        placeholder="Name"
        onChangeText={(text) => {
          console.log({ text });
          setFormData({
            ...formData,
            nickname: text
          });
        }} 
      />
      {
        'nickname' in errors 
          ? <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              {errors.nickname}
            </FormControl.ErrorMessage>
          : <></>
      }
    </FormControl>

    <FormControl 
      w="100%" alignItems="center"
      isRequired isInvalid={'password' in errors}
    >
      <FormControl.Label w='75%'>
        Password...
      </FormControl.Label>
      <Input 
        w={{ base: "75%", md: "25%" }} 
        type={show ? "text" : "password"} 
        color='gray.800' fontSize='lg'
        InputRightElement={
          <Pressable onPress={() => setShow(!show)}>
            <Icon 
              as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} 
              size={5} mr="2" color="muted.400" 
            />
          </Pressable>
        } 
        placeholder="Password" 
        onChangeText={(text) => {
          setFormData({
            ...formData,
            password: text
          });
        }} 
      />
      {
        'password' in errors 
          ? <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              {errors.password}
            </FormControl.ErrorMessage>
          : <></>
      }
    </FormControl>

    <Button 
      size="lg" variant="subtle" py='4' px='8' shadow={1}
      onPress={() => submit()}
    >
      Login
    </Button>
  </Stack>;
}