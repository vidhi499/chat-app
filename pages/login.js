import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from "native-base";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import UserMenu from "./components/Dropdown";

const Login = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const signIn = async () => {
    const { user, error } = await supabase.auth.signIn({
      email: "katariavidhi99@gmail.com",
      password: "1234567890",
    });
    console.log(user, error);
  };

  return (
    <>
      <UserMenu />
      <Center h="70vh">
        <Box safeArea p="2" py="8" w="90%" maxW="350">
          <Heading
            size="xl"
            fontWeight="600"
            color="warmGray.50"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.200"
            fontWeight="medium"
            size="xs"
          >
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label
                _text={{
                  color: "warmGray.200",
                }}
              >
                Email ID
              </FormControl.Label>
              <Input
                _hover={{ bg: "coolGray.800" }}
                // _text={{
                color="warmGray.200"
                // }}
                placeholderTextColor="warmGray.200"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{
                  color: "warmGray.200",
                }}
              >
                Password
              </FormControl.Label>
              <Input
                type="password"
                color="warmGray.200"
                _hover={{ bg: "coolGray.800" }}
                placeholderTextColor="warmGray.200"
              />
              <Link
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "indigo.500",
                }}
                alignSelf="flex-end"
                mt="1"
              >
                Forget Password?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={signIn}>
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                New user?{" "}
              </Text>
              <Link
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                href="#"
              >
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </>
  );
};
export default Login;
