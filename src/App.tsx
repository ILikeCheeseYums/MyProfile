import React, { useState, useEffect, useMemo } from 'react';
export default function App(){

  return(
  <div className="h-screen flex flex-col">
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
    <section className="grid bg-white grow m-10 rounded-3xl grid-cols-[1fr_2fr] grid-rows-[auto_1fr] p-5 place-items-center">
      <div className='col-span-2 p-2 text-4xl'><h1>About? Me?</h1></div>
      <div>
        <img src={profile} alt="profile" className="rounded-full w-48 h-48 object-cover" />
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
    </section>
  );
}

function NavBar(){
  return(
  <nav className="flex justify-between p-5 text-3xl align-middle bg-linear-to-b from-white to-gray-150">
    <h1 className="p-1">Shwetank's Page</h1>
    <ul className="flex gap-3">
      <li className="border-black border rounded-2xl p-1 hover:bg-lime-400 hover:text-white hover:border-white"><a href="#">About</a></li>
      <li className="border-black border rounded-2xl p-1 hover:bg-lime-400 hover:text-white hover:border-white"><a href="#">Stack</a></li>
      <li className="border-black border rounded-2xl p-1 hover:bg-lime-400 hover:text-white hover:border-white"><a href="#">Projects</a></li>
    </ul>
  </nav>)
}