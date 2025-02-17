import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sayyam Jain </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently persuing B.Tech in Computer Engineering from Dwarkadas J. Sanghvi College Of Engineering.
           

          </p>
        

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sayyam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
