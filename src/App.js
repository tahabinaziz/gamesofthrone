import Layout from "./layout";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/Router/AppRouter";
function App() {
  return (
    <>
      <Router>
        <Layout>
          <AppRouter />
        </Layout>
      </Router>
    </>
  );
}

export default App;
