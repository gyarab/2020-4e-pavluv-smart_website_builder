import { useState } from "react";

function SectionManager() {
  const [data, setData] = useState([{ name: "blabla1" }, { name: "blabla2" }]);
  const [selecting, setSelecting] = useState(true);

  return (
    <div id="section-manager">
      <h2>Manage your sections</h2>

      <div className="manager">
        <div className="line">
          <img className="plus" src="images/plus.svg" />
        </div>
        {data.map((item, i) => (
          <div key={i} className="section">
            <div>
              <span>name</span>
              <img className="up" src="images/arrow-up.svg" />
              <img className="down" src="images/arrow-up.svg" />
              <img className="delete" src="images/delete.svg" />
            </div>
            <img className="plus" src="images/plus.svg" />
          </div>
        ))}
        <div className="line"></div>
      </div>

      <div id="selecting-window" className={selecting ? "active" : ""}>
        <h2>Select a section</h2>

        <button className="accordion">Section 1</button>
        <div className="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button className="accordion">Section 2</button>
        <div className="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button className="accordion">Section 3</button>
        <div className="panel">
          <p>Lorem ipsum...</p>
        </div>
      </div>
    </div>
  );
}
export default SectionManager;
