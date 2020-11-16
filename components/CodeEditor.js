import { useEffect } from "react";
function CodeEditor({ preview, active }) {
  useEffect(() => {
    setupEditor();
    update();
  });

  function update() {
    var idoc = document.getElementById(preview).contentWindow.document;

    idoc.open();
    idoc.write(editor.getValue());
    idoc.close();
  }

  function setupEditor() {
    window.editor = ace.edit("code");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/html");
    editor.setValue(defaultHTML, 1); //1 = moves cursor to end

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

  return <div id="code" className={`tab ${active && "active"}`}></div>;
}
export default CodeEditor;

const defaultHTML = `<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>TITLE</title>
  <link rel="icon" href="img/mdb-favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/mdb.min.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body style='background: white'>

  <!-- Start -->  
  CONTENT
  <!-- End -->

  <script type="text/javascript" src="js/jquery.min.js"></script>
  <script type="text/javascript" src="js/popper.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/mdb.min.js"></script>
  <script type="text/javascript"></script>
</body>
</html>`;
