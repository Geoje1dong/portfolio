import React from 'react'
// import VerticalityScroll from './components/verticalityScroll'
import styled from 'styled-components'
import Scrollbar from "./components/choiceScroll";

Scrollbar.initAll();

export default class About extends React.Component{
  state={
    aboutFadeIn: null
  }

  componentDidMount() {
    setTimeout(() => this.setState({ aboutFadeIn: "aboutFadeIn" }), 0);
    this.scrollbar = Scrollbar.init(document.querySelector(".about"));
  }

  render(){
    return(
      <div className='about'>
        <AboutBox className={this.state.aboutFadeIn}>
          <Intro delay="0.8">
            <p>안녕하세요, 저는 김재현 입니다.</p>
            <p>UI/UX 디자이너로 Web 및 App 개발에 참여하며 다양한 경험을 쌓고 있습니다.</p>
            <p>좋은 커뮤니케이션을 위해 개발자 및 기획자의 업무를 이해하기 위해 노력하고 있습니다.</p>
            <p>또한, 실용적이고 유용하며 아름다운 제품을 만들기 위해 많은 작업물을 보며 공부하고 있습니다.</p>
            <p>다양한 기술을 학습하고, 다양한 경험을 통해 좀 더 나은 디자이너로 발전하기 위해 노력하고 있습니다.</p>
          </Intro>
          <Company delay="1">
            <h2>Work</h2>
            <li>
              <p>진두아이에스</p>
              <div>
                <p>한국산업인력공단에서 운영하는 월드잡플러스 사이트 UI/UX Designer</p>
                <p>2017.04 ~ 2019.05</p>
              </div>
            </li>
            <li>
              <p>Rengo</p>
              <div>
                <p>렌트카 대여 b2b 사이트 UI/UX Designer</p>
                <p>2016.05 ~ 2017.02</p>
              </div>
            </li>
            <li>
              <p>한국산업정보사</p>
              <div>
                <p>웹에이전시 WEB Publisher</p>
                <p>2015.10 ~ 2016.05</p>
              </div>
            </li>
            <li>
              <p>USSOFT</p>
              <div>
                <p>웹에이전시 GUI Designer</p>
                <p>2014.07 ~ 2015.07</p>
              </div>
            </li>
          </Company>
          <Skill delay="1">
            <h2>Skill</h2>
            <li>UI Design</li>
            <li>UX Design</li>
            <li>Illustration</li>
            <li>Visual Design</li>
          </Skill>
        </AboutBox>
      </div>
    )
  }
}


const AboutBox = styled.div`
  padding: 8.898895vw 5.26593vw 8.898895vw;
  @media screen and (max-width : 1024px) {
    padding: 15.79779vw 5.26593vw 15.79779vw;
  }
  @media screen and (max-width : 425px) {
    padding: 30.79779vw 5.26593vw 30.79779vw;
  }
  > h2{
    font-size:1.5rem;
    margin-bottom:60px;
  }
  >ul, >div{
    opacity:0;
    transform:translateX(600px);
  }
  &.aboutFadeIn{
    >ul, >div{
      opacity:1;
      transform:translateX(0px);
    }
  }
`

const Intro = styled.div`
  transition:all ${props => props.delay}s cubic-bezier(0.455,0.03,0.515,0.955);
  padding-top:5.26593vw;
  margin-bottom:100px;
  > p{
    line-height:1.8em;
    font-weight:200;
    margin:0 0 10px 0;
  }
`

const Company = styled.ul`
  transition:all ${props => props.delay}s cubic-bezier(0.455,0.03,0.515,0.955);
  margin-bottom:100px;
  max-width:800px;
  li{
    padding-bottom:3.75rem;
    margin-bottom: 3.75rem;
    border-bottom:1px solid rgba(255, 255, 255, 0.1);
    >p {
      float:left;
      width:40%;
      font-size:1.25rem;
      font-weight:700;
      margin-bottom:0;
    }
    > div{
      float:left;
      width:60%;
      font-weight:200;
      p{
        font-weight:100;
        margin-bottom:0;
        &:last-child{
          font-size:12px;
        }
      }
    }
  }
  li:after{
    content:'';
    display:block;
    clear: both
  }
`

const Skill = styled.ul`
  transition:all ${props => props.delay}s cubic-bezier(0.455,0.03,0.515,0.955);
  >li{
    padding:6px 14px 4px;;
    border-radius: 100px;
    border:solid 1px rgba(255,255,255,0.1 );
    margin:0 8px 14px 0;
    display: inline-block;
    line-height:1.5em;
    font-weight:200;
  }
`