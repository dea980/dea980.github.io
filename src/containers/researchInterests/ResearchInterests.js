import React from "react";
import "./ResearchInterests.css";
import { researchInterests } from "../../portfolio";
import { Fade } from "react-reveal";
import { useLanguage } from "../../context/LanguageContext";

export default function ResearchInterests(props) {
  const theme = props.theme;
  const { language } = useLanguage();

  return (
    <div className="main" id="research-interests">
      <div className="research-interests-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1
            className="research-interests-header"
            style={{ color: theme.text }}
          >
            {language === "en" ? researchInterests.title : "연구 관심사"}
          </h1>
          <p
            className="subTitle research-interests-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {language === "en"
              ? researchInterests.subtitle
              : "인공지능 및 컴퓨터 과학의 여러 분야에 걸친 연구 관심사"}
          </p>
        </Fade>
      </div>
      <div className="research-interests-main-div">
        {researchInterests.interests.map((interest, index) => {
          return (
            <Fade
              key={index}
              bottom
              duration={2000}
              distance="40px"
              style={{ width: "100%" }}
            >
              <div
                className="research-interest-card"
                style={{
                  backgroundColor: theme.highlight,
                  border: `1px solid ${theme.text}`,
                }}
              >
                <div className="research-interest-content">
                  <h2
                    className="research-interest-title"
                    style={{ color: theme.text }}
                  >
                    {interest.name}
                  </h2>
                  <p
                    className="research-interest-description"
                    style={{ color: theme.secondaryText }}
                  >
                    {interest.description}
                  </p>
                  <div className="research-interest-keywords">
                    {interest.keywords.map((keyword, keyIndex) => (
                      <span
                        key={keyIndex}
                        className="research-interest-keyword"
                        style={{
                          backgroundColor: theme.text,
                          color: theme.body,
                        }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
}
