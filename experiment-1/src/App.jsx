import Dashboard from "./components/Dashboard"
import Logs from "./components/Logs";
import logs from "./data/logs"
import WindowSize from "./components/WindowSize";

function App() {

  return (
    <div>
      <Dashboard logs={logs} />
      <Logs logs={logs} />
      <WindowSize />
    </div>
  )
}

export default App;