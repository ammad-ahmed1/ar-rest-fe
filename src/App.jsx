import "./App.css";
import Layout from "./components/layout/Layout";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <div className="">
        <Layout>
          {/* <Homepage /> */}
          <Menu />
        </Layout>
      </div>
    </>
  );
}

export default App;
