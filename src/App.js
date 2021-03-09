import "./App.css"
import Footer from "./Footer"
import Header from "./Header"
import ProductCard from "./ProductCard"
import { motion } from "framer-motion"

function App() {
  return (
    <div className="app">
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: "0vh" }}
        transition={{ type: "ease-in", duration: 1 }}
      >
        <Header />
      </motion.div>

      <motion.div
        className="cards"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <ProductCard />
        <ProductCard />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Footer />
      </motion.div>
    </div>
  )
}

export default App
