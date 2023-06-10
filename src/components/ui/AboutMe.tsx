import { Container, Row, Col, Image } from "react-bootstrap";
import { userImage } from "../../assets/const";
import { FC } from "react";

const AboutMe: FC = () => {
  return (
    <section className="section about-section gray-bg" id="about">
      <Container>
        <Row className="align-items-center flex-row-reverse">
          <Col lg={6}>
            <div className="about-text go-to">
              <h3 className="dark-color">About Me</h3>
              <h6 className="theme-color lead">
                React Frontend Developer based in Russia
              </h6>
              <p>
                I <mark>develop</mark> web applications using React and its
                ecosystem
              </p>
              <Row className="about-list">
                <Col md={6}>
                  <div className="media">
                    <label>Birthday</label>
                    <p>26th October 2000</p>
                  </div>
                  <div className="media">
                    <label>Age</label>
                    <p>22 Yr</p>
                  </div>
                  <div className="media">
                    <label>Residence</label>
                    <p>Russia</p>
                  </div>
                  <div className="media">
                    <label>Address</label>
                    <p>Grozny, Russia</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="media">
                    <label>E-mail</label>
                    <p>naurbaev2020@yandex.ru</p>
                  </div>
                  <div className="media">
                    <label>Mobile phone</label>
                    <p>8-988-902-79-69</p>
                  </div>
                  <div className="media">
                    <label>Telegram</label>
                    <p>@theMamed</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-avatar">
              <Image rounded src={userImage} alt="about-me-image" />
            </div>
          </Col>
        </Row>
        <div className="counter">
          <p className="m-0px  font-w-600">Skills</p>
          <Row>
            <Col md={6} lg={3}>
              <div className="count-data text-center">
                <h6 className="count h2">React js, (Next js)</h6>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="count-data text-center">
                <h6 className="count h2">TypeScript</h6>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="count-data text-center">
                <h6 className="count h2">Redux,MobX</h6>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="count-data text-center">
                <h6 className="count h2">Tailwind Css, Bootstrap, MUI,</h6>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
