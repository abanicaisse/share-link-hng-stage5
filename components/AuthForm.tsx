import Link from "next/link";
import { Button } from "./ui/button";

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
            <form action="#" className="flex flex-col flex-1 gap-6">
              {inputFields.map((inputField) => (
                <div key={inputField.inputId}>
                  <label
                    htmlFor={inputField.inputType}
                    className="text-b-s text-dark-gray mb-1"
                  >
                    {inputField.inputLabel}
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    name={inputField.inputId}
                    id={inputField.inputId}
                    placeholder={inputField.inputPlaceholder}
                    required
                    className="w-full rounded-lg py-3 px-4 border-solid border-[1px] border-gray-light"
                  />
                </div>
              ))}
              <Button className="bg-purple text-white pointer-events-auto cursor-pointert px-[0.69rem] py-[1.69rem] hover:bg-purple-light hover:font-bold disabled:bg-purple opacity-25 disabled:font-bold focus:bg-purple-light focus:font-bold">
                {buttonLabel}
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
