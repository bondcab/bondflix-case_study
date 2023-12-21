import { Container, Col, Row } from "react-bootstrap";

function DurationView() {
  return (
    <div className="pageContainer">
      <div className="containerContainer">
        <Container fluid>
          <div className="objectiveView">
            <div className="objectiveContentContainer">
              <div className="textImageDurationContainer">
                <Row>
                  <Col lg={6}>
                    <div className="durationContainer">
                      <div className="durationTitleContainer">
                        <h3 className="durationTitle">Duration</h3>
                      </div>

                      <p className="objectiveText">
                        The front end took longer than the backend by roughly
                        one week as I wanted to fully grasp my understanding of
                        React. I now feel I have a good understanding of React
                        and would complete the front end part of the project in
                        far less time next time
                      </p>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="durationImageContainer">
                      <img
                        src="duration.jpg"
                        alt="time"
                        className="durationImage"
                      />
                    </div>
                  </Col>
                  <Col lg={6} className="durationCol">
                    <div className="durationContainer">
                      <div className="durationTitleContainer">
                        <h3 className="durationTitle">Roles</h3>
                      </div>

                      <p className="objectiveText">
                        Lead Developer: Chris Bond
                      </p>
                      <p className="objectiveText">
                        Tutor: Adewunmi Bamishigbin
                      </p>
                      <p className="objectiveText">
                        Mentor: Sonia Rose Mary Karungi
                      </p>
                    </div>
                  </Col>

                  <Col lg={6}>
                    <div className="durationContainer">
                      <div className="durationTitleContainer">
                        <h3 className="durationTitle">Tools</h3>
                      </div>
                      <ul>
                        <li className="objectiveText">MongoDB</li>
                        <li className="objectiveText">Express</li>
                        <li className="objectiveText">Parcel</li>
                        <li className="objectiveText">Mongoose</li>
                        <li className="objectiveText">React</li>
                        <li className="objectiveText">React Bootstrap</li>
                        <li className="objectiveText">Postman</li>
                        <li className="objectiveText">Heroku</li>
                        <li className="objectiveText">Netlify</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default DurationView;
