import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TreeIdentifier from "./components/TreeIdentifier";
import TreeList from "./components/TreeList";
import Home from "./components/Home";

const styles = {
  contentWrapper: {
    paddingBottom: '40px', // This should match your footer's height
  }
};


function App() {
  return (
    <Router>
      <div>
        <Header />
        <div style={styles.contentWrapper}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/identify" element={<TreeIdentifier />} />
            <Route path="/treelist" element={<TreeList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
