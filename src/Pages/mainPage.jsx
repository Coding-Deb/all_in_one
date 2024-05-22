import React, { useEffect, useState } from "react";
import skills from "../Apis/skill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TopBar } from "../Components/topbar";
import { Footer } from "../Components/footer";

export const MainPage = () => {
  const [skill, setSkill] = useState(skills);

  useEffect(() => {
    setSkill(skills);
  }, []);

  return (
    <div className="flex flex-col p-4 bg-slate-900">
      <TopBar />
      <div className="flex flex-col lg:flex-row p-5">
        <div className="flex p-5 m-4 flex-col w-full lg:w-1/2 animate-slide-in">
          <p className="font-bold text-3xl text-white">
            Hello, I am{" "}
            <span className="text-green-800 font-bold text-5xl">
              Debanshu Brahma
            </span>
            <br />{" "}
            <span className="text-orange-600 font-bold text-2xl">
              Full Stack (App, Web, Others)
            </span>
          </p>
          <p className="font-bold text-xl text-gray-100 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            asperiores magnam consectetur veniam autem, optio repudiandae nulla,
            debitis inventore repellendus tempora facere possimus consequatur
            voluptatum quibusdam fugit pariatur! Atque exercitationem ipsa,
            voluptates amet corporis iure ab repudiandae cum rem voluptatibus
            maiores ea minima quibusdam ut?
          </p>
          <div className="flex flex-wrap p-5 justify-items-start items-center m-5">
            <button className="border-orange-500 border-2 hover:bg-orange-500 hover:text-white text-orange-500 font-bold py-2 px-4 rounded focus:outline-none focus m-3 shadow-2xl shadow-black">
              KNOW MORE
              <FontAwesomeIcon icon="fa-regular fa-arrow-up-right-from-square" />
            </button>
            <button className="border-green-700 border-2 hover:bg-green-700 hover:text-white text-green-700 font-bold py-2 px-6 rounded focus:outline-none focus m-3 shadow-2xl shadow-black">
              GITHUB
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-1/2 animate-slide-in">
          <img
            src={require("../Images/3d-rendering-kid-playing-digital-game-removebg-preview.png")}
            alt="Profile"
            className="flex p-5 m-4 w-full shadow-2xl bg-yellow-200 shadow-yellow-200 hover:shadow-yellow-300 hover:bg-yellow-600"
          />
        </div>
      </div>
      <div className="flex flex-col p-5 my-3 animate-slide-in">
        <div className="flex flex-initial p-4 mb-4">
          <h1 className="font-bold text-3xl text-orange-500 shadow-2xl rounded-lg">
            My Skills
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skill.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 m-2 hover:shadow-2xl shadow-2xl shadow-black bg-[#282c34] hover:bg-yellow-800 hover:text-black duration-500 transform transition hover:scale-105 animate-slide-in"
            >
              <img
                src={require("../Images/3593965-removebg-preview.png")}
                alt=""
                className="h-20 w-20"
              />
              <div className="flex flex-col justify-center items-center transition duration-150 ease-in-out hover:ease-in-out">
                <p className="font-bold text-xl text-white">{item.name}</p>
                <p className="text-md text-white">
                  Lvl: <br />
                  {item.level}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
