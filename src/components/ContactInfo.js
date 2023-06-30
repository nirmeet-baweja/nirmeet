import React from "react";
import Container from "./Container";
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
    <Container id="contact" heading="Contact Information">
      <div className="flex flex-row justify-evenly items-stretch flex-wrap pt-10 sm:pt-16 w-full">
        <ProfileCard profile={linkedinProfile} />
        <ProfileCard profile={githubProfile} />
      </div>
    </Container>
  );
};

export default ContactInfo;
