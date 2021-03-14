import { useEffect } from "react";
import defaultHTML from "../templates/defaultHTML";

//handles top bar actions (tabs + download)
function TabManager({ tab, setTab }) {
  //handles tab selection (only active one (iframe/code) is visible)
  useEffect(() => {
    let code = document.getElementById("code");
    let preview = document.getElementById("preview");

    if (code && preview) {
      if (tab === 0) {
        code.classList.add("active");
        preview.classList.remove("active");
        transferToCode(preview);
      } else {
        code.classList.remove("active");
        preview.classList.add("active");
        transferToIframe(preview);
      }
    }
  }, [tab]);

  //transfers a content from the code to the iframe editor
  function transferToIframe(preview) {
    let editorValue =
      (window.editor && window.editor.getSession().getValue()) || defaultHTML;
    let idoc = preview.contentWindow.document;
    if (idoc) {
      idoc.open();
      idoc.write(editorValue);
      idoc.close();
    }
  }
  //transfers a content from the iframe to the code editor
  function transferToCode(preview) {
    if (window.editor) {
      let iframeValue =
        preview.contentWindow.document.documentElement.innerHTML;
      window.editor.setValue(iframeValue, 1);
    }
  }
  //handles downlaod click
  function downloadClick() {
    let content = "";
    if (tab === 0) {
      content = window.editor.getSession().getValue();
    } else {
      content = preview.contentWindow.document.documentElement.innerHTML;
    }
    download("website.html", content.replace('contenteditable="true"', ""));
  }

  //downlaod the created website
  function download(filename, text) {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/html;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  return (
    <div id="tab-options">
      <div className="options">
        <a className={tab === 0 ? "active" : ""} onClick={() => setTab(0)}>
          Code
        </a>
        <a className={tab === 1 ? "active" : ""} onClick={() => setTab(1)}>
          Visual
        </a>
      </div>
      <a className="download" onClick={downloadClick}>
        download
      </a>
    </div>
  );
}
export default TabManager;
