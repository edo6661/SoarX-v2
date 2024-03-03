import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { AnimatePresence, motion } from "framer-motion";
import { Control, FieldError } from "react-hook-form";
import { EventSchema } from "@/schema/event";
import { BlogSchema } from "@/schema/blog";
interface CustomInputProps {
  // control: Control<EventSchema | BlogSchema, any>;
  control: any;

  label: string;
  placeholder: string;
  description?: string;
  name: string;
  error: FieldError | undefined;
}

// ! sign in https://soar-x-v2.vercel.app/ first, and the sign in local

const CustomInput = ({
  control,
  label,
  placeholder,
  description,
  name,
  error,
}: CustomInputProps) => {
  const vars = {
    initial: { opacity: 0, y: -5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 },
  };
  const useVars = {
    initial: "initial",
    animate: "animate",
    exit: "exit",
  };
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <AnimatePresence>
            {error && (
              <motion.div
                variants={vars}
                {...useVars}
                transition={{ type: "spring" }}
              >
                <FormMessage />
              </motion.div>
            )}
          </AnimatePresence>
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
