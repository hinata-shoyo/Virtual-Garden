import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import "./desc.css";
import axios from "axios";
import { useLocation } from "react-router-dom";


const Desc = (props) => {
  const location = useLocation();

  // const [plant, setPlant] = useState("Quercus_rotundifolia");
  const [data, setData] = useState('')

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=15&titles=${location.state.name}&format=json&origin=*`
      );
      const pageID = Object.keys(response.data.query.pages)[0]
      console.log(response.data.query.pages[pageID].extract);
      setData(response.data.query.pages[pageID].extract)
      
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    // document.getElementById("nav").focus()
    getData();
    console.log(location.state.comName)
  }, []);

  return (
    <div className="desc-con" id="nav">
      <Navbar  />
      <div>
        <img src="/desc19.svg" alt="" className="desc" />
        <div dangerouslySetInnerHTML={{ __html:data}} className="plant-data"></div>
        <div className="plnt-name">{location.state.comName}</div>
        <div className="plant-imgcon">
          <img
            src={location.state.img}
            alt=""
            className="plant-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Desc;
