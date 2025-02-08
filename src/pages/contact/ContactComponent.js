import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations";

const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;

function Contact(props) {
  const { language } = useLanguage();
  const t = translations[language];
  const theme = props.theme;

  return (
    <div className="contact-main">
      <Header theme={theme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                src={require(`../../assets/images/${contactPageData.contactSection.profile_image_path}`)}
                alt=""
                className="contact-heading-img"
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {t.contactMe}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {t.contactDescription}
              </p>
              <SocialMedia theme={theme} />
              <div className="resume-btn-div">
                <Button
                  text={language === "en" ? "See My Resume" : "이력서 보기"}
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </Fade>

        <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {t.blogs}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {t.blogsSubtitle}
              </p>
              <div className="blogsite-btn-div">
                <Button
                  text={
                    language === "en" ? "Visit My Blogsite" : "블로그 방문하기"
                  }
                  newTab={true}
                  href={blogSection.link}
                  theme={theme}
                />
              </div>
            </div>
            <div className="blog-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade>

        <Fade bottom duration={1000} distance="40px">
          <div className="address-heading-div">
            <div className="contact-heading-img-div">
              <AddressImg theme={theme} />
            </div>
            <div className="address-heading-text-div">
              <h1
                className="address-heading-text"
                style={{ color: theme.text }}
              >
                {t.address}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {language === "en"
                  ? addressSection.subtitle
                  : "경기도 성남시 중원구 사기막골로 201, 대한민국, 13205"}
              </p>
              <div className="address-btn-div">
                <Button
                  text={
                    language === "en"
                      ? "Visit on Google Maps"
                      : "구글 지도에서 보기"
                  }
                  newTab={true}
                  href={addressSection.location_map_link}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={theme} onToggle={props.onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}

export default Contact;
