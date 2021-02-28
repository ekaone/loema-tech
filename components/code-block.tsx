import { Stack, Code } from "@chakra-ui/react";

function CodeBlock() {
  return (
    <Stack direction="row" opacity="0.5">
      <Code children="Welcome to" />
      <Code colorScheme="red" children="Loema tech" />
      <Code colorScheme="yellow" children="company" />
    </Stack>
  );
}

export default CodeBlock;
