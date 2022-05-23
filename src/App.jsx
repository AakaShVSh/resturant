// import logo from './logo.svg';
import "./App.css";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Restaurant from "./components/Restaurant";
import offer from "./datas/offerdata.json";
import userinfo from "./datas/userinfo.json";
import restaurant from "./datas/retaurant.json";
import { useState } from "react";

function App() {
  const filter = {
  1: "Cost High to Low",
    2: "Cost Low to High",
    3: "Ratings",
    4: "Delivery Time",
    5: "Relevance"
  };
  const [filterdata, setfilter] = useState("");
  console.log(filterdata)
  const [data, setdata] = useState(restaurant);
 const [search , setsearch]=useState("")
  const updatedata = (value) => {

    switch(value){
      case "1":{
        setfilter(1);
        data.sort((a,b) => b.costfortwo - a.costfortwo )
        setdata(data)
        break;
      }
      case "2":{
        setfilter(2);
        data.sort((a,b) => a.costfortwo - b.costfortwo )
        setdata(data)
        break;
      }
      case "3":{
        setfilter(3);
        data.sort((a,b) => b.rating - a.rating )
        setdata(data)
        break;
      }
      case "4":{
        setfilter(4);
        data.sort((a,b) => a.deliveryTimings - b.deliveryTimings )
        setdata(data)
        break;
      }
      case "5":{
        setfilter(5);
        setdata(restaurant)
        break;
      }
      default:{
        setdata(restaurant)
        break;
      }
    
  }
} 
  return (
    <div className="App">
      <Navbar setsearch={setsearch} usersinfo={userinfo.location} />
      <Offers offer={offer} />
      <section className="near-you">
        <Filter updateby={updatedata} currentfilter={filterdata} filtertext={filter} />
        <Restaurant search={search} restaurant={data} />
      </section>
    </div>
  );
}

export default App;
