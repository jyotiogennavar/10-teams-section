import React from "react";
import styled from "styled-components";
import { CardContent } from "./CardContent";

const TeamSection = () => {
  return (
    <Section>
      <UpperRow>
        <TitleWrapper>
          <h1>Meet the Team</h1>
          <p>
            Dive into the stories behind our team! Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Integer lobortis purus et nibh
            consectetur tempus. Vestibulum sit amet semper nulla. Mauris
            efficitur, enim eget aliquam tincidunt, lorem nibh gravida urna, nec
            mattis orci ligula sed odio.
          </p>
        </TitleWrapper>

        <MainCard>
          <CardText>
            <h3>John Doe</h3>
            <p>CEO</p>
          </CardText>
        </MainCard>
      </UpperRow>

      <CardContainer>
        {CardContent.map((card) => (
          <Card key={card.id} backgroundImg={card.img}>
            <CardText>
              <h3>{card.name}</h3>
              <p>{card.role}</p>
            </CardText>
          </Card>
        ))}
      </CardContainer>
    </Section>
  );
};

const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    padding: 0;
    margin-top: 0;
    transform: translate(-50%, 0); 
    top: 0;
  }
`;

const UpperRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16rem;
  margin: 2rem 8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    margin: 1.5rem;
  }
`;

const MainCard = styled.div`
  position: relative;
  background-image: url("https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: top;

  border-radius: 0.5rem;
  box-shadow: 3px 3px 0px black;

  height: 22rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: end;

  @media (max-width: 768px) {
    width: 100%;
    margin: 2rem;
  
  }
`;



const TitleWrapper = styled.div`
  max-width: 60ch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 0;
  font-family: "Roboto", sans-serif;
  color: black;

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    text-transform: uppercase;
    
  }

  p {
    margin: 1rem 0;
    font-size: 1.2rem;
    
  }

  @media (max-width: 768px) {
    margin: 0;
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 8rem;
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    margin: 1rem;
  }
`;

const Card = styled.div`
  box-shadow: 3px 3px 0px black;
  position: relative;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-position: top;
  border-radius: 0.5rem;
  flex: 1;
  height: 22rem;
  display: flex;
  flex-direction: column;
  justify-content: end;

  @media (max-width: 768px) {
    height: 22rem;

    margin: .5rem;

    flex: none;
  
  }
`;

const CardText = styled.div`
  position: relative;
  z-index: 2;
  font-family: "Roboto", sans-serif;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0)
  );
  color: white;
  padding: 1rem 1.6rem;
  border-radius: 0.5rem;
  h3 {
    margin-bottom: 0.2rem;
    font-size: 1.5rem;
  }
`;

export default TeamSection;
