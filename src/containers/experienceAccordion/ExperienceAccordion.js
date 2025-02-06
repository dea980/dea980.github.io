import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { useLanguage } from "../../context/LanguageContext";

function ExperienceAccordion(props) {
  const { language } = useLanguage();
  const theme = props.theme;

  const getTranslatedTitle = (title) => {
    switch (title) {
      case "Work Experience":
        return language === "en" ? "Work Experience" : "직장 경력";
      case "Research Projects":
        return language === "en" ? "Research Projects" : "연구 프로젝트";
      case "Leadership":
        return language === "en" ? "Leadership" : "리더십";
      default:
        return title;
    }
  };

  const getTranslatedExperience = (experience) => {
    if (language === "en") return experience;

    const translations = {
      "Software Engineer (Firmware)": {
        title: "소프트웨어 엔지니어 (펌웨어)",
        description:
          "• 고급 홈 시어터 프로세서 시스템을 위한 펌웨어 임베디드 하드웨어 개발을 위해 회사 git 시스템을 배포하고 협업했습니다.\n• UI 상호작용의 CORS 문제 등을 처리하기 위한 웹 인터페이스 시스템을 최적화하고 API를 구현했습니다.\n• 리버스 엔지니어링으로 UI 폴링 속도를 진단하고 UI 반응 속도를 85%까지 개선했습니다.",
      },
      "Research Assistant": {
        title: "연구 조교",
        description:
          "• Unity 게임 엔진을 사용하여 VR 동물 챔버 파이프라인 개발을 지원했습니다.\n• 동물 챔버 환경과 3D 프린팅을 위한 3D 모델을 설계하고 내보냈습니다.\n• 평균 98%의 동물 키포인트 정확도를 달성한 딥러닝 포즈 추정 모델을 훈련했습니다.",
      },
      "Stock Market Price Prediction with ML": {
        title: "ML을 이용한 주식 시장 가격 예측",
        description:
          "• LSTM과 GRU를 사용한 머신러닝 아키텍처를 구현하고 하이브리드 아키텍처를 만들었습니다.\n• 연구 프로젝트 발표와 논문 작성에서 지도교수와 팀원과 협력했습니다.\n• ML 모델을 사용하여 주식 시장 동향 예측에서 상당한 정확도를 달성했습니다.",
      },
      "Reinforcement Learning from Visual Inputs": {
        title: "시각적 입력을 통한 강화학습",
        description:
          "• OpenAI Gym에서 고전적인 Cartpole 밸런싱 작업을 수행하기 위해 여러 RL 에이전트를 훈련하고 실험했습니다.\n• Variational Auto-Encoder를 통해 훈련 데이터를 최적화하여 에이전트 성능을 극대화했습니다.\n• RL 환경에서의 시각적 입력 처리에 대한 연구 결과를 발표했습니다.",
      },
      "GPU vs CPU Performance Analysis": {
        title: "GPU vs CPU 성능 분석",
        description:
          "• 행렬 전치에 대한 CPU와 GPU 성능 메트릭을 보고하고 비교하는 알고리즘을 개발했습니다.\n• 메트릭 비교를 수행하기 위해 IU의 BigRed 200 슈퍼컴퓨터와 인터페이스했습니다.\n• 과학적 컴퓨팅에서 GPU vs CPU 성능에 대한 포괄적인 분석을 발표했습니다.",
      },
      "Vice President / Team Leader": {
        title: "부사장 / 팀장",
        description:
          "• 3인 팀과 협력하여 기업에 대한 포괄적인 연구를 수행했습니다.\n• 이전 시장 동향에 대한 회귀 분석을 수행했습니다.\n• 경제 동향과 재무 분석 보고서를 전달했습니다.",
      },
      "Seminar Assistant": {
        title: "세미나 조교",
        description:
          "• 20명 이상의 회원을 위한 주간 컴퓨터 엔진 언어 세션을 시작했습니다.\n• 세미나를 위한 예산을 마련하기 위해 1,000달러 이상의 커뮤니티 기부를 조직했습니다.",
      },
    };

    const translation = translations[experience.title];
    return translation ? { ...experience, ...translation } : experience;
  };

  return (
    <div className="experience-accord">
      <Accordion
        overrides={{
          Root: {
            style: {
              marginTop: "30px",
              marginBottom: "30px",
            },
          },
        }}
      >
        {props.sections.map((section) => (
          <Panel
            className="accord-panel"
            title={getTranslatedTitle(section.title)}
            key={section.title}
            overrides={{
              Header: {
                style: () => ({
                  backgroundColor: `${theme.body}`,
                  border: `2px solid ${theme.headerColor}`,
                  borderRadius: "10px",
                  marginBottom: "15px",
                  padding: "15px",
                  fontSize: "20px",
                  fontFamily: "Google Sans Regular",
                  color: `${theme.text}`,
                  cursor: "pointer",
                  ":hover": {
                    color: `${theme.secondaryText}`,
                    backgroundColor: `${theme.headerColor}20`,
                  },
                }),
              },
              Content: {
                style: () => ({
                  backgroundColor: `${theme.body}`,
                  padding: "20px 10px",
                }),
              },
              ToggleIcon: {
                style: () => ({
                  color: theme.text,
                }),
              },
            }}
          >
            {section.experiences.map((experience, index) => (
              <ExperienceCard
                key={`${section.title}-${index}`}
                index={index}
                totalCards={section.experiences.length}
                experience={getTranslatedExperience(experience)}
                theme={theme}
              />
            ))}
          </Panel>
        ))}
      </Accordion>
    </div>
  );
}

export default ExperienceAccordion;
