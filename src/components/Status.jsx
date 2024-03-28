import React from "react";
import "../styles/Status.css";

const Status = () => {
  return (
    <section className="status">
    {/* box 1 */}
      <div className="delevery--box">
        <h1>890</h1>
        <div className="delevery">
          <h2>890</h2>
          <h3>
            Delivered <br /> packages
          </h3>
        </div>
      </div>

      {/* box 2 */}
      <div className="delevery--box">
        <h1>137</h1>
        <div className="delevery">
          <h2>137</h2>
          <h3>
            Countries <br /> covered
          </h3>
        </div>
      </div>

      {/* box 3 */}
      <div className="delevery--box">
        <h1>740</h1>
        <div className="delevery">
          <h2>740</h2>
          <h3>
            Tons<br /> Goods
          </h3>
        </div>
      </div>

      {/* box 4 */}
      <div className="delevery--box">
        <h1>600</h1>
        <div className="delevery">
          <h2>600</h2>
          <h3>
            Satisfied <br /> Clients
          </h3>
        </div>
      </div>
      
    </section>
  );
};

export default Status;
