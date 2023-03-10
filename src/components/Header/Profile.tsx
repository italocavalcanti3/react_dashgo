import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Italo Cavalcanti</Text>
          <Text color="gray.300" fontSize="small">
            italobc93@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Italo Cavalcanti" src="https://github.com/italocavalcanti3.png" />
    </Flex>
  );
}