import { useEffect } from "react";
import defaultHTML from "../templates/defaultHTML";

function CodeEditor() {
  useEffect(() => {
    setupEditor();
  });

  function setupEditor() {
    window.editor = ace.edit("code");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/html");
    editor.setValue(defaultHTML, 1);

    editor.focus();

    editor.setOptions({
      fontSize: "16pt",
      showLineNumbers: false,
      showGutter: false,
      vScrollBarAlwaysVisible: true,
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
    });

    editor.setShowPrintMargin(false);
    editor.setBehavioursEnabled(false);
  }

  return <div id="code" className="tab"></div>;
}
export default CodeEditor;
