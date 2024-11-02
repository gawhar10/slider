import { useState } from "react";
import { profiles } from "./profile";
const App = () => {
  const [index, setIndex] = useState(0);
  const checkIndex = (num) => {
    if (num > profiles.length - 1) {
      return 0;
    } else if (num < 0) {
      return profiles.length - 1;
    } else {
      return num;
    }
  };

  const nextBtnHandler = (num) => {
    let newIndex = num + 1;
    newIndex = checkIndex(newIndex);
    setIndex(newIndex);
  };

  const previousBtnHandler = (num) => {
    let newIndex = num - 1;
    newIndex = checkIndex(newIndex);
    setIndex(newIndex);
  };

  return (
    <section>
      <div>
        <Profile profile={profiles[index]} />
        <div className="hr_container-3">
          <button onClick={() => previousBtnHandler(index)}>
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <button onClick={() => nextBtnHandler(index)}>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
      </div>
    </section>
  );
};

const Profile = (props) => {
  const { id, img, name, designation, summery } = props.profile;
  return (
    <>
      <div className="hr_container-1">
        <img src={img} alt={name}></img>
        <p>{summery}</p>
      </div>
      <div className="hr_container-2">
        <div>
          {profiles.map((item) => {
            return item.id === id ? (
              <button className="active_profile" key={item.id}></button>
            ) : (
              <button key={item.id}></button>
            );
          })}
        </div>
        <div>
          <h1>{name.toUpperCase()}</h1>
          <h2>{designation.toUpperCase()}</h2>
        </div>
      </div>
    </>
  );
};

export default App;
