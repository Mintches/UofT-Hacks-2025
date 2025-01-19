import React, { useEffect, useState } from "react"

const Question = () => {
  const [questionIndex, setQuestionIndex] = useState(0)

  const opinion = [
    "Strongly Disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly Agree",
  ]
  const questions = [
    "It's a sad reflection on our society that something as basic as drinking water is now a bottled, branded consumer product.",
    "The only social responsibility of a company should be to deliver a profit to its shareholders.",
    "The rich are too highly taxed.",
    "Schools should not make classroom attendance compulsory.",
    "It’s natural for children to keep some secrets from their parents.",
  ]
  const onSubmit = async (index) => {
    await fetch('http://127.0.0.1:8000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        "user_id": "Mincy",
        "qNum": questionIndex,
        "ans": index
      })
    })
    .then(response => response.json())
    .catch(error => console.error('Error fetching data:', error));
    setQuestionIndex(questionIndex + 1)
  }

  return (
    <div className="w-full h-fit flex flex-col items-center">
      {questionIndex < questions.length ? (
        <>
          <div className="w-fit mx-auto text-md font-sans text-slate-400 text-justify">
            How strongly do you agree with the following.{" "}
          </div>
          <div className="w-full text-2xl text-center mt-2 font-sans text-slate-300">
            {questions[questionIndex]}
          </div>
          <div className="flex w-fit mx-auto mt-4">
            {opinion.map((o, index) => {
              return (
                <div
                  className="py-2 px-4 border-[1px] border-solid border-slate-300 text-slate-400 rounded-lg mx-2 hover:border-slate-600 hover:cursor-pointer duration-200"
                  onClick={() => onSubmit(index)}
                >
                  {o}
                </div>
              )
            })}
          </div>{" "}
        </>
      ) : (
        <div>hi</div>
      )}
    </div>
  )
}

export default Question
