import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
}

export default function Skills(props) {
  const theme = props.theme;
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            {language === "en" ? "What I Do?" : "무엇을 하나요?"}
          </h1>
        </Fade>
      </div>
      <div className="skills-main-div">
        {skills.data.map((skill, index) => {
          return (
            <div key={index} className="skills-text-div">
              <Fade right duration={1000}>
                <h2 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title === "Data Science & AI"
                    ? t.dataScience
                    : skill.title === "Cloud Infra-Architecture"
                    ? t.cloudInfra
                    : skill.title}
                </h2>
              </Fade>
              <div className="skills-text-container">
                <Fade left duration={1000}>
                  <div>
                    <SoftwareSkill logos={skill.softwareSkills} />
                  </div>
                </Fade>
                <Fade right duration={1000}>
                  <div>
                    {(skill.title === "Data Science & AI"
                      ? t.dataScienceSkills
                      : skill.title === "Cloud Infra-Architecture"
                      ? t.cloudInfraSkills
                      : skill.skills
                    ).map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
              <Fade left duration={1000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  );
}
