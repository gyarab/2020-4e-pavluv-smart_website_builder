import { useState, useEffect } from "react";

import navbarList from "../templates/navbarList";
import footerList from "../templates/footerList";
import contactList from "../templates/contactList";

const collection = [
  { name: "navbar", list: navbarList },
  { name: "footer", list: footerList },
  { name: "contact", list: contactList },
];

function SectionManager({ tab, setTab }) {
  const [sections, setSections] = useState([]);
  const [selecting, setSelecting] = useState(false);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setSections(getSections());
  }, [selecting]);

  function getSections() {
    let preview = document.getElementById("preview");
    let sectionElements = preview.contentDocument.querySelectorAll(
      "body > section"
    );
    let newSections = [];
    sectionElements.forEach((item) => {
      newSections.push({ name: item.id });
    });
    return newSections;
  }
  function plusClick(number) {
    setPosition(number);
    setSelecting(true);
    setTab(1);
  }
  function removeSection(id) {
    let section = document
      .getElementById("preview")
      .contentDocument.getElementById(id);
    section.remove();
    setSections(getSections());
    transferToCode();
  }
  function getIframeSections() {
    return document
      .getElementById("preview")
      .contentDocument.querySelectorAll("body > section");
  }
  function sectionSelect(name, html) {
    setSelecting(false);
    insertTo(html, name);
  }
  function transferToCode() {
    if (window.editor) {
      let iframeValue = document.getElementById("preview").contentWindow
        .document.documentElement.innerHTML;
      window.editor.setValue(iframeValue, 1);
    }
  }
  function moveUp(id, i) {
    if (i > 0) {
      let iframeBody = document.getElementById("preview").contentDocument.body;
      let allSections = getIframeSections();
      iframeBody.insertBefore(allSections[i], allSections[i - 1]);

      setSections(getSections());
      transferToCode();
    }
  }
  function moveDown(id, i) {
    if (i < sections.length - 1) {
      let iframeBody = document.getElementById("preview").contentDocument.body;
      let allSections = getIframeSections();
      iframeBody.insertBefore(allSections[i + 1], allSections[i]);

      setSections(getSections());
      transferToCode();
    }
  }
  function insertTo(html, name) {
    let iframeBody = document.getElementById("preview").contentDocument.body;
    let section = document.createElement("section");
    section.id = name + Date.now();
    section.innerHTML = html;

    let allSections = getIframeSections();
    if (allSections.length === 0 || position > allSections.length) {
      iframeBody.appendChild(section);
    } else {
      iframeBody.insertBefore(section, iframeBody.children[position + 1]);
    }
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
              <span>{item.name.slice(0, item.name.indexOf("_"))}</span>
              <img
                className="up"
                src="images/arrow-up.svg"
                onClick={() => moveUp(item.name, i)}
              />
              <img
                className="down"
                src="images/arrow-up.svg"
                onClick={() => moveDown(item.name, i)}
              />
              <img
                className="delete"
                src="images/delete.svg"
                onClick={() => removeSection(item.name)}
              />
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
                  key={i}
                  src={section.img}
                  onClick={() =>
                    sectionSelect(category.name + "_", section.html)
                  }
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
