import Quizcard from "./Components/Quizcard";
import Header from "./Components/Header";

function App() {
  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed h-screen text-white flex justify-center items-center pt-2 flex-col relative box-border">
      <Header />
      <Quizcard />
    </div>
  );
}

export default App;
