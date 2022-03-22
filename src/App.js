import "./styles/app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import { useState } from "react";
import ThankYou from "./pages/ThankYou";
function App() {
  const [rating, setRating] = useState(0);
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Form setRating={setRating} rating={rating} />}
          />
          <Route path="/submitted" element={<ThankYou rating={rating} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
