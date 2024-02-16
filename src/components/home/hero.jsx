import Image from "next/image";
import profile from "@/assets/profile.jpg";
function Hero() {
  return (
    <div className="hero min-h-[600px]">
      <div className="hero-content flex-col lg:flex-row-reverse items-center">
        <Image src={profile} className="rounded-full" />
        <div className="w-[70%]">
          <h1 className="text-5xl font-bold text-gray-800">
            Hello there, i'm Dimas!
          </h1>
          <p className="py-6 text-gray-800">
            I am a Fullstack Web Developer with expertise in React.js, Next.js,
            and Node.js. Committed to delivering innovative and high-quality
            technological solutions. Proven track record of delivering dynamic
            and efficient web solutions. Passionate about leveraging
            cutting-edge technologies to create seamless user experiences.
          </p>
          <button className="btn bg-black text-gray-100">Download CV</button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
