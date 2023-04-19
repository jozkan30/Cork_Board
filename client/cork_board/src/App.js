import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/wines")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return( 
  <div>
    <Header />
    <div className="listings">
    {data.map((info)=>(
    <Card 
    winery={info.winery}
    grapes={info.grapes} 
    vintage={info.vintage} 
    region={info.region} 
    country={info.country} 
    desc={info.desc} 
    rating={info.rating} 
    comments={info.comments}
    />
    ))}
    </div>
  </div>
  )
}

export default App;
