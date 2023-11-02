import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
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
  InputRightElement,
  InputGroup,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

type RegisterProps = {};

const Register: React.FC<RegisterProps> = () => {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => setShowPassword(!showPassword);
  const handleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const { name, email, password, confirmPassword } = inputs;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const body = { name, email, password };
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      // const data = await res.json();
      setInputs({ ...inputs, name: "", email: "", password: "" });
      setLoading(false);
    } catch (error) {
      console.error((error as Error).message);
      setLoading(false);
    }
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <form onSubmit={onSubmit}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Register your account</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={10}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => onChange(e)}
                />
              </FormControl>
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

              <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => onChange(e)}
                  />
                  <InputRightElement>
                    <IconButton
                      variant={"ghost"}
                      aria-label="password"
                      icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                      size="sm"
                      onClick={handleConfirmPassword}
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
                  Register
                </Button>
                <Button colorScheme="blue" as={Link} to={"/"} variant={"ghost"}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </form>
    </Flex>
  );
};
export default Register;
