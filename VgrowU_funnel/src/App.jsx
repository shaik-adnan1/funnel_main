// import { useState } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./routes/navigation/navigation.component";
// import { TextEffectPerWord } from "./TextEffectPerWord";
import { Home } from "./routes/home/home.component";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
