import React from "react";
import IconLink from "./IconLink";

const ProfileCard = ({ profile }) => {
  const { name, username, title, url, icon } = profile;

  return (
    <div className="bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-64 self-center m-4">
      <div className="mx-auto rounded-full py-2 w-16">
        <img
          src={`${process.env.PUBLIC_URL}/assets/avatar.svg`}
          alt="profile"
        />
      </div>
      <div className="text-gray-800 text-2xl font-medium mt-4">
        <p>{name}</p>
      </div>
      <div className="text-gray-500">
        <p>{username}</p>
      </div>
      <div className="text-gray-700 mt-4">
        <p>{title}</p>
      </div>
      <div className="flex w-full mt-8 justify-center">
        <IconLink url={url} icon={icon} />
      </div>
    </div>
  );
};

export default ProfileCard;
