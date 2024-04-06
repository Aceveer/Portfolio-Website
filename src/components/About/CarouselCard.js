import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2c2c2c;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 200px;
`;

const ContentWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const DetailsColumn = styled.div`
  flex: 1;
  padding: 0 10px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 10px;
`;

const Organization = styled.div`
  font-size: 0.9rem;
  color: #fff;
  margin-bottom: 10px;
`;

const Link = styled.a`
  font-size: 0.9rem;
  color: #00a6eb;
  text-decoration: none;
  margin-bottom: 10px;
`;



const CarouselCard = ({ title, organization, link, imageSrc, courses1,courses2}) => {
  return (
    <CardContainer>
      <CardWrapper>
        <Image src={imageSrc} alt="Certification Image" />
        <ContentWrapper>
          <Title>{title}</Title>
          <Organization>{organization}</Organization>
          <Link href={link} target="_blank">More Info</Link>
          {/* <div><strong>Courses</strong></div> */}
          {/* <DetailsWrapper>
            <DetailsColumn>
              {courses1.map((course, index) => <div key={index}>{course}</div>)}
            </DetailsColumn>
            <DetailsColumn>
              {courses2.map((course, index) => <div key={index}>{course}</div>)}
            </DetailsColumn>
          </DetailsWrapper> */}
        </ContentWrapper>
      </CardWrapper>
    </CardContainer>
  );
};

export default CarouselCard;
