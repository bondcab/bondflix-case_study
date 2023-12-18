import { Container, Row, Col } from "react-bootstrap";

function ServerSideView() {
  return (
    <div className="pageContainer">
      <div className="containerContainer">
        <Container className="serverSideContainer" fluid>
          <div className="serverSideView">
            <div className="serverSideTitleContainer">
              <h2 className="serverSideTitle">Server Side</h2>
            </div>

            <Row>
              <Col className="gridItem">
                <div className="restAPI">
                  <div className="restAPIContainer">
                    <p className="restAPIText">
                      First I created the REST API endpoints with Express which
                      allows the front end to communicate with and make changes
                      via CRUD to data on the database
                    </p>
                  </div>
                  <div className="crudImage"></div>
                </div>
              </Col>
              <Col className="gridItem">
                <div className="restAPI">
                  <div className="restAPIContainer">
                    <p className="restAPIText">
                      Next I setup a non relational database using MongoDB. I
                      decided to go with MongoDB over relational (SQL) datbase
                      as it offers more flexibility and scalability.
                    </p>
                  </div>
                  <div className="MongoDBImage"></div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="gridItem">
                <div className="restAPI">
                  <div className="restAPIContainer">
                    <p className="restAPIText">
                      Next I setup the business logic for the application. This
                      is where code from the database is converted into code the
                      rest of the application can use. I achieved this via
                      Mongoose
                    </p>
                  </div>
                  <div className="mongooseImage"></div>
                </div>
              </Col>
              <Col className="gridItem">
                <div className="restAPI">
                  <div className="restAPIContainer">
                    <p className="restAPIText">
                      Next step was adding some authentication to the
                      application. For the initial login basic HTTP
                      authentication was used. After this point JWT token based
                      authentication was used on all further endpoint requests.
                    </p>
                  </div>
                  <div className="authImage"></div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="gridItem">
                <div className="restAPI">
                  <div className="restAPIContainer">
                    <p className="restAPIText">
                      For further added security I next implemented Cross Origin
                      Resource Sharing (Cors), to prevent access to the
                      endpoints from unpermitted domains, hashing to make users
                      password unreadable to potential bad actors and server
                      side input validation to ensure no nifarious data is being
                      sent in to the backend.
                    </p>
                  </div>
                  <div className="securityImage"></div>
                </div>
              </Col>
              <Col className="gridItem">
                <div className="restAPI">
                  <div className="restAPIContainer">
                    <p className="restAPIText">
                      Backend code was then deployed to Heroku and local MongoDB
                      data deployed to MongoGB Atlas to allow access outside my
                      local environment.
                    </p>
                  </div>
                  <div className="atlasImage"></div>
                  <div className="herokuImage"></div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ServerSideView;
