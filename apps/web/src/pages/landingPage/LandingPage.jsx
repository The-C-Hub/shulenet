import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import heroBackground from "../../images/heroBackground.png";
import bulbIcon from "../../images/bulbIcon.png";
import booksIcon from "../../images/booksIcon.svg";
import certIcon from "../../images/certificateIcon.svg";
import practicalIcon from "../../images/practicalIcon.svg";
// import background2 from "../../images/background2.png";
import background3 from "../../images/back.png"
import geoLogo from "../../images/geoLogo.png";
import labLogo from "../../images/labLogo.png";
import mathLogo from "../../images/mathematicsLogo.png";
import techLogo from "../../images/techLogo.png";
import langLogo from "../../images/languagesLogo.png";
import drawingLogo from "../../images/drawing.png";
import trigonometryLogo from "../../images/tirgon.png";
import pyLogo from "../../images/pyLogo.png";
import chemLogo from "../../images/chemLogo.png";
import userIcon from "../../images/user.svg";
import trophyIcon from "../../images/cup.svg";
import bookIcon from '../../images/book.svg';
import starIcon from '../../images/star.png'

const courseData = [
  {
    id: 1,
    title: "Ultimate Drawing Course: Beginner to Advance",
    instructor: "Juma Anton",
    users:10,
    level: "Beginner",
    lessons: 10,
    rating: 4.5,
    imageSrc: drawingLogo,
  },
  {
    id: 2,
    title: "Structure of the Atom and the Periodic Table",
    instructor: "Juma Anton",
    users:10,
    level: "Beginner",
    lessons: 30,
    rating: 4.5,
    imageSrc: trigonometryLogo,
  },
  {
    id: 3,
    title: "Python For Data Science: Guide",
    instructor: "Juma Anton",
    users:10,
    level: "Advance",
    lessons: 20,
    rating: 4.5,
    imageSrc: pyLogo,
  },
  {
    id: 4,
    title: "Getting Started With Trigonometric Functions",
    instructor: "Juma Anton",
    users:10,
    level: "Beginner",
    lessons: 13,
    rating: 4.5,
    imageSrc: chemLogo,
  },
];


const renderCourseCard = (course) => (
  <div key={course.id} className="w-[251px] h-[350px] relative bg-white rounded-[5px] shadow mt-9">
    <div className="w-[250px] h-[350px] relative">
      {/* Use drawingLogo as the sample image */}
      <img className="w-[250px] h-[154px] object-cover rounded-t-[5px]" 
        src={course.imageSrc}
        alt={course.title} 
      />
      <div className="left-[13px] top-[166px] absolute text-black text-3ml font-bold font-['KoHo']">
        {course.title}
      </div>
      <div className="left-[13px] top-[218px] absolute text-black text-4ml font-normal font-['KoHo'] tracking-wide">
        {course.instructor}
      </div>
      <div className="left-[160px] top-[216px] absolute flex items-center text-black text-[15px] font-normal font-['KoHo'] tracking-wide">
        <img className="mr-3" src={userIcon} alt="User Icon" />-{course.users}
      </div>
      <div className="left-[13px] top-[244px] absolute flex text-black text-[13px] font-normal font-['KoHo'] tracking-wide">
        <img className="mr-3" src={bookIcon} alt="Book Icon" /> Lessons: {course.lessons}
      </div>
      <div className="left-[160px] top-[244px] absolute flex items-center text-black text-[13px] font-normal font-['KoHo'] tracking-wide">
        <img className="mr-3" src={trophyIcon} alt="User Icon" />-{course.level}
      </div>
      <button className="left-[17px] bottom-[5rem] absolute bg-blue-500 rounded-lg">
        <div className="left-[25px] top-[10px] absolute text-black text-[13px] text-base font-semibold font-['KoHo'] tracking-wide">
          Start Course
        </div>
      </button>
      <div className="left-[198px] top-[304px] absolute text-black text-[10px] font-bold font-['KoHo'] tracking-tight">
        {course.rating}
      </div>
    </div>
  </div>
);
export default function YourComponent() {
  return (
    <>
      <Header />

      <div
        className="w-full h-[70vh] bg-gradient-to-r from-black via-black to-black"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container flex flex-col items-start justify-center h-full pl-8">
          <div className="text-white text-3xl font-bold font-['KoHo']">
            Education For Everyone
            <br />
            Free To All
          </div>
          <div className="text-white text-1xl font-medium font-['KoHo']">
            Over 1000 Online Courses for you
          </div>
          <div className="w-[9rem] h-[3rem] bg-yellow-400 rounded-[50px] mt-4 flex items-center justify-center">
            <div className="text-black text-2xl font-bold font-['KoHo']">
              Explore
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-96 mt-4 rounded relative overflow-hidden">
          <div className="relative m-6">
            <div className="left-0 top-0 relative text-black text-2xl font-bold font-['KoHo']">
              Unlock Your Learning Potential <br />
              with Shulenet
            </div>
            <div className="w-[5rem] h-[0px] left-[2.99px] relative border-2 border-sky-950 mt-4"></div>
            <div className="w-90 h-[100px] left-[2px] relative text-black text-3ml font-normal font-['KoHo'] mt-4">
              With Shulenet you can never go wrong. Learn at your own comfort
              zone anytime anywhere. Courses are tailored specifically for you.{" "}
            </div>

            <div className="flex items-center m-3">
              <img
                className="w-[1rem] h-[1rem] mr-2"
                src={bulbIcon}
                alt="Placeholder"
              />
              <div className="text-black text-2ml font-normal font-['KoHo']">
                Creatively Crafted Courses
              </div>
            </div>

            <div className="flex items-center m-3">
              <img
                className="w-[1rem] h-[1rem] mr-2"
                src={booksIcon}
                alt="Placeholder"
              />
              <div className="text-black text-2ml font-normal font-['KoHo']">
                Exclusive Course Materials
              </div>
            </div>

            <div className="flex items-center m-3">
              <img
                className="w-[1rem] h-[1rem] mr-2"
                src={practicalIcon}
                alt="Placeholder"
              />
              <div className="text-black text-2ml font-normal font-['KoHo']">
                Practical Examples
              </div>
            </div>

            <div className="flex items-center m-3">
              <img
                className="w-[1rem] h-[1rem] mr-2"
                src={certIcon}
                alt="Placeholder"
              />
              <div className="text-black text-2ml font-normal font-['KoHo']">
                Certificate of Completion
              </div>
            </div>

            <div className="w-[20px] h-[50px] left-[10px] top-[373px] absolute">
              <div className="opacity-20 w-[4.21px] h-[14.34px] left-[33.80px] top-[16.13px] absolute"></div>
            </div>
            <div className="w-[50px] h-[50px] left-[10px] top-[453px] absolute" />
            <div className="w-[50px] h-[50px] left-[10px] top-[535px] absolute" />
          </div>
        </div>

        <div className="w-96 mt-4 rounded relative">
          <div className="static">
            <div className="w-[120px] h-[150px] bg-blue-950 rounded-full absolute bottom-0 left-0" />
            <img className="w-[200px] h-[300px] rounded-[10px] absolute top-[3rem] left-[4rem]" src={background3} alt="background hero" />
            <div className="w-[190px] h-[190px] bg-sky-950 bg-opacity-80 absolute bottom-5 right-0 rounded-full" />
          </div>
        </div>
      </div>

            
      <div>
        <div className="w-full  relative flex items-center justify-center mt-9">
            <div className="w-full h-[66px] text-center text-black text-2xl font-bold font-['KoHo']">
                Top Subjects Specifically Curated For You
            </div>
        </div>

        <div className="w-full h-10rem relative flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="w-[10rem] h-[10rem] bg-zinc-300 bg-opacity-40 rounded-md shadow m-4 flex items-center justify-center">
                    <img 
                        className="w-[60%] h-[60%]" 
                        src={mathLogo} 
                        alt="mathematics logo"
                    />
                </div>
                <div className="text-black text-2xm font-bold font-['KoHo'] mt-5">Mathematics</div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="w-[10rem] h-[10rem] bg-zinc-300 bg-opacity-40 rounded-md shadow ml-9 flex items-center justify-center">
                    <img 
                        className="w-[60%] h-[60%]" 
                        src={techLogo} 
                        alt="Technology"
                    />
                </div>
                <div className="text-black text-2xm font-bold font-['KoHo'] mt-5">Technology</div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="w-[10rem] h-[10rem] bg-zinc-300 bg-opacity-40 rounded-md shadow ml-9 flex items-center justify-center">
                    <img 
                        className="w-[60%] h-[60%]" 
                        src={geoLogo} 
                        alt="Geo Logo"
                    />
                </div>
                <div className="text-black text-2xm font-bold font-['KoHo'] mt-5">Geography</div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="w-[10rem] h-[10rem] bg-zinc-300 bg-opacity-40 rounded-md shadow ml-9 flex items-center justify-center">
                    <img 
                        className="w-[60%] h-[60%]" 
                        src={langLogo}
                        alt="Languages logo" 
                    />
                </div>
                <div className="text-black text-2xm font-bold font-['KoHo'] mt-5">Languages</div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="w-[10rem] h-[10rem] bg-zinc-300 bg-opacity-40 rounded-md shadow ml-9 flex items-center justify-center">
                    <img 
                        className="w-[60%] h-[60%]" 
                        src={labLogo} 
                        alt="Chem logo"
                    />
                </div>
                <div className="text-black text-2xm font-bold font-['KoHo'] mt-5">Chemistry</div>
            </div>
        </div>
      </div>

      <div>
          <div className="text text-black text-lg font-bold font-['KoHo'] mt-9 pl-9">
            Learners Like You Are Viewing
          </div>

          <div className="text-right text-black text-base font-bold font-['KoHo'] underline pr-4">
            View More
          </div>
      </div>

      <div className="flex justify-around flex-wrap">
        
        {courseData.map((course) => (
          <div key={course.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 px-4">
            {renderCourseCard(course)}
          </div>
        ))}
      </div>
      

      {/* testimonials */}

      <div className="w-full h-full relative flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-lg mt-5 mb-9">
          <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center">
            {/* First Div */}
            <div className="w-full md:w-1/2 relative flex flex-col md:flex-row">
              {/* First Div */}
              <div className="w-full md:w-1/2 relative flex flex-col items-center justify-center">
                {/* First Nested Div */}
                <div className="w-full md:w-11/12 md:pr-4 relative bg-sky-950 bg-opacity-10 shadow rounded-lg p-5 mb-4">
                  <img className="w-20 h-20 rounded-full mb-1" src="https://via.placeholder.com/120x120" alt="profile icon" />
                  
                  <div className="text-center text-black text-sm font-normal mb-2">
                    <span className="text-yellow-400 text-3xl font-bold mb-1">“</span>
                    Just Some Random text of an Alumni talking about Shulenet. Lorem Ipsum Dolor Asimet. I really love the school for some reason.
                  </div>
                  <div className="text-justify text-black text-base font-bold mb-1">
                    Juma Antony
                  </div>
                  <div className="text-justify text-black text-sm font-semibold">
                    Software Engineer
                  </div>
                </div>
                {/* Second Nested Div */}
                <div className="w-full md:w-11/12 relative mt-4 md:mt-0 md:pl-4 bg-sky-950 bg-opacity-10 shadow rounded-lg p-5 mt-4">
                  <div className="text-center text-black text-sm font-normal mb-2">
                    Just Some Random text of an Alumni talking about Shulenet. Lorem Ipsum Dolor Asimet. I really love the school for some reason.
                  </div>
                  <div className="text-justify text-black text-base font-bold mb-1">
                    Juma Antony
                  </div>
                  <div className="text-justify text-black text-sm font-semibold">
                    Software Engineer
                  </div>
                </div>
              </div>

              {/* Second Div */}
              <div className="w-full md:w-1/2 relative">
                {/* Third Nested Div */}
                <div className="w-full h-1/3 md:w-11/12 md:pr-4 relative bg-sky-950 bg-opacity-10 shadow rounded-lg p-8 mb-4">
                <div className="left-[100px] top-[30px] absolute text-justify text-black text-base font-bold font-['KoHo']">
                  Rating
                </div>
                <img className="w-[20px] h-[20px] left-[63px] top-[70px] absolute" src={starIcon} alt="star"/>
                <img className="w-[20px] h-[20px] left-[171px] top-[70px] absolute" src={starIcon} alt="star"/>
                <img className="w-[20px] h-[20px] left-[87px] top-[70px] absolute" src={starIcon} alt="star"/>
                <img className="w-[20px] h-[20px] left-[115px] top-[70px] absolute" src={starIcon} alt="star"/>
                <img className="w-[20px] h-[20px] left-[145px] top-[70px] absolute" src={starIcon} alt="star"/>
                <div className="w-full md:w-[calc(100% - 20px)] left-[10px] top-[70px] relative text-center text-black text-base font-bold font-['KoHo']">
                  5,000+ Students Satisfied by Our Services
                </div>
                
              </div>

                {/* Fourth Nested Div */}
                <div className="w-full md:w-11/12 md:pr-4 relative mt-4 md:mt-0 bg-sky-950 bg-opacity-10 shadow rounded-lg p-8">
                  <img className="w-20 h-20 rounded-full mb-2" src="https://via.placeholder.com/120x120" alt="profile icon" />
                  
                  <div className="text-center text-black text-sm font-normal mb-3">
                  <span className="text-yellow-400 text-3xl font-bold mb-1">“</span>
                    Just Some Random text of an Alumni talking about Shulenet. Lorem Ipsum Dolor Asimet. I really love the school for some reason.
                  </div>
                  <div className="text-justify text-black text-base font-bold mb-2">
                    Juma Antony
                  </div>
                  <div className="text-justify text-black text-sm font-semibold">
                    Software Engineer
                  </div>
                </div>
              </div>
            </div>

            
            {/* Second Div */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0 relative bg-blue-950 rounded-lg">
              <div className="w-full h-full bg-sky-950 bg-opacity-10 shadow-md rounded-lg p-8">
                <div className="w-full mt-12 text-white text-2xl font-bold">TESTIMONIALS</div>
                <div className="w-full mt-4 text-yellow-400 text-2xl font-bold">What Says Our Alumni</div>
                <p className="w-full mt-8 text-white text-base font-bold">
                  Shulenet has nutured and Taught Students from diverse backgrounds who have excelled exceptionally and proceeded to greater heights to pursue different professions
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
}
