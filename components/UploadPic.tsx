import { Image as ImageIcon } from "lucide-react";

const UploadPic = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <p className="flex-[.35] text-gray text-h-normal font-not-bold">
        Profile picture
      </p>
      <div className="md:flex-[.3] w-[193px] h-[193px] flex flex-col justify-center items-center gap-2 bg-purple-lightest rounded-[0.75rem] mb-2">
        <ImageIcon width={40} height={40} className="text-purple" />
        <p className="text-purple text-h-normal font-bold">+ Upload Image</p>
      </div>
      <p className="flex-[.35] text-gray text-b-s font-not-bold">
        Image must be below 1024x1024px. Use PNG or JPG format.
      </p>
    </div>
  );
};

export default UploadPic;
