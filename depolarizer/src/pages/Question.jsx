import React, { useState } from "react"

const Question = () => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)

  const opinion = [
    "Strongly Disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly Agree",
  ]

  const questions = [
    "Society should not have something as basic as drinking water be a bottled, branded consumer product.",
    "The only social responsibility of a company should be to deliver a profit to its shareholders.",
    "The rich are too highly taxed.",
    "Schools should NOT make classroom attendance compulsory.",
    "It’s natural for children to keep some secrets from their parents.",
  ]
  const onSubmit = async (index) => {
    setScore(score + index)
    await fetch("http://127.0.0.1:8000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: "Mincy",
        qNum: questionIndex,
        ans: index,
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error fetching data:", error))
    setQuestionIndex(questionIndex + 1)
  }

  return (
    <div className="w-screen h-[calc(100vh-150px)] bg-slate-200 flex">
      <div className="h-full w-40 bg-blue-500"></div>
      <div className="flex-1 h-full flex flex-col items-center justify-around">
        <div className="h-full flex items-center">
          {questionIndex < questions.length ? (
            <div>
              <div className="w-fit mx-auto text-md font-sans text-slate-400 text-justify">
                How strongly do you agree with the following.{" "}
              </div>
              <div className="w-full text-2xl text-center mt-2 font-sans text-slate-600">
                {questions[questionIndex]}
              </div>
              <div className="flex w-fit mx-auto mt-4">
                {opinion.map((o, index) => {
                  return (
                    <div
                      className="py-2 px-4 border-[1px] border-solid border-slate-300 text-slate-400 hover:text-slate-600 rounded-lg mx-2 hover:border-slate-600 hover:cursor-pointer duration-200"
                      onClick={() => onSubmit(index)}
                    >
                      {o}
                    </div>
                  )
                })}
              </div>{" "}
            </div>
          ) : (
            <div>
              {score >= 15 ? (
                <>
                  <div className="text-3xl my-5 ml-10">
                    Why the Wealthy Shouldn't Face Higher Taxes: A Case for Economic Freedom
                  </div>
                  <div className="main-page h-full mx-10">
                  The argument against taxing the rich centers on the idea that higher taxes on the wealthy can stifle innovation, entrepreneurship, and investment. Advocates believe that individuals with substantial wealth often drive economic growth by creating jobs and expanding industries. Imposing heavier taxes could discourage risk-taking and capital investment, ultimately harming the economy. Moreover, the wealthy already contribute a significant portion of tax revenues, and a more efficient tax system focused on broadening the tax base might provide a better solution than penalizing the top earners.
                  </div>
                  <img src="./tax.png" className="mx-auto mt-5 h-56 w-80"></img>
                </>
              ) : score <= 10 ? (
                <>
                  <div className="text-3xl my-5 ml-10">
                    Panicking Over the Environment Is Unproductive: A Call for Rational Action
                  </div>
                  <div className="main-page h-full mx-10">
                    While environmental concerns are valid, panicking and fostering fear can undermine progress. Alarmist rhetoric often leads to hasty, ineffective policies that may do more harm than good. Instead, focusing on data-driven solutions, technological innovation, and gradual, sustainable change will produce more lasting results. A balanced, calm approach encourages collaboration and the development of practical solutions, allowing us to address environmental challenges without the chaos and division that panic often brings.
                  </div>
                  <img src="./bottle.png" className="mx-auto mt-5 h-56 w-80"></img>
                </>
              ) : (
                <>
                  <div className="text-3xl my-5 ml-10">
                    Education Isn't the End-All, Be-All: Embracing Diverse Paths to Success
                  </div>
                  <div className="main-page h-full mx-10">
                    While education is undeniably important, it shouldn't be viewed as the sole determinant of success. Many individuals thrive through hands-on experience, entrepreneurship, and personal growth outside traditional academic settings. The focus should shift from a singular emphasis on formal education to recognizing the value of skills, creativity, and resilience in various fields. By embracing a broader definition of success, we can empower people to explore diverse paths and opportunities that suit their unique strengths and ambitions.
                  </div>
                  <img src="./education.png" className="mx-auto mt-5 h-56 w-80"></img>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="h-full w-40 bg-red-500"></div>
    </div>
  )
}

export default Question
