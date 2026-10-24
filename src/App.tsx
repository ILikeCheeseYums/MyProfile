import React, { useState, useEffect, useMemo } from 'react';
export default function App(){

  return(
  <div className="bg-linear-to-b from-[rgb(191,231,255)] to-[rgb(113,177,255)] min-h-screen flex flex-col">
  <NavBar/>
  <AboutMe/>
  </div>)
}


function AboutMe() {
  const profile = "https://avatars.slack-edge.com/2026-10-18/12327503656743_39e83a047bcbc235e092_192.jpg";

  const aboutMePara =
    "Ex laboris ipsum id incididunt reprehenderit ex reprehenderit incididunt ea officia aliquip. " +
    "Laborum esse dolor irure enim qui ipsum deserunt. Quis do nisi pariatur laborum cillum enim fugiat qui. " +
    "Id ad qui enim irure eu pariatur exercitation aliquip qui velit incididunt aute. " +
    "Cupidatat aute nostrud duis nulla sunt non ullamco commodo.";

  const words = aboutMePara.split(" ");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % words.length);
    }, 250);

    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section className=" bg-white grow m-[1vw]  rounded-3xl flex flex-col items-center">
      <div className='col-span-2  text-4xl p-6'><h1>About? Me?</h1></div>
      <div className='grow flex flex-col justify-center items-center p-15 gap-15'>
      <div>
        <img src={profile} alt="profile" className="rounded-full min-h-45 min-w-45 object-cover" />
      </div>
      <div>
        <p className="text-gray-800 leading-relaxed">
          {words.map((word, idx) => (
            <span
              key={idx}
              className={idx === activeIndex ? "font-bold text-black" : "font-normal text-gray-600"}
            >
              {word}{" "}
            </span>
          ))}
        </p>
      </div>
      </div>
    </section>
  );
}

function NavBar(){
  return(
  <nav className="flex items-center p-5 text-3xl flex-col bg-linear-to-b from-white to-gray-150">
    <h1 className="p-1">Shwetank's Page</h1>
    <ul className="flex gap-3">
      <li className="border-black border rounded-2xl p-1 hover:bg-lime-400 hover:text-white hover:border-white"><a href="#">About</a></li>
      <li className="border-black border rounded-2xl p-1 hover:bg-lime-400 hover:text-white hover:border-white"><a href="#">Stack</a></li>
      <li className="border-black border rounded-2xl p-1 hover:bg-lime-400 hover:text-white hover:border-white"><a href="#">Projects</a></li>
    </ul>
  </nav>)
}