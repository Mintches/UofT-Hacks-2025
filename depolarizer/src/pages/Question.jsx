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
    "It's a sad reflection on our society that something as basic as drinking water is now a bottled, branded consumer product.",
    "The only social responsibility of a company should be to deliver a profit to its shareholders.",
    "The rich are too highly taxed.",
    "Schools should not make classroom attendance compulsory.",
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
              {score <= 10 ? (
                <>
                  <div className="text-3xl my-5 ml-10">
                    The Changing Values of Society: A Shift in Perceptions on
                    Education, Taxation, and Responsibility
                  </div>
                  <div className="main-page h-full mx-5">
                    In recent years, societal attitudes toward foundational
                    issues like education, corporate responsibility, and
                    taxation have undergone significant transformations. A
                    growing segment of individuals is questioning traditional
                    norms and embracing alternative viewpoints that challenge
                    long-standing conventions. Water as a Commodity The
                    commodification of basic necessities like drinking water has
                    been both a reflection of modern society's ingenuity and a
                    subject of criticism. Bottled water, once a luxury, has
                    become a multibillion-dollar industry. Advocates of this
                    shift argue that it reflects the efficiency of markets,
                    ensuring safe drinking water is available even in areas
                    where public infrastructure is lacking. However, critics
                    lament the branding of water, arguing it symbolizes an
                    erosion of collective responsibility to provide basic human
                    needs. The Purpose of Business The debate over corporate
                    social responsibility has also taken center stage. Many
                    argue that a company’s primary duty is to generate profits
                    for its shareholders. This view emphasizes economic growth
                    and innovation, positing that profitable companies
                    contribute to societal progress by creating jobs and
                    stimulating markets. Opponents, however, advocate for a more
                    holistic approach, suggesting businesses should balance
                    profits with environmental stewardship and ethical
                    governance.
                  </div>
                  <img src="./tax.png" className="mx-auto mt-5 h-56 w-80"></img>
                </>
              ) : score <= 15 ? (
                <>
                  <div className="text-3xl my-5 ml-10">
                    The Rise of Neutral Stances in Modern Public Opinion
                  </div>
                  <div className="main-page h-full mx-5">
                    In an increasingly polarized world, it may come as a
                    surprise that more individuals are adopting neutral stances
                    on contentious social, economic, and cultural issues. This
                    trend reflects a growing desire to avoid the extremes of
                    heated debates and seek balanced perspectives in a society
                    often dominated by strong opinions. Balancing Perspectives
                    Neutrality can be seen as a pragmatic approach to questions
                    like the commercialization of basic needs, such as bottled
                    water. Critics argue that branding water as a premium
                    product highlights inequalities in access to resources,
                    while proponents emphasize the convenience and safety it
                    provides in areas lacking clean water infrastructure. For
                    those with a neutral stance, both points hold validity,
                    making it difficult to lean one way or another. The Role of
                    Corporations When it comes to corporate responsibilities,
                    the idea that companies should focus solely on profits is
                    often debated. Supporters view profit-driven strategies as
                    the backbone of economic growth, while detractors call for
                    more socially responsible business models. Neutral
                    individuals tend to see the merit in profit-making as a
                    means to stability while acknowledging that ethical
                    considerations can enhance a company's reputation and
                    societal impact.
                  </div>
                  <img src="./bottle.png" className="mx-auto mt-5 h-56 w-80"></img>
                </>
              ) : (
                <>
                  <div className="text-3xl my-5 ml-10">
                    Breaking News: Global Movement Pushes for Ethical
                    Responsibility and Progressive Policies
                  </div>
                  <div className="main-page h-full mx-5">
                    In a world increasingly shaped by economic disparity,
                    environmental concerns, and evolving social norms, a growing
                    movement is challenging traditional corporate practices, tax
                    policies, and societal expectations. This wave of activism
                    calls for prioritizing human welfare and equity over
                    outdated economic frameworks. Ethical Responsibility Over
                    Profit Critics of profit-centric corporate practices argue
                    that businesses must embrace a broader role in society.
                    Activists point to issues like climate change, labor
                    exploitation, and community displacement as areas where
                    companies have a duty to act responsibly. “Delivering profit
                    to shareholders cannot come at the expense of the planet and
                    people,” said Rebecca White, a sustainability advocate. The
                    push for corporate social responsibility is reshaping
                    consumer expectations, with more people choosing brands that
                    align with ethical values. Calls for Progressive Tax Reforms
                    The debate over taxation on the wealthy has reached a
                    boiling point as economic inequality widens. Advocates for
                    higher taxes on the rich contend that equitable tax policies
                    are essential to fund education, healthcare, and
                    infrastructure. Economists argue that progressive taxation
                    systems not only address disparity but also boost long-term
                    economic stability.
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
