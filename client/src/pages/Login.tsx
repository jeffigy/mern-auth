import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SimpleCard() {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => setShowPassword(!showPassword);

  const { email, password } = inputs;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <form onSubmit={onSubmit}>
        {" "}
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={10}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => onChange(e)}
                  />
                  <InputRightElement>
                    <IconButton
                      variant={"ghost"}
                      aria-label="password"
                      icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                      size="sm"
                      onClick={handlePassword}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Stack spacing={2}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                  isLoading={loading}
                >
                  Log in
                </Button>
                <Button
                  colorScheme="blue"
                  as={Link}
                  to={"/register"}
                  variant={"ghost"}
                >
                  Register
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </form>
    </Flex>
  );
}
