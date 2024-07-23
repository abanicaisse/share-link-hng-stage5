import { Button } from "@components/ui/button";
import Image from "next/image";
import UploadPic from "@components/UploadPic";

const inputFields: {
  inputId: string;
  inputType: string;
  inputLabel: string;
  inputPlaceholder: string;
  required: boolean;
}[] = [
  {
    inputId: "first-name",
    inputType: "text",
    inputLabel: "First name*",
    inputPlaceholder: "Ben",
    required: true,
  },
  {
    inputId: "last-name",
    inputType: "text",
    inputLabel: "Last name",
    inputPlaceholder: "Wright",
    required: true,
  },
  {
    inputId: "email",
    inputType: "email",
    inputLabel: "Email",
    inputPlaceholder: "ben@example.com",
    required: false,
  },
];

const Profile = () => {
  const userLinks: string[] = ["1"];

  return (
    <section className="w-full max-w-[90rem] m-auto flex lg:flex-row p-4 gap-6 bg-gray-lightest md:justify-center">
      <div className="desktop-preview bg-white hidden lg:flex justify-center align-center flex-[0.4] rounded-[.75rem]">
        <Image
          src="../iphone-mockup.svg"
          width={307}
          height={631}
          alt="preview"
        />
      </div>
      <div className="bg-white w-full md:max-w-[45rem] lg:max-w-[100%] md:auto flex flex-col lg:flex-[.6] rounded-[.75rem]">
        <div className="customize-links w-full flex flex-col gap-6 p-6 rounded-[.5rem] border-[1px] border-gray-lightest">
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-dark-gray text-h-md font-extrabold mb-2">
                Profile Details
              </h1>
              <p className="text-gray text-h-normal font-not-bold">
                Add/edit/remove links below and then share all your profiles
                with the world!
              </p>
            </div>
          </div>
          <div className=" bg-gray-lightest rounded-[.75rem] p-[1.25rem]">
            <UploadPic />
          </div>
          <div className="profileForm bg-gray-lightest rounded-[.75rem] p-[1.25rem]">
            <form action="#" className="flex flex-col flex-1 gap-6">
              {inputFields.map((inputField) => (
                <div
                  key={inputField.inputId}
                  className="md:flex md:justify-between"
                >
                  <label
                    htmlFor={inputField.inputId}
                    className="md:flex-[.4] text-b-s text-dark-gray mb-1"
                  >
                    {inputField.inputLabel}
                  </label>{" "}
                  <br />
                  <input
                    type={inputField.inputType}
                    name={inputField.inputId}
                    id={inputField.inputId}
                    placeholder={inputField.inputPlaceholder}
                    required
                    className="flex-[.6] w-full rounded-lg py-3 px-4 border-solid border-[1px] border-gray-light"
                  />
                </div>
              ))}
            </form>
          </div>
        </div>
        <div className="w-full mt-6 mb-4 border-[0.0625rem] border-solid border-gray-light" />
        <Button
          className="w-full md:w-fit md:px-[1.69rem] md:py-[0.69rem] md:self-end text-right bg-purple text-white pointer-events-auto cursor-pointert px-[0.69rem] py-[1.69rem] hover:bg-purple-light hover:font-bold disabled:bg-purple disabled:opacity-25 disabled:font-bold focus:bg-purple-light focus:font-bold"
          disabled
        >
          Save
        </Button>
      </div>
    </section>
  );
};

export default Profile;
