import React from 'react';
import Heading from './Heading';
import styled from 'styled-components';
import { BsTerminal } from 'react-icons/bs';
import { GoPrimitiveDot, GoLinkExternal } from 'react-icons/go';
import Point, { StyledPoint } from './Point';
import Badge from './Badge';

const Project = styled.div`
  padding: ${(props) => props.theme.padding.a};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProjectTitle = styled(StyledPoint)`
  display: flex;
  & h2,
  & svg {
    font-size: ${(props) => props.theme.fontSize.h3};
    font-weight: 600;
    color: ${(props) => props.theme.primary};
  }
`;

const Link = styled.a`
  font-size: ${(props) => props.theme.fontSize.h2};
  font-weight: 600;
  color: ${(props) => props.theme.primary};
`;

const Technologies = styled.div`
  padding: ${(props) => props.theme.padding.a};
  display: flex;
`;

const Body = styled.div`
  font-size: ${(props) => props.theme.fontSize.h3};
  background: ${(props) => props.theme.overlay};
`;

export default function Projects() {
  return (
    <>
      <Heading>
        <BsTerminal /> <span>Projects</span>
      </Heading>
      <Project>
        <Header>
          <ProjectTitle>
            <GoPrimitiveDot />
            <h2>Educational Career Recommendation System Using Machine Learning</h2>
          </ProjectTitle>
          <Link href='https://github.com/Suhasyogeesh/Education-Career-recomendation-system'>
            <GoLinkExternal />
          </Link>
        </Header>

        <Technologies>
          <Badge>Decision Tree</Badge>
          <Badge>Flask</Badge>
          <Badge>SKlearn</Badge>
          <Badge>Team Size: 4</Badge>
        </Technologies>

        <Body>
          <Point>
            This project is focused on recommending the courses based on user preferences.
          </Point>
          <Point>
            The model conists of 1665 different courses.
          </Point>
          Role:
          <Point>
            Successfully implemented recommendation of courses on user preferences.
          </Point>
          <Point>Integrated on web UI to select the preferences.</Point>
        </Body>
      </Project>
      <Project>
        <Header>
          <ProjectTitle>
            <GoPrimitiveDot />
            <h2>Amazon Reviews Sentiment Analysis</h2>
          </ProjectTitle>
          <Link href='https://colab.research.google.com/drive/101hAwM9VUyQBxGV_KdOCXpiTIdx_VO_1?usp=sharing'>
            <GoLinkExternal />
          </Link>
        </Header>

        <Technologies>
          <Badge>NLTK</Badge>
          <Badge>MatplotLib</Badge>
        </Technologies>

        <Body>
          <Point>
            This is google colab notebook and uses Naive bayes model .
          </Point>
          <Point>
            The notebook takes review as an input and predicting the negative and positive review on confusion matrix.
          </Point>
        </Body>
      </Project>

      <Project>
        <Header>
          <ProjectTitle>
            <GoPrimitiveDot />
            <h2>Covid-19 Cases Predictor Project</h2>
          </ProjectTitle>
          <Link href='https://colab.research.google.com/drive/1scAcXgIH0Fw34zF_heH8pm6ETLBnqMBY?usp=sharing'>
            <GoLinkExternal />
          </Link>
        </Header>

        <Technologies>
          <Badge>KNN</Badge>
          <Badge>Sklearn</Badge>
        </Technologies>

        <Body>
          <Point>
            This project is a covid prediction model.
          </Point>
          <Point>
            The model takes the data of covid cases in cv and predicts based on KNN model.
          </Point>
        </Body>
      </Project>

      {/* <Project>
        <Header>
          <ProjectTitle>
            <GoPrimitiveDot />
            <h2>React Colors</h2>
          </ProjectTitle>
          <Link href='https://rakshith4able.github.io/massive-color-project/'>
            <GoLinkExternal />
          </Link>
        </Header>

        <Technologies>
          <Badge>React</Badge>
          <Badge>Chroma.js</Badge>
        </Technologies>

        <Body>
          <Point>
            This is a color picker project and It has functionalities to pick
            color values in HEX, RGB, and RGBA format.
          </Point>
          <Point>
            It allows to change the intensity of colors and also to choose from
            different shades of the same color using the slider.
          </Point>
        </Body>
      </Project> */}
    </>
  );
}
