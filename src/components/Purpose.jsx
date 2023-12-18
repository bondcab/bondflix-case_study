import { Container } from "react-bootstrap";

function PurposeView() {
  return (
    <div className="pageContainer">
      <div className="containerContainer">
        <Container fluid>
          <div className="purposeView">
            <div className="purposeTitleContainer">
              <h2 className="purpose">Purpose</h2>
            </div>

            <div className="purposeMessageContainer">
              <img
                src="coding_laptop.jpeg"
                alt="overview"
                className="purposeImage"
              />
              <div className="purposeViewTextContainer">
                <p className="purposeMessage">
                  This application was created as part of my web development
                  course at CareerFoundry to demonstrate a full stack JavaScript
                  project built using the MERN stack. Users can effortlessly
                  navigate through the app to get a brief description of each
                  film as well as information on the lead actor and director.
                  The 'Favourites' functionality allows users to curate their
                  own Bond film collection, adding a layer of personalization to
                  their cinematic journey.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default PurposeView;
