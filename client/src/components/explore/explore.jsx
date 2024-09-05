import PlantCard from "../PlantCard/plant-card";
import Navbar from "../navbar/navbar";
import "./explore.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/joy/CircularProgress";

const Explore = () => {
  const [plants, setPlants] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // const [index, setIndex] = useState(1);

  const getdata = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/`);
      console.log(response.data.response.token);
      const token = response.data.response.token;
      const reponse = await axios.get(
        `https://trefle.io/api/v1/plants?page=${page}&token=${token}`
      );
      console.log(reponse.data.data);
      setPlants(reponse.data.data);
      setLoading(true)
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (currPage) => {
    setPage(currPage);
  };

  useEffect(() => {
    getdata();
  }, [page]);

  // if (loading) {
  //   return(
  //     <CircularProgress value={24} />
  //   )
  // }

  return (
    <div className="page">
      <Navbar />
      <p className="exploreTIT" id="explore">EXPLORE</p>
      <input type="search" className="search" placeholder="Search" />

      <div className="cards" >
        { !loading && <CircularProgress value={24} color="success" className="centerLoad"/>}
        {loading &&
          plants.map((plant) => {
            return (
              <PlantCard
                className="cardd"
                img={plant.image_url}
                name={plant.common_name}
                sciName={plant.scientific_name}
                key={plant.id}
              />
            );
          })}
      </div>
      <div className="center">
        <div className="pagination">
          <a href="#explore">

          <button
            onClick={() => {
              setPage(page - 1);
              
            }}
            disabled={page === 1}
            
            >
            &laquo;
          </button>
            </a>

          {/* {
            for(; index<index+6;index++){

                <button className={index === page? 'active':''}>index</button>
            }
        } */}
        <a href="#explore">

          <button onClick={() => setPage(page + 1)}>&raquo;</button>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Explore;
