import { Component } from "react";

export default class Quizcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          Question: "which country invented ice-cream?",
          answerOptions: [
            { answerText: "China", isCorrect: true },
            { answerText: "USA", isCorrect: false },
            { answerText: "Italy", isCorrect: false },
            { answerText: "France", isCorrect: false },
          ],
        },
        {
          Question: "which country is the Land of Morning Calm ?",
          answerOptions: [
            { answerText: "netherlands", isCorrect: false },
            { answerText: "sweden", isCorrect: false },
            { answerText: "South Korea", isCorrect: true },
            { answerText: "North Korea", isCorrect: false },
          ],
        },
        {
          Question: "What is the nearest planet to the sun?",
          answerOptions: [
            { answerText: "Earth", isCorrect: false },
            { answerText: "Mercury", isCorrect: true },
            { answerText: "Mars", isCorrect: false },
            { answerText: "Venus", isCorrect: false },
          ],
        },
        {
          Question: "Which one of following element is not Alkali metal?",
          answerOptions: [
            { answerText: "Lithium", isCorrect: false },
            { answerText: "Sodium", isCorrect: false },
            { answerText: "Magnesium", isCorrect: true },
            { answerText: "francium", isCorrect: false },
          ],
        },
      ],
      qcounter: 0, //this state used to looping through data array to render questions
      score: 0, // this state used to keep track of right answers
      showscore: false, //this state used to show score after last question
    };
  }

  answerHandler(isCorrect) {
    console.log(isCorrect);

    if (isCorrect) {
      this.setState((pervState) => {
        return {
          score: pervState.score + 1,
        };
      });
    }
    if (this.state.qcounter < this.state.data.length - 1) {
      this.setState((pervState) => {
        return {
          qcounter: pervState.qcounter + 1,
        };
      });
    } else {
      this.setState(() => {
        return {
          showscore: true,
        };
      });
    }
  }
  render() {
    return (
      <div className="flex gap-8 w-1/2 h-72 bg-slate-900/90 rounded-lg shadow-2xl justify-center items-center ">
        {!this.state.showscore ? (
          <>
            <div className="w-1/2">
              {this.state.data[this.state.qcounter].Question}
            </div>
            <div className="flex flex-col">
              {this.state.data[this.state.qcounter].answerOptions.map(
                (answer) => (
                  <button
                    className="border-solid border-2 border-indigo-600 mb-4 w-32 text-center cursor-pointer hover:scale-105 rounded-md"
                    onClick={this.answerHandler.bind(this, answer.isCorrect)}
                  >
                    {answer.answerText}
                  </button>
                )
              )}
            </div>
          </>
        ) : (
          <div>
            <h1 className="text-xl">your score is : <span className="text-green-500">{this.state.score}</span> out of <span className="text-fuchsia-600">{this.state.data.length}</span></h1>
          </div>
        )}
      </div>
    );
  }
}
