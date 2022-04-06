import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Raphael Lima</Text>
        <Text color="gray.300" fontSize="small">phaelslima@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Raphael Lima" src="https://github.com/phaelslima.png" />
    </Flex>
  )
}