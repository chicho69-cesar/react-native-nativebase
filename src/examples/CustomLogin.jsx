import { Input, Icon, Stack, Text, Select, Slide, Alert, Pressable, Button, FormControl, WarningOutlineIcon, CheckIcon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function Login() {
  const [ formData, setFormData ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ show, setShow ] = useState(false);
  const [ service, setService ] = useState("");
  let [ isOpenTop, setIsOpenTop ] = useState(false);

  const validate = () => {
    const validations = {};

    /* ***** VALIDATIONS ***** */
    // Nickname
    if (!formData.nickname) {
      validations.nickname = 'Nickname is required';
    } else if (formData.nickname.length < 5) {
      validations.nickname = 'Nickname is too short';
    }

    // Password
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    if (!formData.password) {
      validations.password = 'Password is required';
    } else if (!regex.test(formData.password)) {
      if (formData.password.length < 8) {
        validations.password = 'The password must have at least 8 characters.';
      } else if (!/(?=.*\d)/.test(formData.password)) {
        validations.password = 'The password must have at least a number.';
      } else if (!/(?=.*[a-z])/.test(formData.password)) {
        validations.password = 'The password must have at least a minuscule letter.';
      } else if (!/(?=.*[A-Z])/.test(formData.password)) {
        validations.password = 'The password must have at least a capital letter.';
      } else if (!/(?=.*[!@#$%^&*])/.test(formData.password)) {
        validations.password = 'The password must have at least a special character.';
      } else {
        validations.password = 'The password is not valid.';
      }
    }

    // Service
    if (!formData.service) {
      validations.service = 'Service is required';
    }

    setErrors({
      ...validations
    });

    return Object.keys(validations).length === 0;
  }

  const submit = () => {
    if (validate()) {
      setIsOpenTop(true);
      console.log('OK');

      setTimeout(() => {
        setIsOpenTop(false);
      }, 2000);
    } else {
      setIsOpenTop(false);
      console.log('Bad');
    }
  }

  return <Stack 
    space={4} w="100%" flex={1} 
    alignItems="center" justifyContent='center'
  >
    <Slide in={isOpenTop} placement="top">
      <Alert justifyContent="center" status="success" safeAreaTop={8}>
        <Alert.Icon />

        <Text color="emerald.600" fontWeight="medium">
          Login Success...
        </Text>
      </Alert>
    </Slide>

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

    <FormControl 
      w="100%" alignItems="center"
      isRequired isInvalid={'service' in errors}
    >
      <FormControl.Label w='75%'>
        Service ...
      </FormControl.Label>

      <Select
        w={{ base: "75%", md: "25%" }} fontSize='lg' color='gray.800'
        accessibilityLabel="Choose Service" placeholder="Choose Service"
        _selectedItem={{ bg: "teal.600", endIcon: <CheckIcon size={5}/> }}
        mt='1' onValueChange={itemValue => {
          setService(itemValue);
          setFormData({
            ...formData,
            service: itemValue
          });
        }}
      >
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
        <Select.Item label="Frontend Development" value="backend" />
      </Select>

      {
        'service' in errors 
          ? <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              {errors.service}
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

function FormElement({ children, label }) {
  return <FormControl 
    w="100%" alignItems="center"
    isRequired isInvalid={'password' in errors}
  >
    <FormControl.Label w='75%'>
      {label}
    </FormControl.Label>

    {children}
  </FormControl>;
}