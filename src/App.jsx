// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import { useState } from "react";
import Learner from "./components/Learner";

function App() {
  const [learnerData] = useState({
    learners: [
      {
        name: "Cait Yomorta",
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit...",
        scores: [
          { date: "2018-02-08", score: 77 },
          { date: "2018-04-22", score: 92 },
          { date: "2018-09-15", score: 68 },
        ],
      },
      {
        name: "Holly Baird",
        bio: "Eum molestiae explicabo deserunt...",
        scores: [
          { date: "2018-12-14", score: 88 },
          { date: "2019-01-09", score: 79 },
          { date: "2019-02-23", score: 91 },
        ],
      },
      {
        name: "Wes Mungia",
        bio: "Repudiandae veritatis recusandae quidem...",
        scores: [
          { date: "2018-10-11", score: 62 },
          { date: "2018-11-24", score: 74 },
          { date: "2018-12-19", score: 85 },
        ],
      },
    ],
  });

  return (
    <div>
      <h1>Learner List</h1>
      {learnerData.learners.map((learner, index) => (
        <Learner key={index} learner={learner} />
      ))}
    </div>
  );
}

export default App;

