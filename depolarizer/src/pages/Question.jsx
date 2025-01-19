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
              <div className="text-3xl my-5 ml-10">
                AI-Powered Drones to Revolutionize Agriculture by 2030
              </div>
              <div className="main-page h-full mx-5">
                In a groundbreaking development for the agriculture industry, a
                coalition of tech companies and agronomists has unveiled a fleet
                of AI-powered drones designed to optimize crop yields and reduce
                environmental impact. The announcement, made at the
                International Agri-Tech Conference in Amsterdam, has sparked
                widespread interest among farmers, environmentalists, and
                technologists alike. The drones, which use advanced machine
                learning algorithms and multispectral imaging, can monitor crop
                health, detect pests, and assess soil conditions in real time.
                By providing actionable insights, these drones promise to reduce
                the need for chemical pesticides and fertilizers, significantly
                lowering costs and environmental damage. "This technology
                represents a quantum leap for sustainable agriculture," said Dr.
                Elena Morales, lead researcher at AgriBotics, one of the
                companies spearheading the initiative. "We’re leveraging AI to
                ensure that every seed and every drop of water is used as
                efficiently as possible." Farmers participating in early trials
                have reported remarkable results, with some noting a 30%
                increase in crop yield and a 20% reduction in water usage.
                However, the innovation hasn’t come without its challenges.
                Critics warn of potential risks, including over-reliance on
                technology and issues surrounding data privacy. "Farmers need to
                have clear ownership and control over the data these drones
                collect," said James Peterson, a representative of the Farmers’
                Union. The drones are expected to hit the commercial market by
                mid-2026, with projections estimating that over 40% of
                large-scale farms could adopt the technology by 2030. Meanwhile,
                policymakers are exploring ways to regulate and subsidize this
                new wave of agricultural tech to ensure it benefits small-scale
                farmers as much as it does large agribusinesses. "The future of
                farming is here," Dr. Morales concluded. "And it's flying above
                us."
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="h-full w-40 bg-red-500"></div>
    </div>
  )
}

export default Question
