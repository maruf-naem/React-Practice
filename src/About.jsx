import { useEffect } from "react";

function About() {
  async function studentData() {
    const url = "http://localhost:3000/students";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
  }

  useEffect(() => {
    studentData();
  });
}

export default About;
