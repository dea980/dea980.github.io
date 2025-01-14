import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

// Removed import of experience from portfolio.js since we're defining it here
const experienceData = {
  title: "Experience",
  subtitle: "Work Experience and Projects",
  description:
    "I have worked as a Software Engineer and Research Assistant, focusing on software development, machine learning, and research projects. My experience spans across various domains including firmware development, VR applications, and mobile app development.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Engineer (Firmware)",
          company: "Indy Audio Labs.LLC",
          company_url: "#",
          logo_path: "company.png",
          duration: "May 2024 - November 2024",
          location: "Indianapolis, IN",
          description:
            "• Deployed and collaborated with company git system for the firmware-embedded hardware development for high-end home theater processor systems.\n• Optimized the web interface system and implemented API for handling problems such as CORS problems from UI interaction.\n• Diagnosed UI polling speed with reverse engineering and improved the UI react speed up to 85%.",
          color: "#0879bf",
        },
        {
          title: "Research Assistant",
          company: "Luddy School of Informatics, The Building a Mind Lab",
          company_url: "#",
          logo_path: "company.png",
          duration: "May 2023 - May 2024",
          location: "Bloomington, IN",
          description:
            "• Assisted in the development of a VR Animal Chamber Pipeline using the Unity Game Engine\n• Designed and exported 3D models for use in Animal Chamber Environment and 3D printing\n• Trained a Deep Pose Estimation Model, achieving on average 98% animal key-point accuracy",
          color: "#9b1578",
        },
        {
          title: "Software Developer, Co-Founder",
          company: "DUBU TIME",
          company_url: "#",
          logo_path: "company.png",
          duration: "December 2021 - February 2022",
          location: "Seoul, South Korea",
          description:
            "• Co-Founded Dubu Time, a mobile productivity app which rewards users for focusing on tasks\n• Deployed a user database backend for use on a front-end interface\n• Established robust CI/CD pipelines, utilizing GitHub for seamless project operation\n• Conducted market research on target app users to guide User Interface Design",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Projects",
      experiences: [
        {
          title: "Predicting the Stock market price with ML",
          company: "Research Project",
          company_url: "#",
          logo_path: "project.png",
          duration: "September 2023 - December 2023",
          location: "Bloomington, IN",
          description:
            "• Implemented the Machine Learning Architectures and create hybrid architectures with LSTM and GRU.\n• Collaborate and managed with advisor and teammate about research project presentation and paper.",
          color: "#4285F4",
        },
        {
          title: "Reinforcement Learning from Visual Inputs",
          company: "Research Project",
          company_url: "#",
          logo_path: "project.png",
          duration: "January 2023 - May 2023",
          location: "Bloomington, IN",
          description:
            "• Trained and experimented with several RL agents in OpenAI Gym to perform classic Cartpole balancing task\n• Optimized training data through a Variational Auto-Encoder to maximize agent performance",
          color: "#D83B01",
        },
        {
          title: "Can CPU programming be replaced by GPU programming",
          company: "Research Project",
          company_url: "#",
          logo_path: "project.png",
          duration: "August 2022 - December 2022",
          location: "Bloomington, IN",
          description:
            "• Developed algorithms to report and compare CPU and GPUs performance metrics on matrix transposition\n• Interfaced with IU's BigRed 200 supercomputer to perform metric comparisons",
          color: "#000000",
        },
      ],
    },
    {
      title: "Leadership",
      experiences: [
        {
          title: "Vice President / Team Leader",
          company: "International Trend News",
          company_url: "#",
          logo_path: "leadership.png",
          duration: "November 2021 - March 2022",
          location: "Bloomington, IN",
          description:
            "• Collaborated with a team of three to conduct comprehensive research on companies\n• Performed regression analysis on previous market trends\n• Communicated economic trends and financial analysis statements",
          color: "#0C9D58",
        },
        {
          title: "Seminar Assistant",
          company: "Asian Informatics Computing Club",
          company_url: "#",
          logo_path: "leadership.png",
          duration: "August 2017 - May 2018",
          location: "Bloomington, IN",
          description:
            "• Launched weekly compute-engine languages sessions for 20+ members\n• Organized a community donation of $1,000+ to facilitate a budget for seminars",
          color: "#181717",
        },
      ],
    },
  ],
};

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experienceData.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experienceData["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experienceData["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceAccordion
          sections={experienceData["sections"]}
          theme={theme}
        />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
