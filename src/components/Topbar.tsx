import Typewriter from "typewriter-effect";

const Topbar = () => {
  return (
    <header className="topbar-container bg-gradient-to-b from-black to-[#111111] p-2 sm:p-3 md:p-4 sticky top-0 z-50 shadow-md border-b-2 border-gray-700 w-full">
      <div className="w-full flex justify-between items-center">
        {/* Logo com animação */}
        <div className="topbar-logo text-lg sm:text-xl md:text-2xl font-bold text-white overflow-hidden">
          <Typewriter
            options={{
              autoStart: true,
              delay: 70,
              deleteSpeed: 50,
              loop: false,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Pedro Lucas Reis")
                .pauseFor(1000)
                .deleteChars(11)
                .typeString("'s Portfolio")
                .start();
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Topbar;

