import { useState, useEffect, useRef } from "react";

import navbarList from "../templates/navbarList";
import footerList from "../templates/footerList";
import contactList from "../templates/contactList";

const collection = [
  { name: "navbar", list: navbarList },
  { name: "footer", list: footerList },
  { name: "contact", list: contactList },
];

function SectionManager() {
  const [sections, setSections] = useState([
    { name: "navbar1", html: "html..." },
    { name: "contact2", html: "html..." },
  ]);
  const [selecting, setSelecting] = useState(false);
  const [position, setPosition] = useState(0);

  function plusClick(number) {
    setPosition(number);
    setSelecting(true);
  }
  function sectionSelect(name, html) {
    setSelecting(false);
    //insert to a position
  }

  return (
    <div id="section-manager">
      <h2>Manage your sections</h2>
      <div className="manager">
        <div className="line">
          <img
            className="plus"
            src="images/plus.svg"
            onClick={() => plusClick(0)}
          />
        </div>
        {sections.map((item, i) => (
          <div key={i} className="section">
            <div>
              <span>{item.name}</span>
              <img className="up" src="images/arrow-up.svg" />
              <img className="down" src="images/arrow-up.svg" />
              <img className="delete" src="images/delete.svg" />
            </div>
            <img
              className="plus"
              src="images/plus.svg"
              onClick={() => plusClick(i + 1)}
            />
          </div>
        ))}
        <div className="line"></div>
      </div>

      <div id="selecting-window" className={selecting ? "active" : ""}>
        <h2>Select a section</h2>
        <img
          className="close"
          src="images/plus.svg"
          onClick={() => setSelecting(false)}
        />
        {collection.map((category, i) => (
          <div key={i}>
            <button className="accordion">{category.name}</button>
            <div className="panel">
              {category.list.map((section, i) => (
                <img
                  src={section.img}
                  onClick={() => sectionSelect(category.name + i, section.html)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SectionManager;
