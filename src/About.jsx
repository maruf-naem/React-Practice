import { useEffect, useState } from "react";
function About() {
  const [data, setData] = useState([])

  async function userData() {
    const url = "http://localhost:3000/students"
    let res = await fetch(url)
    res = await res.json()
    setData(res)
  }
  useEffect(() => {
    userData()
  }, [])


  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
            <td>Department</td>
            <td>CGPA</td>
            <td>E-mail</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item)=>{
              return(
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.department}</td>
                  <td>{item.cgpa}</td>
                  <td>{item.email}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default About