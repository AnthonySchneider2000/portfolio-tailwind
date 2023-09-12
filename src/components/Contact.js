import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";

const Container = ({ children }) => {
  return (
    <div className="w-full p-4 bg-cyan-700 consistentRounding flex flex-col justify-center items-center gap-4 pb-4 text-center">
      {children}
    </div>
  );
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here (e.g., send data to a server)
    console.log(data);
  };

  return (
    <div className="text-white">
      <div className="text-4xl ml-4 font-bold">Contact</div>
      <Container>
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("name", { required: "Name is required" })}
            label="Name"
            variant="outlined"
            fullWidth
            color="white"
          />
          {errors.name && <span>{errors.name.message}</span>}

          <TextField
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            label="Email"
            variant="outlined"
            fullWidth
            color="white"
          />
          {errors.email && <span>{errors.email.message}</span>}

          <TextField
            {...register("message", { required: "Message is required" })}
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            color="white"
          />
          {errors.message && <span>{errors.message.message}</span>}

          <Button type="submit" variant="contained" color="cyan"
            sx={{width: "8rem", alignSelf: "center", fontWeight: "bold"}}
          >
            Send
          </Button>
        </form>
      </Container>
    </div>
  );
}
