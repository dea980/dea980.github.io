import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations";

function Projects(props) {
  const { language } = useLanguage();
  const t = translations[language];
  const theme = props.theme;

  const projects = [
    {
      id: "stock-market-ml",
      name:
        language === "en"
          ? "Stock Market Price Prediction with ML"
          : "ML을 이용한 주식 시장 가격 예측",
      createdAt: "2023-09-01T00:00:00Z",
      url: "https://github.com/dea980/ML_Project-for-predicting-Stockprice",
      description:
        language === "en"
          ? "Implemented Machine Learning Architectures with LSTM and GRU for predicting stock market trends. Achieved significant accuracy through hybrid model architecture."
          : "LSTM과 GRU를 활용한 머신러닝 아키텍처를 구현하여 주식 시장 동향을 예측했습니다. 하이브리드 모델 아키텍처를 통해 높은 정확도를 달성했습니다.",
      languages: [
        { name: "Python", iconifyClass: "logos-python" },
        { name: "TensorFlow", iconifyClass: "logos-tensorflow" },
        { name: "Jupyter", iconifyClass: "logos-jupyter" },
      ],
    },
    {
      id: "rl-visual-inputs",
      name:
        language === "en"
          ? "Reinforcement Learning from Visual Inputs"
          : "시각적 입력을 통한 강화학습",
      createdAt: "2023-01-01T00:00:00Z",
      url: "https://github.com/dea980/RL_Project-with-Visual_Input",
      description:
        language === "en"
          ? "Trained RL agents in OpenAI Gym for Cartpole balancing. Optimized performance through Variational Auto-Encoder and published research findings."
          : "OpenAI Gym에서 카트폴 밸런싱을 위한 강화학습 에이전트를 훈련했습니다. Variational Auto-Encoder를 통해 성능을 최적화하고 연구 결과를 발표했습니다.",
      languages: [
        { name: "Python", iconifyClass: "logos-python" },
        { name: "PyTorch", iconifyClass: "logos-pytorch" },
        { name: "OpenAI", iconifyClass: "simple-icons:openai" },
      ],
    },
    {
      id: "gpu-cpu-analysis",
      name:
        language === "en"
          ? "GPU vs CPU Performance Analysis"
          : "GPU vs CPU 성능 분석",
      createdAt: "2022-08-01T00:00:00Z",
      url: "https://github.com/dea980/BigRed200_research_project_by_cuda",
      description:
        language === "en"
          ? "Analyzed GPU vs CPU performance in scientific computing using IU's BigRed 200 supercomputer. Published comprehensive analysis of matrix transposition benchmarks."
          : "IU의 BigRed 200 슈퍼컴퓨터를 사용하여 과학 컴퓨팅에서 GPU와 CPU의 성능을 분석했습니다. 행렬 전치 벤치마크에 대한 포괄적인 분석을 발표했습니다.",
      languages: [
        { name: "Python", iconifyClass: "logos-python" },
        { name: "CUDA", iconifyClass: "simple-icons:nvidia" },
      ],
    },
  ];

  return (
    <div className="projects-main">
      <Header theme={theme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {t.researchProjects}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {t.projectsDescription}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {projects.map((project) => (
          <GithubRepoCard
            key={project.id}
            repo={{
              ...project,
              isFork: false,
            }}
            theme={theme}
          />
        ))}
      </div>
      <Footer theme={theme} onToggle={props.onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}

export default Projects;
