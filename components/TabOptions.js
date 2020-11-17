import { useState, useEffect } from "react";

function TabOptions() {
  const [tab, setTab] = useState(1);

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

  function transferToIframe(preview) {
    if (window.editor) {
      let editorValue = window.editor.getSession().getValue();
      var idoc = preview.contentWindow.document;
      if (idoc) {
        idoc.open();
        idoc.write(editorValue);
        idoc.close();
      }
    }
  }
  function transferToCode(preview) {
    if (window.editor) {
      let iframeValue =
        preview.contentWindow.document.documentElement.innerHTML;
      window.editor.setValue(iframeValue, 1);
    }
  }

  return (
    <div id="tab-options">
      <a className={tab === 0 ? "active" : ""} onClick={() => setTab(0)}>
        Code
      </a>
      <a className={tab === 1 ? "active" : ""} onClick={() => setTab(1)}>
        Preview
      </a>
    </div>
  );
}
export default TabOptions;
