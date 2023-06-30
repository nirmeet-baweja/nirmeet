import React from "react";
import Container from "./Container";
import ProfileCard from "./ProfileCard";
import { contactProfiles } from "../data/contactProfiles";

const ContactInfo = () => {
  return (
    <Container id="contact" heading="Contact Information">
      <div className="flex flex-row justify-evenly items-stretch flex-wrap pt-10 sm:pt-16 w-full">
        <ProfileCard profile={contactProfiles.linkedinProfile} />
        <ProfileCard profile={contactProfiles.githubProfile} />
      </div>
    </Container>
  );
};

export default ContactInfo;
