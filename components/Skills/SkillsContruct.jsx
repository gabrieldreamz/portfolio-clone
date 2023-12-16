import Image from "next/image";

const SkillsConstruct = () => {
  return (
    <section className="absolute z-50 w-full h-[70vh] flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="w-24 h-24 border-2 border-white rounded-[50%]  childElement rotate-center1"></div>
        <div className="absolute  w-20 h-20 border-2 border-white rounded-[50%] flex items-center justify-center  text-center font-Signika text-regularText font-bold">
          Skills
        </div>
      </div>

      <div className="flex  items-center absolute xl:right-[30%] right-[20%] top-[15%]">
        <div className="w-16 h-16 border-dotted border-[1px] border-reactStroke rounded-[50%] flex items-center justify-center">
          <div className="w-12 h-12 bg-reactFill rounded-[50%] flex items-center justify-center">
            <Image
              className="rotate-center1"
              src="/assets/images/icons8-react-native-48.png"
              alt="Sigma"
              width={35}
              height={35}
            />
          </div>
        </div>
        <div className="mb-5 w-24 border-b-[1px] border-reactStroke text-center font-Signika text-regularText font-bold">
          ReactJS
        </div>
      </div>

      <div className="flex  items-center absolute xl:left-[35%] left-[25%]   top-[15%]">
        <div className="w-16 h-16 border-dotted border-2 border-white rounded-[50%] flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-[50%] flex items-center justify-center">
            <Image
              className=""
              src="/assets/images/icons8-typescript-48.png"
              alt="Sigma"
              width={35}
              height={35}
            />
          </div>
        </div>
        <div className="mb-5 w-24 border-b-[1px] border-white text-center font-Signika text-regularText font-bold">
          TypeScript
        </div>
      </div>

      <div className="flex  items-center absolute left-[35%] bottom-[15%]">
        <div className="w-16 h-16 border-dotted border-2 border-white rounded-[50%] flex items-center justify-center">
          <div className="w-12 h-12 bg-nextFill rounded-[50%] flex items-center justify-center">
            <Image
              className=""
              src="/assets/images/icons8-nextjs-48.png"
              alt="Sigma"
              width={35}
              height={35}
            />
          </div>
        </div>
        <div className="mb-5 w-24 border-b-[1px] border-white text-center font-Signika text-regularText font-bold">
          NextJS
        </div>
      </div>

      <div className="flex  items-center absolute xl:left-[23%] left-[15%] top-[44%]">
        <div className="w-16 h-16 border-dotted border-2 border-nodeStroke rounded-[50%] flex items-center justify-center">
          <div className="w-12 h-12 bg-nodeFill rounded-[50%] flex items-center justify-center">
            <Image
              className=""
              src="/assets/images/icons8-nodejs-48.png"
              alt="Sigma"
              width={35}
              height={35}
            />
          </div>
        </div>
        <div className="mb-5 w-24 border-b-[1px] border-nodeStroke text-center font-Signika text-regularText font-bold">
          NodeJS
        </div>
      </div>

      <div className="flex  items-center absolute xl:right-[26%] right-[20%] top-[55%]">
        <div className="w-16 h-16 border-dotted border-2 border-firebaseStroke rounded-[50%] flex items-center justify-center">
          <div className="w-12 h-12 bg-firebaseFill rounded-[50%] flex items-center justify-center">
            <Image
              className=""
              src="/assets/images/icons8-firebase-48.png"
              alt="Sigma"
              width={35}
              height={35}
            />
          </div>
        </div>
        <div className="mb-5 w-24 border-b-[1px] border-firebaseStroke text-center font-Signika text-regularText font-bold">
          Firebase
        </div>
      </div>
    </section>
  );
};

export default SkillsConstruct;
