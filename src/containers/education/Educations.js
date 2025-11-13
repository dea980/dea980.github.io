import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations";

function EducationsContent(props) {
  const theme = props.theme;
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            {t.degreesReceived}
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree, index) => {
          const translatedDegree = {
            ...degree,
            descriptions: t.degreeDescriptions[index] || degree.descriptions,
          };
          return (
            <DegreeCard key={index} degree={translatedDegree} theme={theme} />
          );
        })}
      </div>
    </div>
  );
}

class Educations extends Component {
  render() {
    return <EducationsContent theme={this.props.theme} />;
  }
}

export default Educations;
