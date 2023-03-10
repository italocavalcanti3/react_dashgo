import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Italo Cavalcanti</Text>
        <Text color="gray.300" fontSize="small">
          italobc93@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Italo Cavalcanti" src="https://github.com/italocavalcanti3.png" />
    </Flex>
  );
}