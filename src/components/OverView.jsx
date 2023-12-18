import { Container } from "react-bootstrap";

function OverView() {
  return (
    <div className="pageContainer">
      <div className="containerContainer">
        <Container fluid>
          <div className="overViewView">
            <div className="overviewTitleContainer">
              <h2 className="overview">Overview</h2>
            </div>

            <div className="welcomeMessageContainer">
              <div className="overviewTextContainer1">
                <p className="welcomeMessage">
                  Welcome to the journey through the creation of BondFlix, a
                  dynamic web application designed to elevate the cinematic
                  experience of James Bond enthusiasts. In this case study, we
                  will delve into the intricacies the process that brought
                  BondFlix to life, enriching users' interactions with the
                  iconic world of 007.
                </p>
              </div>
              <div className="overviewTextContainer2">
                <p className="welcomeMessage">
                  BondFlix emerges from the intersection of technology and
                  entertainment, offering a seamless platform for users to
                  explore comprehensive information on all James Bond films
                  while providing a personalized touch through a 'Favourites'
                  feature. The project's primary goal is to provide an engaging,
                  user-friendly interface that encapsulates the essence of the
                  legendary spy franchise. It was developed using the MERN
                  stack.
                </p>
              </div>

              <img
                src="sean_connery.webp"
                alt="overview"
                className="overviewImage"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default OverView;
