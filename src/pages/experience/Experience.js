import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";
import { experience } from "../../portfolio.js";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations";

function Experience(props) {
  const { language } = useLanguage();
  const t = translations[language];
  const theme = props.theme;

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
                {t.experience}
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: theme.text }}
              >
                {t.experienceDescription}
              </h3>
            </div>
          </div>
        </Fade>
      </div>
      <ExperienceAccordion
        sections={experience.sections.map((section) => ({
          ...section,
          title:
            language === "en"
              ? section.title
              : section.title === "Work Experience"
              ? t.workExperience
              : section.title === "Research Projects"
              ? t.researchProjects
              : section.title === "Leadership"
              ? t.leadership
              : section.title,
          experiences: section.experiences.map((exp) => ({
            ...exp,
            description:
              language === "en"
                ? exp.description
                : // You would need to add translations for each experience description
                  exp.description,
          })),
        }))}
        theme={theme}
      />
      <Footer theme={theme} onToggle={props.onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}

export default Experience;
