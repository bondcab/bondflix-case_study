import "./App.css";
import TitleView from "./components/TitleView";
import OverView from "./components/OverView";
import PurposeView from "./components/Purpose";
import ObjectiveView from "./components/ObjectiveView";
import ServerSideView from "./components/ServerSideView";
import ClientSideView from "./components/ClientSideView";
import PageView from "./components/PageView";
import RetrospectiveView from "./components/RetrospectiveView";
import DurationView from "./components/DurationView";

function App() {
  return (
    <div className="App">
      <TitleView />
      <OverView />
      <PurposeView />
      <ObjectiveView />
      <DurationView />
      <ServerSideView />
      <ClientSideView />
      <PageView />
      <RetrospectiveView />
    </div>
  );
}

export default App;
