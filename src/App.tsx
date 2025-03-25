
import { useEffect, useState } from "react";

const targetDate = new Date("2024-12-24").getTime();

const getTimeElapsed = () => {
  const now = new Date().getTime();
  const difference = now - targetDate;

  const seconds = Math.floor((difference / 1000) % 60);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
};


function App() {
  const [timeElapsed, setTimeElapsed] = useState(getTimeElapsed());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(getTimeElapsed());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-svh flex flex-col items-center justify-content-center text-center py-6 px-4">
      <h1 className="text-2xl font-bold text-gray-700">Passaram-se
      </h1>
      <div className="w-full text-2xl flex items-center justify-center gap-2 font-extrabold text-white mt-4">

        <span className="w-24 bg-fuchsia-400 p-4 rounded-xl">{timeElapsed.days}d</span>
        <span className="w-24 bg-fuchsia-400 p-4 rounded-xl">{timeElapsed.hours}h</span>
        <span className="w-24 bg-fuchsia-400 p-4 rounded-xl">{timeElapsed.minutes}m</span>
        <span className="w-24 bg-fuchsia-400 p-4 rounded-xl">{timeElapsed.seconds}s</span>

      </div>

      <div className="flex flex-col items-center justify-center gap-2 mt-8 bg-fuchsia-400 p-5 rounded-xl">
        <p className="text-white">
          <span className="font-semibold">
            Que venci o medo e falei o que sinto por você.
          </span> {' '}

          se passaram <span className="font-semibold">{timeElapsed.days} dias, </span>
          <span className="font-semibold">{timeElapsed.hours} horas,</span> {" "}
          <span className="font-semibold">{timeElapsed.minutes} minutos</span>
          {' '} e <span className="font-semibold">{timeElapsed.seconds} segundos</span>
          {' '} que estou conhecendo uma mulher inclível, sim!!! Uma mulher que me
          encanta a cada segundo, com o seu sorriso, o seu jeito leve de ser, sua delicadeza,
          o seu biquinho e mudança de temperamento que simmm ahhhh!!!
          é muitoo fofooo, me pego sonhando acordado pensando em você todos os dias...
        </p>

        <p className="text-white">
          Oro e peço muito a Deus, que você mozinho, seja minha de fato.
          Des do primeiro dia que falei com você, você fez o meu mundo cinza ter cor novamente, a cada vez que lhe vejo,
          você faz o meu coração acelerar de uma forma indescritivel. Hoje e talvez agora, eu
          não tenho muito para lhe oferecer, mas saiba, que farei o melhor para te ver feliz, segura, realizada.
          Pois você mozinho é aquela draquima muiito linda e delicada que achei, que fiquei
          reparando de longe, que desacreditei e acreditei de novo rsrs. Mozinho você é o meu pedido de oração do inicio ano passado...
        </p>

        <p className="text-white">
          Louco née? Rsrs!! antes de falar com você eu já orava por você. É por isso que eu não vou desistir de você mozinho, não vou mesmo!
          Por isso que digo e falarei: Mosinho Você é perfeita,muitoo mais que lindaa é a mulher sábia de provérbios.
          Por isso mozinhoo eu estou aquii, pode contar comigo para qualquer coisa pois estarei aqui por você.
          Pois só por ser você, só pelo seu jeito, só pela sua essência. você me faz feliz e me encanta a cada dia!!! ❤️
        </p>
      </div>
    </div>
  );
}

export default App
