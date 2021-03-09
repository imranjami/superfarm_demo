import "./App.css"
import Footer from "./Footer"
import Header from "./Header"
import ProductCard from "./ProductCard"

function App() {
  return (
    <div className="app">
      <Header />
      <div className="cards">
        <ProductCard />
        <ProductCard />
      </div>

      <Footer />
    </div>
  )
}

export default App
