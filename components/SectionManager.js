import { useState, useEffect } from "react";

import navbarList from "../templates/navbarList";
import footerList from "../templates/footerList";
import coversList from "../templates/coversList";
import contactList from "../templates/contactList";
import contentList from "../templates/contentList";
import faqList from "../templates/faqList";
import servicesList from "../templates/servicesList";
import stepsList from "../templates/stepsList";
import galleryList from "../templates/galleryList";
import mapsList from "../templates/mapsList";
import videoList from "../templates/videoList";
import pricingList from "../templates/pricingList";
import formsList from "../templates/formsList";
import calltoactionList from "../templates/calltoactionList";

//array of imported templated sections
const collection = [
  { name: "navbar", list: navbarList },
  { name: "covers", list: coversList },
  { name: "cta", list: calltoactionList },
  { name: "content", list: contentList },
  { name: "contact", list: contactList },
  { name: "forms", list: formsList },
  { name: "gallery", list: galleryList },
  { name: "video", list: videoList },
  { name: "pricing", list: pricingList },
  { name: "maps", list: mapsList },
  { name: "services", list: servicesList },
  { name: "faq", list: faqList },
  { name: "steps", list: stepsList },
  { name: "footer", list: footerList },
];

//handles manipulation of sections
function SectionManager({ setTab }) {
  const [sections, setSections] = useState([]);
  const [selecting, setSelecting] = useState(false);
  const [position, setPosition] = useState(0);

  //loads sections
  useEffect(() => {
    setSections(getSections());
  }, [selecting]);

  //gets sections from preview (only direct children)
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
  //user starts selecting
  function plusClick(number) {
    setPosition(number);
    setSelecting(true);
    setTab(1);
  }
  //removes section with specific id
  function removeSection(id) {
    let section = document
      .getElementById("preview")
      .contentDocument.getElementById(id);
    section.remove();
    setSections(getSections());
    transferToCode();
  }
  //gets all direct children from preview (iframe)
  function getIframeSections() {
    return document
      .getElementById("preview")
      .contentDocument.querySelectorAll("body > section");
  }
  //after clicking on selected section integrate the template
  function sectionSelect(name, html) {
    setSelecting(false);
    insertTo(html, name);
  }
  //transfers form iframe to code editor
  function transferToCode() {
    if (window.editor) {
      let iframeValue = document.getElementById("preview").contentWindow
        .document.documentElement.innerHTML;
      window.editor.setValue(iframeValue, 1);
    }
  }
  //moves specific section up
  function moveUp(id, i) {
    if (i > 0) {
      let iframeBody = document.getElementById("preview").contentDocument.body;
      let allSections = getIframeSections();
      iframeBody.insertBefore(allSections[i], allSections[i - 1]);

      setSections(getSections());
      transferToCode();
    }
  }
  //moves specific section down
  function moveDown(id, i) {
    if (i < sections.length - 1) {
      let iframeBody = document.getElementById("preview").contentDocument.body;
      let allSections = getIframeSections();
      iframeBody.insertBefore(allSections[i + 1], allSections[i]);

      setSections(getSections());
      transferToCode();
    }
  }

  //apply specific section
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
      <div className="manage-header">
        <img src="/images/logo.svg" />
        <h2>Manage your sections</h2>
      </div>
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
