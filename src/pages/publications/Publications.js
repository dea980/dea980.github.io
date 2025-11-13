import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./Publications.css";
import ProjectsImg from "../projects/ProjectsImg";
import { useLanguage } from "../../context/LanguageContext";
import { publicationsHeader, publications } from "../../portfolio";

function Publications(props) {
  const { language } = useLanguage();
  const theme = props.theme;

  // 논문 정리와 연구 프로젝트를 분리
  const researchPapers = publications.data.filter(
    (pub) => pub.type === "research"
  );
  const paperReviews = publications.data.filter(
    (pub) => pub.type === "paper_review"
  );

  return (
    <div className="publications-main">
      <Header theme={theme} />
      <div className="basic-publications">
        <Fade bottom duration={2000} distance="40px">
          <div className="publications-heading-div">
            <div className="publications-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="publications-heading-text-div">
              <h1
                className="publications-heading-text"
                style={{ color: theme.text }}
              >
                {language === "en"
                  ? publicationsHeader.title
                  : "연구 논문 및 발표"}
              </h1>
              <p
                className="publications-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {language === "en"
                  ? publicationsHeader.description
                  : "머신러닝 및 컴퓨터 과학 분야에서의 연구 능력과 기여를 보여주는 학술 연구 논문 및 프로젝트"}
              </p>
            </div>
          </div>
        </Fade>
      </div>

      {/* 연구 논문 섹션 */}
      {researchPapers.length > 0 && (
        <div className="publications-section">
          <Fade bottom duration={2000} distance="20px">
            <h2
              className="publications-section-title"
              style={{ color: theme.text }}
            >
              {language === "en" ? "Research Papers" : "연구 논문"}
            </h2>
          </Fade>
          <div className="publications-cards-div-main">
            {researchPapers.map((pub) => (
              <PublicationCard key={pub.id} pub={pub} theme={theme} />
            ))}
          </div>
        </div>
      )}

      {/* 논문 정리 섹션 */}
      {paperReviews.length > 0 && (
        <div className="publications-section">
          <Fade bottom duration={2000} distance="20px">
            <h2
              className="publications-section-title"
              style={{ color: theme.text }}
            >
              {language === "en" ? "Paper Reviews" : "논문 정리"}
            </h2>
            <p
              className="publications-section-subtitle subTitle"
              style={{ color: theme.secondaryText }}
            >
              {language === "en"
                ? "Detailed reviews and summaries of influential research papers"
                : "영향력 있는 연구 논문에 대한 상세한 리뷰 및 요약"}
            </p>
          </Fade>
          <div className="publications-cards-div-main">
            {paperReviews.map((pub) => (
              <PublicationCard key={pub.id} pub={pub} theme={theme} />
            ))}
          </div>
        </div>
      )}

      {/* 논문 정리가 없을 때 안내 메시지 */}
      {paperReviews.length === 0 && (
        <div className="publications-empty-section">
          <Fade bottom duration={2000} distance="20px">
            <p
              className="publications-empty-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {language === "en"
                ? "Paper reviews will be added here as I continue reading and summarizing research papers."
                : "연구 논문을 읽고 정리하면서 논문 정리가 여기에 추가될 예정입니다."}
            </p>
          </Fade>
        </div>
      )}

      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}

export default Publications;
