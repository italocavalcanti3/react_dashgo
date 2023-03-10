import React from "react";
import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps> (({label, error = null, ...rest}, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      { !!label && <FormLabel htmlFor={rest.name}>{label}</FormLabel>}

      <ChakraInput
        id={rest.name}
        focusBorderColor='pink.500'
        bg="gray.900"
        variant="filled"
        _hover={{
          bg: 'gray.900'
        }}
        size="lg"
        ref={ref}
        {...rest}
      />
      { !!error && <FormErrorMessage>{error.message}</FormErrorMessage> }
    </FormControl>
  );
})