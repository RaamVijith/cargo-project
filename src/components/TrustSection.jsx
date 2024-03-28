import React from "react";
import "../styles/TrustSection.css";

const TrustSection = () => {
  return (
    <section className="trustSection">
      <div className="left">
        <h2>TRUSTED CLIENTS</h2>
        <h4>LOREM IPSUM DOLOR SIT AMET CONSECTTURE</h4>
        <div className="comand">
          <p>
            W3Schools is optimized for learning and training. Examples might be
            simplified to improve reading and learning. Tutorials, references,
            and examples are constantly reviewed to avoid errors, but we cannot
            warrant full correctness of all content. While using W3Schools, you
            agree to have read and accepted
          </p>
        </div>
        <h3>JOHN DEO</h3>
        <h5>Managing Director</h5>
      </div>
      <hr className="divider" />

      <div className="right">
        <h2>WHY CHOOSE US</h2>
        <h4>LOREM IPSUM DOLOR SIT AMET CONSECTTURE</h4>
        <hr />
        <p>While it may still be displayed as a horizontal rule.</p>
        <hr />
        <p>Historically, this has been presented as.</p>
        <hr />
        <p>A horizontal rule or line. </p>
        <hr />
        <p> in visual browsers, this element is now defined in semantic.</p>
      </div>
    </section>
  );
};

export default TrustSection;
