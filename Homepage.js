// import React, { useState, useEffect } from "react";
// import "./App.css";

// const gitHubUrl = "https://api.github.com/users/deekshasharma ";
// // const gitHubUrl = "http://localhost:3001/list";


// function App() {
//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     getGitHubUserWithFetch();
//   }, []);

//   const getGitHubUserWithFetch = async () => {
//     const response = await fetch(gitHubUrl);
//     const jsonData = await response.json();
//     setUserData(jsonData);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>Homepage  Data</h2>
//       </header>
//       <div className="user-container">
//         <h5 className="info-item">{userData.name}</h5>
//         <h5 className="info-item">{userData.location}</h5>
//         <h5 className="info-item">{userData.blog}</h5>
//         <h5 className="info-item">{userData.company}</h5>
//       </div>
//     </div>
//   );
// }

// export default App;