import { useState } from "react";

function App() {

  const [quote, setQuote] = useState({
    id: 91,
    advice: 'if you want to go faster than go alone, if you want to go further than go together',
  })

  const getAdvice = async () => {
    try{
      let response = await fetch("https://api.adviceslip.com/advice", {cache: 'no-cache'});
      let responseJSON = await response.json();

      let data = responseJSON.slip;

      setQuote({
        id: data.id,
        advice: data.advice,
      })
      console.log(quote.id, quote.advice);
    }
    catch (e) {
      console.error(e);
    }
  }

  return (
    <div className=" w-screen h-screen bg-dark-blue flex justify-center items-center font-Manrope">
      <div className=" bg-dark-grayish-blue w-[90%] h-[50%] rounded-lg drop-shadow-2xl flex flex-col justify-center items-center text-center">
        <p id="id" className=" text-neon-green tracking-[0.3rem] text-sm uppercase py-2">Advice {quote.id}</p>
        <h1 id="advice" className=" text-light-cyan text-2xl my-4 px-2">"{quote.advice}"</h1>
        <button onClick={getAdvice} className="bg-neon-green my-2 rounded-full p-4 hover:bg-light-cyan transition transform hover:scale-105">
          <img src="/images/icon-dice.svg" alt="Icon Dice" />
        </button>
      </div>
    </div>
  )
}

export default App
