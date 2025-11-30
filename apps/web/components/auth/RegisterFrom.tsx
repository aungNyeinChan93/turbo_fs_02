"use client";

import { useForm } from "react-hook-form";
import {
  RegisterSchema,
  RegisterType,
} from "../../lib/zod-schema/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "../../lib/auth-client";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<RegisterType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(RegisterSchema),
  });

  const registerSubmit = async (data: RegisterType) => {
    console.log({ data });
    try {
      await authClient.signUp.email(
        {
          name: data.name,
          email: data.email,
          password: data.password,
          // callbackURL: "/",
        },
        {
          onSuccess: () => {
            alert(
              "Register success! Please check your email to verify your account."
            );
          },
        }
      );
    } catch (error) {
      console.error(error instanceof Error ? error.message : "Unknown error");
    }
  };

  if (isLoading) return <>Loading ... </>;
  return (
    <div className="w-full max-w-lg rounded-2xl bg-slate-100 p-6 shadow">
      <h1 className="mb-4 text-2xl font-bold text-center">Register Form</h1>

      {/* Email + Password */}
      <form className="space-y-4" onSubmit={handleSubmit(registerSubmit)}>
        <input
          {...register("name")}
          type="text"
          placeholder="Name"
          className="w-full rounded-lg border p-2"
        />
        {errors?.name && <p className="text-red-600">{errors?.name.message}</p>}
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border p-2"
        />
        {errors?.email && (
          <p className="text-red-600">{errors?.email.message}</p>
        )}
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full rounded-lg border p-2"
        />
        {errors?.password && (
          <p className="text-red-600">{errors?.password.message}</p>
        )}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>

      <div className="my-4 text-center text-gray-500">OR</div>

      {/* Social logins */}
      <button
        //   onClick={() => signIn("github", { callbackUrl: "/" })}
        className="mb-2 w-full rounded-lg bg-gray-800 p-2 text-white hover:bg-gray-900"
      >
        Continue with GitHub
      </button>
      <button
        //   onClick={() => signIn("google", { callbackUrl: "/" })}
        className="w-full rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
      >
        Continue with Google
      </button>
    </div>
  );
}
