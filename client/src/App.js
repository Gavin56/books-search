import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/saved">
          <Saved />
        </Route>
        <Route path="/">
          <Search />
        </Route>


      </Switch>
    </Router>

  );
}

export default App;