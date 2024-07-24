"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser, registerUser } from "@lib/firebase/auth";

type AuthProps = {
  authType: string;
  authDesc: string;
  inputFields: {
    inputType: string;
    inputId: string;
    inputLabel: string;
    inputPlaceholder: string;
  }[];
  buttonLabel: string;
  authOptionPrompt: string;
  authModeText: string;
  authModeLink: string;
};

const AuthForm = ({
  authType,
  authDesc,
  inputFields,
  buttonLabel,
  authOptionPrompt,
  authModeText,
  authModeLink,
}: AuthProps) => {
  const signupSchema = z
    .object({
      email: z.string().email(),
      password: z.string().min(8),
      confirmPassword: z.string().min(8),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
      if (confirmPassword !== password) {
        ctx.addIssue({
          code: "custom",
          message: "The passwords did not match",
          path: ["confirmPassword"],
        });
      }
    });

  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  type signupInputFields = z.infer<typeof signupSchema>;
  type loginInputFields = z.infer<typeof signupSchema>;

  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = (
    authType === "Create account"
      ? useForm<signupInputFields>
      : useForm<loginInputFields>
  )({
    resolver:
      authType === "Create account"
        ? zodResolver(signupSchema)
        : zodResolver(loginSchema),
  });

  const onRegistrationSubmit: SubmitHandler<signupInputFields> = async (
    data
  ) => {
    try {
      const user = await registerUser(data.email, data.password);
      registerUser(data.email, data.password);

      if (!user) return;
      router.push("/");

      throw new Error();
    } catch (error) {
      console.log(error);
      setError("root", { message: "This email is already taken" });
    }
  };

  const onLoginSubmit: SubmitHandler<signupInputFields> = async (data) => {
    try {
      const user = await loginUser(data.email, data.password);
      loginUser(data.email, data.password);

      if (!user) return;
      router.push("/");

      console.log(user);
      throw new Error();
    } catch (error) {
      console.log(error);
      setError("root", { message: "This email is already taken" });
    }
  };

  return (
    <div className="w-full h-full p-8 grid flex-1 flex-col items-start self-stretch sm:bg-gray-lightest">
      <div className="w-full sm:max-w-[30rem] flex flex-col flex-1 gap-16 items-start sm:items-center sm:justify-center sm:m-auto">
        <img
          src="../logo.svg"
          alt="logo"
          className="w-[182.5px] h-[40px]object-contain"
        />

        <div className="w-full flex flex-col flex-1 gap-8 sm:p-10 items-start sm:bg-white sm:border-solid sm:border-[1px] sm:border-gray-lightest rounded-md">
          <div className="w-full">
            <h1 className="text-h-md font-extrabold text-dark-gray mb-2">
              {authType}
            </h1>
            <p className="text-gray text-h-normal font-not-bold">{authDesc}</p>
          </div>
          <div className="w-full flex flex-col gap-6 flex-start">
            <form
              action="#"
              className="flex flex-col flex-1 gap-6"
              onSubmit={
                authType === "Create account"
                  ? handleSubmit(onRegistrationSubmit)
                  : handleSubmit(onLoginSubmit)
              }
            >
              {inputFields.map((inputField) => (
                <div key={inputField.inputId}>
                  <label
                    htmlFor={inputField.inputId}
                    className="text-b-s text-dark-gray mb-1"
                  >
                    {inputField.inputLabel}
                  </label>{" "}
                  <br />
                  <input
                    type={inputField.inputType}
                    // name={inputField.inputId}
                    id={inputField.inputId}
                    placeholder={inputField.inputPlaceholder}
                    {...register(
                      inputField.inputId === "email"
                        ? "email"
                        : inputField.inputId === "password"
                        ? "password"
                        : "confirmPassword"
                    )}
                    className="w-full rounded-lg py-3 px-4 border-solid border-[1px] border-gray-light"
                  />
                  {inputField.inputId === "email" && errors.email && (
                    <p className="text-red">{errors.email?.message}</p>
                  )}
                  {inputField.inputId === "password" && errors.password && (
                    <p className="text-red">{errors.password?.message}</p>
                  )}
                  {inputField.inputId === "confirmPassword" &&
                    errors?.confirmPassword && (
                      <p className="text-red">
                        {errors.confirmPassword?.message}
                      </p>
                    )}
                </div>
              ))}
              {errors.root && (
                <p className="text-red">{errors.root?.message}</p>
              )}
              <Button
                className="bg-purple text-white pointer-events-auto cursor-pointert px-[0.69rem] py-[1.69rem] hover:bg-purple-light hover:font-bold disabled:bg-purple disabled:opacity-25 disabled:font-bold focus:bg-purple-light focus:font-bold"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Loading..." : buttonLabel}
              </Button>
            </form>
            <div className="w-full text-center">
              <p className="text-gray text-h-normal font-not-bold">
                {authOptionPrompt}{" "}
                <Link
                  href={authModeLink}
                  className="text-purple font-not-bold text-h-normal"
                >
                  {authModeText}
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
