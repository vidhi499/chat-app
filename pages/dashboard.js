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
import useAuthCheck from "./libs/useAuthCheck";
import { supabase } from "../utils/supabaseClient";
import UserMenu from "./components/Dropdown";
import NextLink from "next/link";
import useSessionCheck from "./libs/useSessionCheck";

const Login = () => {
  const { session } = useSessionCheck();

  return (
    <>
      <UserMenu />
      {session ? "Logged In" : "Not Logged In"}
      {!session && (
        <>
          <NextLink href="/login" passHref>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
            >
              Sign In
            </Link>
          </NextLink>
        </>
      )}
    </>
  );
};
export default Login;
