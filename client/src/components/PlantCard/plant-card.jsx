import "./plant-card.css";
import { useNavigate } from "react-router-dom";

const PlantCard = (props) => {
  const navigate = useNavigate();

  // console.log(props)
  return (
    <div
      className="card"
      
    >
      <div className="card-in"
      onClick={() =>
        navigate("/desc", {
          state: {
            id: 1,
            name: props.sciName,
            img: props.img,
            comName: props.name,
          },
        })
      }>
        <img src="/Group 19 (1).png" alt="yop" className="tem" />
        <div className="image-con">
          <img src={props.img} alt="" className="image" />
        </div>
        <div className="name-conn">
          <h1 className="common-name">{props.name}</h1>
        </div>
        <div className="name-conn2">
          <p className="sci-name">{props.sciName}</p>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
