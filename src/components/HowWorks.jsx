import {
  MdPerson,
  MdOutlineAssessment,
  MdQuiz,
  MdLeaderboard,
} from "react-icons/md";

const HowWorks = () => {
  const stages = [
    {
      id: 1,
      icon: MdPerson,
      heading: "Create Account",
      subHeading: "Sign up and set up your profile",
    },
    {
      id: 2,
      icon: MdOutlineAssessment,
      heading: "Complete Form",
      subHeading: "fill out the required application form",
    },
    {
      id: 3,
      icon: MdQuiz,
      heading: "Take a test",
      subHeading: "Attempt the real Kankoor Exam",
    },
    {
      id: 4,
      icon: MdLeaderboard,
      heading: "Get result",
      subHeading: "View your exam detailed fedback",
    },
  ];
  return (
    <div className="grid lg:grid-cols-4 lg:gap-4 gap-3 grid-cols-1 md:grid-cols-2 place-items-center mt-10">
      {stages.map((stage) => {
        const Icon = stage.icon;
        return (
          <div className="flex sm:gap-3 gap-1 shadow-md rounded-xl p-3 h-30 items-center w-full bg-gray-50 dark:bg-gray-800 " key={stage.id}>
            <div>
              <Icon className="text-7xl text-accent"/>
            </div>
            <div>
              <h2 className="font-medium sm:text-lg text-md tracking-wide text-primary-hover dark:text-accent">{stage.heading}</h2>
              <p className="roboto text-md tracking-wide">{stage.subHeading}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HowWorks;
