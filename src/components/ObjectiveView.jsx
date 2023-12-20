import { Container } from "react-bootstrap";

function ObjectiveView() {
  return (
    <div className="pageContainer">
      <div className="containerContainer">
        <Container fluid>
          <div className="objectiveView">
            <div className="objectiveTitleContainer">
              <h2 className="objectiveTitle">Objective</h2>
            </div>

            <div className="objectiveContentContainer">
              <div className="textImageContainer">
                <div className="objectiveContainer">
                  <p className="objectiveText">
                    To create a full-stack project using the MERN stack that I
                    can add to my professional portfolio.{" "}
                  </p>
                </div>

                <img src="code.png" alt="code" className="codeImage" />
              </div>

              <img
                src="classified.jpg"
                alt="overview"
                className="objectiveImage"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ObjectiveView;
