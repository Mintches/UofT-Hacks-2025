import React, { useState } from "react"

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
  const onSubmit = (index) => {}

  return (
    <div className="w-full h-fit flex flex-col items-center">
      <div className="w-fit mx-auto text-md font-sans text-slate-700 text-justify">
        How strongly do you agree with the following.{" "}
      </div>
      <div className="w-full text-2xl text-center mt-2 font-sans text-slate-700">
        {questions[questionIndex]}
      </div>
      <div className="flex w-fit mx-auto mt-4">
        {opinion.map((o, index) => {
          return (
            <div
              className="py-2 px-4 border-[1px] border-solid border-slate-300 text-slate-600 rounded-lg mx-2 hover:border-slate-600 hover:cursor-pointer duration-200"
              onClick={onSubmit(index)}
            >
              {o}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Question
