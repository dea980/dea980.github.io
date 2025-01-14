import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assets/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {[
            {
              id: "stock-market-ml",
              name: "Stock Market Price Prediction with ML",
              createdAt: "2023-09-01T00:00:00Z",
              url:
                "https://github.com/dea980/ML_Project-for-predicting-Stockprice",
              description:
                "Implemented Machine Learning Architectures with LSTM and GRU for predicting stock market trends. Achieved significant accuracy through hybrid model architecture.",
              languages: [
                { name: "Python", iconifyClass: "logos-python" },
                { name: "TensorFlow", iconifyClass: "logos-tensorflow" },
                { name: "Jupyter", iconifyClass: "logos-jupyter" },
              ],
            },
            {
              id: "rl-visual-inputs",
              name: "Reinforcement Learning from Visual Inputs",
              createdAt: "2023-01-01T00:00:00Z",
              url: "https://github.com/dea980/RL_Project-with-Visual_Input",
              description:
                "Trained RL agents in OpenAI Gym for Cartpole balancing. Optimized performance through Variational Auto-Encoder and published research findings.",
              languages: [
                { name: "Python", iconifyClass: "logos-python" },
                { name: "PyTorch", iconifyClass: "logos-pytorch" },
                { name: "OpenAI", iconifyClass: "simple-icons:openai" },
              ],
            },
            {
              id: "gpu-cpu-analysis",
              name: "GPU vs CPU Performance Analysis",
              createdAt: "2022-08-01T00:00:00Z",
              url:
                "https://github.com/dea980/BigRed200_research_project_by_cuda",
              description:
                "Analyzed GPU vs CPU performance in scientific computing using IU's BigRed 200 supercomputer. Published comprehensive analysis of matrix transposition benchmarks.",
              languages: [
                { name: "Python", iconifyClass: "logos-python" },
                { name: "CUDA", iconifyClass: "simple-icons:nvidia" },
              ],
            },
          ].map((project) => (
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

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
