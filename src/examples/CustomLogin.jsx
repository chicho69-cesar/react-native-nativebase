import { Input, Icon, Stack, Text, Select, Slide, Alert, Pressable, Button, FormControl, WarningOutlineIcon, CheckIcon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useRecoilState } from "recoil";
import { formDataState, errorsState, showState, serviceState, isOpenTopState } from "./login-state";
import validateFields from "./validations";

export default function Login() {
  const [ formData, setFormData ] = useRecoilState(formDataState);
  const [ _, setErrors ] = useRecoilState(errorsState);
  const [ show, setShow ] = useRecoilState(showState);
  const [ __, setService ] = useRecoilState(serviceState);
  let [ ___, setIsOpenTop ] = useRecoilState(isOpenTopState);

  const onNicknameChange = text => {
    setFormData({
      ...formData,
      nickname: text
    });
  }

  const onPasswordChange = text => {
    setFormData({
      ...formData,
      password: text
    });
  }

  const onSelectChange = itemValue => {
    setService(itemValue);
    setFormData({
      ...formData,
      service: itemValue
    });
  }

  const validate = () => {
    const validations = validateFields(formData.nickname, formData.password, formData.service);

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
    <Notification/>

    <FormElement label='Nickname ...' to='nickname'>
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
        onChangeText={onNicknameChange} 
      />

      <Validation to='nickname'/>
    </FormElement>

    <FormElement label='Password ...' to='password'>
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
        onChangeText={onPasswordChange} 
      />

      <Validation to='password'/>
    </FormElement>

    <FormElement label='Service ...' to='service'>
      <Select
        w={{ base: "75%", md: "25%" }} fontSize='lg' color='gray.800'
        accessibilityLabel="Choose Service" placeholder="Choose Service"
        _selectedItem={{ bg: "teal.600", endIcon: <CheckIcon size={5}/> }}
        mt='1' onValueChange={onSelectChange}
      >
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
        <Select.Item label="Frontend Development" value="frontend" />
      </Select>

      <Validation to='service'/>
    </FormElement>

    <Button 
      size="lg" variant="subtle" py='4' px='8' shadow={1}
      onPress={() => submit()}
    >
      Login
    </Button>
  </Stack>;
}

function FormElement({ children, label, to }) {
  const [ errors ] = useRecoilState(errorsState);

  return <FormControl 
    w="100%" alignItems="center"
    isRequired isInvalid={to in errors}
  >
    <FormControl.Label w='75%'>
      {label}
    </FormControl.Label>

    {children}
  </FormControl>;
}

function Validation({ to }) {
  const [ errors ] = useRecoilState(errorsState);

  return `${ to }` in errors 
    ? <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {errors[`${ to }`]}
      </FormControl.ErrorMessage>
    : <></>;
}

function Notification() {
  let [ isOpenTop ] = useRecoilState(isOpenTopState);

  return <Slide in={isOpenTop} placement="top">
    <Alert justifyContent="center" status="success" safeAreaTop={8}>
      <Alert.Icon />

      <Text color="emerald.600" fontWeight="medium">
        Login Success...
      </Text>
    </Alert>
  </Slide>;
}