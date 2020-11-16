import { useEffect, useState } from "react";
import CodeEditor from "./CodeEditor";

function Container() {
  const [tab, setTab] = useState(1);

  return (
    <div id="container">
      <div className="left">panelpanelpanelpanelpanelpanel</div>

      <div className="right">
        <div className="tab-options">
          <a onClick={() => setTab(0)}>Code</a>
          <a onClick={() => setTab(1)}>Visual</a>
        </div>

        <div className="editor">
          <CodeEditor preview="preview" active={tab === 0} />
          <iframe
            id="preview"
            className={`preview-tab tab ${tab === 1 && "active"}`}
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Container;
