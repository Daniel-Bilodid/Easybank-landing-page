import "./App.css";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Choose from "./components/choose/Choose";
import Articles from "./components/articles/Articles";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <main className="App">
      <Nav />
      <Hero />
      <Choose />
      <Articles />
      <Footer />
    </main>
  );
}

export default App;
