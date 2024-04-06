import { color } from "framer-motion";
import { rgb } from "polished";
import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px;
  border-bottom: 1px solid #ccc; /* Add border to separate components */
`;

const TextContent = styled.div`
  flex: 1;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 1px;
  font-size: 2rem;
`;

const Subtitle = styled.div`
  font-style: italic;
  margin-bottom: 5px;
  font-size: 1.5rem;
`;

const Duration = styled.div`
  margin-bottom: 10px;
`

const BulletPoint = styled.li`
  margin-bottom: 5px;
`;

const Image = styled.img`
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
`;

const AccordionItemContent = ({ title,duration, subtitle, highlights, imageSrc, links  }) => (
  <ContentWrapper>
    <TextContent>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Duration>{duration}</Duration>
      <ul>
        {highlights.map((highlight, index) => (
          <BulletPoint key={index}>
            <span style={{fontWeight:"bold"}}>
            {highlight.title ? highlight.title + " - ": ""}
            </span>
            {highlight.link? <a href={highlight.link} target="_blank" style={{color:rgb(255,255,0)}}>{highlight.desc}</a> :highlight.desc}
          </BulletPoint>
        ))}
      </ul>
    </TextContent>
    {imageSrc && <Image src={imageSrc} alt="Organization Logo" />}
  </ContentWrapper>
);

export default AccordionItemContent;
