import { useEffect, useState } from "react";
import CodeEditor from "./CodeEditor";
import SectionManager from "./SectionManager";

function Container() {
  const [tab, setTab] = useState(1);

  return (
    <div id="container">
      <div className="left">
        <SectionManager />
      </div>

      <div className="right">
        <div id="tab-options">
          <a className={tab === 0 && "active"} onClick={() => setTab(0)}>
            Code
          </a>
          <a className={tab === 1 && "active"} onClick={() => setTab(1)}>
            Preview
          </a>
        </div>

        <div id="editor">
          <CodeEditor preview="preview" active={tab === 0} />
          <iframe
            id="preview"
            className={`tab ${tab === 1 && "active"}`}
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Container;
