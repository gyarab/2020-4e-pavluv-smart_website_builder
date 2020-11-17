import CodeEditor from "./CodeEditor";
import SectionManager from "./SectionManager";
import TabOptions from "./TabOptions";
import IframeEditor from "./IframeEditor";

function Container() {
  return (
    <div id="container">
      <div className="left">
        <SectionManager />
      </div>

      <div className="right">
        <TabOptions />

        <div id="editors">
          <CodeEditor />
          <IframeEditor />
        </div>
      </div>
    </div>
  );
}
export default Container;
