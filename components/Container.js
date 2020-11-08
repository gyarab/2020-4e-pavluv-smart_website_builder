import { useEffect, useState } from "react";
function Container() {
  const [tab, setTab] = useState(0);
  useEffect(() => {
    setupEditor();
    update();
  });
  function update() {
    var idoc = document.getElementById("preview").contentWindow.document;

    idoc.open();
    idoc.write(editor.getValue());
    idoc.close();
  }

  function setupEditor() {
    window.editor = ace.edit("code");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/html");
    editor.setValue(
      `<!DOCTYPE html>
<html>
<head>
</head>

<body>
</body>

</html>`,
      1
    ); //1 = moves cursor to end

    editor.getSession().on("change", function () {
      update();
    });

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

  return (
    <div id="container">
      <div className="tabs">
        <a onClick={() => setTab(0)}>Code</a>
        <a onClick={() => setTab(1)}>Visual</a>
      </div>

      <div className="editor">
        <div id="code" className="code-tab"></div>
        <iframe id="preview" className="preview-tab" frameBorder="0"></iframe>
      </div>
    </div>
  );
}
export default Container;
