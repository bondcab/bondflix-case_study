import { Container, Row, Col } from "react-bootstrap";

function RetrospectiveView() {
  return (
    <div className="pageContainer">
      <div className="containerContainer">
        <Container className="serverSideContainer" fluid>
          <div className="serverSideView">
            <div className="retrospectiveTitleContainer">
              <h2 className="retroTitle">Retrospective</h2>
            </div>

            <Row>
              <Col sm={12} md={6}>
                <div className="retrospectiveGridItem">
                  <div className="retrospectiveItemContainer">
                    <div className="retroImageTitle">
                      <div className="thumbsUpImage"></div>
                      <h3 className="retrospectiveSubTitle">What went well?</h3>
                    </div>

                    <div className="restAPIContainer">
                      <p className="retroText">
                        During this project I preferred working on the front end
                        side more. Although I found React very challenging at
                        first now it feels very intuitive.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="retrospectiveGridItem">
                  <div className="retrospectiveItemContainer">
                    <div className="retroImageTitle">
                      <div className="thumbsDownImage"></div>
                      <h3 className="retrospectiveSubTitle">
                        What didn't go well?
                      </h3>
                    </div>

                    <div className="restAPIContainer">
                      <p className="retroText">
                        The part I found most challenging was implementing
                        server side authentication and security. This is a
                        subject I plan to prioritise more in my current studies
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="retrospectiveGridItem">
                  <div className="retrospectiveLastItemContainer">
                    <div className="retroImageTitle">
                      <div className="whatsNextImage"></div>
                      <h3 className="retrospectiveSubTitle">Whats next?</h3>
                    </div>

                    <div className="restAPIContainer">
                      <p className="retroText">
                        I plan to try develop more applications using the MERN
                        stack to better my understanding of all technologies
                        involved
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default RetrospectiveView;
