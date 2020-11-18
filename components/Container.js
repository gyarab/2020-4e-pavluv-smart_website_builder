import { useState } from "react";
import CodeEditor from "./CodeEditor";
import SectionManager from "./SectionManager";
import TabManager from "./TabManager";
import IframeEditor from "./IframeEditor";

function Container() {
  const [tab, setTab] = useState(1);

  return (
    <div id="container">
      <div className="left">
        <SectionManager tab={tab} setTab={setTab} />
      </div>

      <div className="right">
        <TabManager tab={tab} setTab={setTab} />

        <div id="editors">
          <CodeEditor />
          <IframeEditor />
        </div>
      </div>
    </div>
  );
}
export default Container;
