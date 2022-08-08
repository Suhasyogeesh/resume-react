import GlobalStyle from "./components/styles/Global";
import styled from "styled-components";
import Introduction from "./components/Introduction";
import Academic from "./components/Academic";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechnicalSkills from "./components/TechnicalSkills";
import Publications from "./components/Publications";
import Certifications from "./components/Certifications";
import Volunteering from "./components/Volunteering";
import Objective from "./components/Objective";
import BioData from "./components/BioData";

const Resume=styled.div`
  background-color:${props=>props.theme.bg};
`;

const Page=styled.div`
  background-color:${props=>props.theme.fg};
  color:${props=>props.theme.text};
  width: auto;
  line-height:1.5;
  max-width: 794px;
  min-width: 320px;
  min-height: 1055px;
  /* max-height: 1150px; */
  margin: 0 auto;
`;

function App() {
  return (
    <>
    <GlobalStyle/>
    <Resume>
    <Page>
        <Introduction/>
        <Objective/>
        <Academic/>
        <Experience/>
        <TechnicalSkills/> 
        <Projects/>                  
        <Publications/>
        <Certifications/>
        <Volunteering/>
        <BioData/>
      </Page>
    </Resume>
    </> 
    );   
}

export default App;
