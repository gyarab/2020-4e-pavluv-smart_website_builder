import { useEffect } from "react";
import defaultHTML from "./defaultHTML";

function IframeEditor() {
  useEffect(() => {
    setValue(defaultHTML);
  });

  function setValue(value) {
    var idoc = document.getElementById("preview").contentWindow.document;
    if (idoc) {
      idoc.open();
      idoc.write(value);
      idoc.close();
    }
  }
  return <iframe id="preview" className="tab"></iframe>;
}

export default IframeEditor;
