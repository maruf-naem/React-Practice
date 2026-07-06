// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { NavItem } from "react-bootstrap";

const App = () => {
  const [userData, setUserData] = useState(null); // Initialized as null
  const [openingday, setOpeningday] = useState([]);

  function opentime(openingHoursObject) {
    if (!openingHoursObject) return;

    // Object.keys(x) automatically extracts all the keys (days) into an array
    const daysArray = Object.keys(openingHoursObject);
    setOpeningday(daysArray);
    console.log(openingday);
  }

  async function callApi() {
    const url = "http://localhost:3000/store";
    let res = await fetch(url);
    let data = await res.json();
    setUserData(data);
    opentime(data.openingHours); // Process days immediately when data arrives
  }

  // Call this function inside the API fetch success block
  useEffect(() => {
    callApi();
  }, []);

  // Show a loading screen while the API fetches data
  if (!userData) {
    return <div>Loading store data...</div>;
  }

  return (
    <div>
      <header>
        <div className="header">
          <h1 className="shopName">{userData.name}</h1>
          <div className="headerImages">
            <img
              src="./src/images/cartIcon.jpg"
              alt="cart image"
              className="cartIcon"
            />
            <img
              src="./src/images/profile.png"
              alt=""
              className="profileIcon"
            />
          </div>
        </div>
      </header>
      <main>
        <div className="mainContent">
          <div className="locationDiv">
            <img src="./src/images/mapIcon.jpeg" alt="" />
            <div>
              <h2>
                {userData.location?.city + ", " + userData.location?.country}
              </h2>
              <p>{`Zip: ${userData.location?.zip}`}</p>
            </div>
          </div>
          <div>
            {userData.isOpen ? (
              <div className="open_close">
                <img src="./src/images/open.jpg" />
                <p>Shop is Open</p>
              </div>
            ) : (
              <div className="open_close  bg_red">
                <img src="./src/images/close.jpg" />
                <p>Shop is Close</p>
              </div>
            )}
          </div>
          <div>
            <h3>Opening time:</h3>
            <ul>
              {openingday.map((day) => (
                <li key={day}>
                  {day}: {userData.openingHours[day]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
