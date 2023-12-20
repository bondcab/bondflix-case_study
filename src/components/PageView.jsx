import { Container, Row, Col } from "react-bootstrap";

function PageView() {
  return (
    <div className="pageContainer">
      <div className="containerContainer">
        <div className="pageView">
          <div className="pageViewTitleContainer">
            <h2 className="serverSideTitle">Page Views</h2>
          </div>
          <Container fluid>
            <Row>
              <Col md={8}>
                <div className="loginView">
                  <h3>Login View</h3>
                  <img
                    src="login_view.png"
                    alt="login_view"
                    className="loginViewImage"
                  />
                </div>
              </Col>

              <Col md={4}>
                {" "}
                <div className="movieView">
                  <h3>Movie View</h3>
                  <img
                    src="movie_view.png"
                    alt="movie_view"
                    className="movieViewImage"
                  />
                </div>
              </Col>
              <Col md={4}>
                {" "}
                <div className="actorView">
                  <h3>Actor View</h3>
                  <img
                    src="actor_view.png"
                    alt="actor_view"
                    className="actorViewImage"
                  />
                </div>
              </Col>

              <Col md={8}>
                {" "}
                <div className="signupView">
                  <h3>Signup View</h3>
                  <img
                    src="signup_view.png"
                    alt="signup_view"
                    className="signUpViewImage"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="mainView">
                  <h3>Main View</h3>
                  <img
                    src="main_view.png"
                    alt="main_view"
                    className="mainViewImage"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="directorView">
                  <h3>Director View</h3>
                  <img
                    src="director_view.png"
                    alt="director_view"
                    className="directorViewImage"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default PageView;
