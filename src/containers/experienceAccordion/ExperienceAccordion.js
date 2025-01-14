import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
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
          {this.props.sections.map((section) => (
            <Panel
              className="accord-panel"
              title={section["title"]}
              key={section["title"]}
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
              {section["experiences"].map((experience, index) => (
                <ExperienceCard
                  key={`${section["title"]}-${index}`}
                  index={index}
                  totalCards={section["experiences"].length}
                  experience={experience}
                  theme={theme}
                />
              ))}
            </Panel>
          ))}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
