import React from "react";
import { MdEmail } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Header() {
    return (
        <div className="">
            <div className="bg flex w-full pt-2 pb-2 headerr"> {/*overall div for header*/}
                <div className="w-[85%] headerr2">
                    <div className="font3 p-2 font-semibold text-4xl text-black text-center">Japreet Kaur</div>
                    <h1 className="font2 text-2xl italic text-gray-800 text-center">Web Developer</h1>
                    <p className="m-auto p-3 w-[95%] text-justify">I am currently pursuing my graduation in Computer Science and Engineering. I am well organized, creative, diligent and a problem solver. Extremely passionate and driven worker, with a varied and complementary skill set. Works well in a team and individually, strong belief in a growth mindset. Seeking to apply my skills and experience to further my professional experience.
                    </p>
                </div>
                <div className="w-[15%] m-auto opacity-100">
                    <img className="w-44 h-44 mr-5 m-auto rounded-full border-2 border-solid border-gray-700 shadow-gray-800 shadow-lg" src="/img.jpg" alt="Jaspreetimage" />
                </div>
            </div>
            <div className="w-[100%] bg-gray-800 py-2">
                <div className="flex w-[90%] m-auto">
                    <ul className="flex w-[50%] ml-20 p-2">
                        <li className="flex">
                            <MdEmail size={22} className="fill-white"></MdEmail> <div className="ml-5 text-white">jaspreetkaursaini469@gmail.com</div>
                        </li>
                    </ul>
                    <ul className="flex w-[50%] ml-20 p-2">
                        <li className="flex">
                            <RiPhoneFill size={22} className="fill-white"></RiPhoneFill> <div className="ml-5 text-white">7009400665</div>
                        </li>
                    </ul>
                </div>
                <div className="flex w-[90%] m-auto">
                    <ul className="flex w-[50%] ml-20 p-2">
                        <li className="flex">
                            <ImLocation2 size={22} className="fill-white"></ImLocation2> <div className="ml-5 text-white">Mohali, India</div>
                        </li>
                    </ul>
                    <ul className="flex w-[50%] ml-20 p-2">
                        <li className="flex">
                            <BsLinkedin size={22} className="fill-white"></BsLinkedin> <div className="ml-5 text-white"><a href="https://www.linkedin.com/in/jaspreet-kaur23/">linkedin.com/in/jaspreet-kaur23</a></div>
                        </li>
                    </ul>
                </div>
                <div className="flex w-[90%] m-auto">
                    <ul className="flex w-[50%] ml-20 p-2">
                        <li className="flex">
                            <BsGithub size={22} className="fill-white"></BsGithub> <div className="ml-5 text-white"><a href="https://github.com/Jas469">github.com/jas469</a></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
