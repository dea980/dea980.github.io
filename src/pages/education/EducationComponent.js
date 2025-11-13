import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations";

function EducationContent(props) {
  const theme = props.theme;
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="education-main">
      <Header theme={props.theme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              {/* <img
									src={require("../../assets/images/education.svg")}
									alt=""
								/> */}
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                {t.educationTitle}
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                {t.basicQualification}
              </h3>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
      </div>
      <Footer theme={props.theme} />
      <TopButton theme={props.theme} />
    </div>
  );
}

class Education extends Component {
  render() {
    return <EducationContent theme={this.props.theme} />;
  }
}

export default Education;
