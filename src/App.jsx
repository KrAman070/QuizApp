import { useEffect, useMemo } from "react";
import { useState } from "react";
import "./app.css";
import Quizy from "./components/quizy";
import Timer from "./components/timer";


function App() {
  const [questionNumber,setquestionNumber]=useState(1);
  const [stop,setStop]=useState(false);
  const[earned, setEarned]= useState("₹ 0");
  const data=[{
    id:1,
    question:"Which company's share price is highest in india?",
    answers: [{
      text : "Reliance",
      correct:false,
    },
    {
      text : "Tata",
      correct:false,
    },
    {
      text : "MRF",
      correct:true,
    },
    {
      text : "Adani groups",
      correct:false,
    }
    ],
  },
  {
    id:2,
    question:"which of the folllowing ingradient is not used in making Maalpua?",
    answers: [{
      text : "Suagr",
      correct:false,
    },
    {
      text : "Milk",
      correct:false,
    },
    {
      text : "Refine oil",
      correct:false,
    },
    {
      text : "Onion",
      correct:true,
    }
    ],
  },
  {
    id:3,
    question:"How young is Aman?",
    answers: [{
      text : "Less than 15",
      correct:false,
    },
    {
      text : "15-20",
      correct:true,
    },
    {
      text : "20-26",
      correct:false,
    },
    {
      text : "Greater than 26",
      correct:false,
    }
    ],
  },
  {
    id:4,
    question:"which is the most beautiful NIT in India?",
    answers: [{
      text : "NIT Calicut",
      correct:false,
    },
    {
      text : "NIT Surat",
      correct:false,
    },
    {
      text : "NIT Hamirpur",
      correct:true,
    },
    {
      text : "NIT Trichy",
      correct:false,
    }
    ],
  },
  {
    id:5,
    question:"Who loves you most?",
    answers: [{
      text : "Papa",
      correct:true,
    },
    {
      text : "Friend",
      correct:false,
    },
    {
      text : "Mummmy",
      correct:true,
    },
    {
      text : "Grand maa",
      correct:true,
    }
    ],
  }];
  const moneypyramid= useMemo(()=>
    [
      {
        id:1,
        amount:"₹10000"
      },
      {
        id:2,
        amount:"₹18000"
      },
      {
        id:3,
        amount:"₹25000"
      },
      {
        id:4,
        amount:"₹40000"
      },
      {
        id:5,
        amount:"₹60000"
      },
      {
        id:6,
        amount:"₹85000"
      },
      {
        id:7,
        amount:"₹100000"
      },
      {
        id:8,
        amount:"₹150000"
      },
      {
        id:9,
        amount:"₹250000"
      },
      {
        id:10,
        amount:"₹300000"
      },
      {
        id:11,
        amount:"₹400000"
      },
      {
        id:12,
        amount:"₹550000"
      },
      {
        id:13,
        amount:"₹630000"
      },
      {
        id:14,
        amount:"₹700000"
      },
      {
        id:15,
        amount:"₹900000"
      },
    ].reverse(),[]);
    
  useEffect(()=>{
    questionNumber>1 && 
    setEarned(moneypyramid.find((m)=>m.id ===questionNumber-1).amount);
  },[moneypyramid, questionNumber]);

  
  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <h1 className="earn">you earned:{earned}</h1>
        ):(<>
          <div className="top">
          <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
          </div>
          <div className="bottom">
            <Quizy
            data={data}
            setStop={setStop}
            questionNumber={questionNumber}
            setquestionNumber={setquestionNumber}
            />
          </div>
          </>
        )}
       
      </div>
      <div className="pyramid">
        <ul className="moneylist">
          {moneypyramid.map((m)=>(
          <li className={questionNumber===m.id ? "moneylistitem active": "moneylistitem"}>
            <span className="moneylistitemnumber">{m.id}</span>
            <sapn className="moneylistitemamount">{m.amount}</sapn>
          </li>
          ))}
         
         
        </ul>
      </div>
  </div>
  );
}

export default App;
