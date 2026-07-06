import { useEffect, useState } from "react";

export default function About() {
  const [user, setUsers] = useState([]);
  
  useEffect(() => {
    myData();
  }, []);


  async function myData() {
    const userdata = "https://dummyjson.com/users";
    let extract = await fetch(userdata);
    let response = await extract.json();
    setUsers(response.users);
  }

  return (
    <div>
      <ul>
        {user.map((item) => {
          return <li key={item.id}>{item.firstName}</li>;
        })}
      </ul>
    </div>
  );
}
