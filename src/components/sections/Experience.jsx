import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { experiences } from "../../constants";
import ExperienceCard from "../cards/ExperienceCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const TimelineWrapper = styled.div`
  width: 100%;

  /* Remove the circles and adjust spacing */
  .vertical-timeline::before {
    width: 2px;
    background: ${({ theme }) => theme.text_primary + 20};
  }

  .vertical-timeline-element {
    margin: 2em 0;
  }

  .vertical-timeline-element-icon {
    display: none !important;
  }

  .vertical-timeline-element-content {
    box-shadow: 0 3px 0 ${({ theme }) => theme.text_primary + 20};
    padding: 2em !important;
  }

  .vertical-timeline--two-columns .vertical-timeline-element-content {
    margin-left: 0;
    width: 44%;
  }

  .vertical-timeline-element-content-arrow {
    display: none;
  }

  @media only screen and (max-width: 1169px) {
    .vertical-timeline--two-columns .vertical-timeline-element-content {
      width: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    .vertical-timeline::before {
      display: none;
    }

    .vertical-timeline--two-columns .vertical-timeline-element-content {
      width: 100%;
    }

    .vertical-timeline-element {
      margin: 1em 0;
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Experience = () => {
  return (
    <Container
      id="Experience"
      className="min-h-screen w-full flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <Wrapper>
        <h2 className="font-bold text-4xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Experience
        </h2>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          My work experience as a software engineer and working on different
          companies and projects.
        </Desc>

        <TimelineWrapper>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </TimelineWrapper>
      </Wrapper>
    </Container>
  );
};

export default Experience;
