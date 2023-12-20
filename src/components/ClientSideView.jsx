import { Container, Row, Col } from "react-bootstrap";

function ClientSideView() {
  return (
    <div className="pageContainer">
      <div className="containerContainer">
        <Container className="serverSideContainer" fluid>
          <div className="serverSideView">
            <div className="serverSideTitleContainer">
              <h2 className="serverSideTitle">Client Side</h2>
            </div>

            <Row>
              <Col md={6}>
                <div className="gridItem">
                  <div className="restAPI">
                    <div className="restAPIContainer">
                      <p className="restAPIText">
                        First step of building the client side step of the
                        application was to decide what JavaScript front end
                        framework to use. I decided React because it has strong
                        documentation and support, you can create modular
                        reusable UI components and it has 'React Router' which
                        would aid in creating a single page application
                      </p>
                    </div>
                    <img src="react.jpeg" alt="crud" className="crudImage" />
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="gridItem">
                  <div className="restAPI">
                    <div className="restAPIContainer">
                      <p className="restAPIText">
                        Next I needed to setup a build tool to automate the
                        process of compiling, assembling and transforming code
                        and resources into a distribution ready format. I
                        decided to use Parcel for its minimalist configuration
                        and fast bundle times.
                      </p>
                    </div>
                    <img src="parcel.png" alt="crud" className="crudImage" />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="gridItem">
                  <div className="restAPI">
                    <div className="restAPIContainer">
                      <p className="restAPIText">
                        For styling I used React Bootstrap for its prebuilt UI
                        components and for its responsive grid system
                      </p>
                    </div>
                    <img
                      src="react_bootstrap.jpeg"
                      alt="crud"
                      className="crudImage"
                    />
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="gridItem">
                  <div className="restAPI">
                    <div className="restAPIContainer">
                      <p className="restAPIText">
                        Finally the application was deployed to Netlify so it
                        could be accessed online by all
                      </p>
                    </div>
                    <img src="netlify.png" alt="crud" className="crudImage" />
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

export default ClientSideView;
