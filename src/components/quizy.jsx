import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import play from "../assets/loop.wav";
import wrong from "../assets/err.wav";
import correct from "../assets/right.wav";
export default function Quizy({data,setStop,questionNumber,setquestionNumber}) {
  const [question,setQuestion]=useState(null);
  const [selectedAnswer,setSelectedAnswer]=useState(null);
  const [className,setClassName]=useState("answer");

/*  const [correctAnswer] = useSound(correct);
  const [WrongAnswer] = useSound(wrong);*/


useEffect(()=>{
  setQuestion(data[questionNumber-1]);
},[data,questionNumber]);
const delay =(duration,callback)=>{
  setTimeout(()=>{
    callback();
  },duration);
};
const handleClick=(a)=>{
  setSelectedAnswer(a);
  setClassName("answer active");
  delay(3000,()=>
  setClassName(a.correct ? "answer correct":"answer wrong")
  );
  delay(6000,()=>
  {
    if(a.correct){
      setquestionNumber((prev)=>prev+1);
      setSelectedAnswer(null);
    }
    else{
      setStop(true);
    }
  }
  );
 
};


  return (
    <div className="quizy">
        <div className="question">{question?.question}</div>
        <div className="answers">{
          question?.answers.map((a)=>( 
          <div className={selectedAnswer === a? className :"answer"} 
          onClick={()=>handleClick(a)}>{a.text}</div>))
        }   
        </div>
    </div>
  )
}
