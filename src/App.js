import "./App.css";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Choose from "./components/choose/Choose";
import Articles from "./components/articles/Articles";
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Choose />
      <Articles />
    </div>
  );
}

export default App;
