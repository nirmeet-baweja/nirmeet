import React from "react";
import ProfileCard from "./ProfileCard";
import LinkedIn from "./LinkedIn";
import Github from "./Github";

const ContactInfo = () => {
  const linkedinProfile = {
    name: "Nirmeet Baweja",
    username: "@nirmeet-baweja",
    title: "Software developer 👩🏽‍💻",
    link: LinkedIn,
  };

  const githubProfile = {
    name: "Nirmeet Baweja",
    username: "@nirmeet-baweja",
    title: "Software developer 👩🏽‍💻",
    link: Github,
  };

  return (
    <div
      className="flex flex-col justify-center items-stretch bg-indigo-100/70 min-h-max p-16 mb-16 "
      id="contact"
    >
      <div className="lg:w-3/5 max-w-7xl mx-auto">
        <div className="mx-auto max-w-2xl my-12 lg:mx-0 p-4 ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Information
          </h2>
        </div>
        <div className="flex flex-row justify-evenly items-stretch flex-wrap w-full">
          <ProfileCard profile={linkedinProfile} />
          <ProfileCard profile={githubProfile} />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
