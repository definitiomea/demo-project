import logo from './logo.svg';
import './App.npcss';

/* 부트스트랩 import */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";
import NavComp from './Components/NavComp';
import NavbarComp from './Components/NavbarComp';
import CardComp from './Components/CardComp';

/* Slick import */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

/* fontawesome import */
/* solid, regular에 따라서 import 해올 소스가 달라질 수 있다.
아이콘의 solid / regular 상 이름이 아예 같다면 주의 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCalendarTimes } from '@fortawesome/free-regular-svg-icons';

function App() {
  /* slick setting 내용, 속성 값을 편집하면 표시가 바뀔 수 있다.
  여기 안에 컴포넌트를 넣어본다면? */
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <CardComp></CardComp>

      {/* 당장은 디자인이 없다. -> index.js나 App.js에 css를 import하기 */}
      <Button as="a" variant="primary" onClick={() => {alert("클릭")}}>
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        <br></br>
        <FontAwesomeIcon icon={faBars} />
        <br></br>
        <FontAwesomeIcon icon={faCalendarTimes}></FontAwesomeIcon>
      </Button>

      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="12">
            1 of 3
          </Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="3">
            3 of 3
          </Col>
        </Row>
      </Container>

      <h2> Single Item</h2>
        {/* 또한 아이콘을 바꾸기 위해 slick-theme.css를 바꿔볼 수도 있다. */}
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
    </div>
  );
}

export default App;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon icon={faHeart} onClick={onClick} className={className}> style={{color: "red"}}</FontAwesomeIcon>
  );
}