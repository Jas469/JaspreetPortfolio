import React, { useState } from "react";
import { FiExternalLink } from 'react-icons/fi'
// import EducationalQualification from "./EducationalQualification";


export default function Slider() {
    const [education, setEducation] = useState('');
    const [educationclass, setEducationclass] = useState('bg-slate-700 text-white ');
    const [certificates, setCertificates] = useState('hidden');
    const [certificateclass, setCertificateclass] = useState('');
    const [projects, setProjects] = useState('hidden');
    const [projectclass, setProjectclass] = useState('');
    const [achievements, setAchievements] = useState('hidden');
    const [achievementclass, setAchievementclass] = useState('');
    const [sil, setSil] = useState('hidden');
    const [silclass, setSilclass] = useState('');

    const educationn = () => {
        setEducation('block');
        setCertificates('hidden');
        setProjects('hidden');
        setSil('hidden');
        setAchievements('hidden');
        setEducationclass('bg-slate-700 text-white ');
        setCertificateclass(' ')
        setAchievementclass(' ')
        setSilclass(' ')
        setProjectclass(' ')
    }
    const certificatess = () => {
        setEducation('hidden');
        setCertificates('block');
        setProjects('hidden');
        setSil('hidden');
        setAchievements('hidden');
        setEducationclass('');
        setCertificateclass('bg-slate-700 text-white ')
        setAchievementclass(' ')
        setSilclass(' ')
        setProjectclass(' ')
    }
    const projectss = () => {
        setEducation('hidden');
        setCertificates('hidden');
        setProjects('block');
        setSil('hidden');
        setAchievements('hidden');
        setEducationclass('');
        setCertificateclass('')
        setAchievementclass(' ')
        setSilclass(' ')
        setProjectclass('bg-slate-700 text-white ')
    }
    const achievemenntss = () => {
        setEducation('hidden');
        setCertificates('hidden');
        setProjects('hidden');
        setSil('hidden');
        setAchievements('block');
        setEducationclass('');
        setCertificateclass('')
        setAchievementclass(' bg-slate-700 text-white ')
        setSilclass(' ')
        setProjectclass(' ')
    }
    const sils = () => {
        setEducation('hidden');
        setCertificates('hidden');
        setProjects('hidden');
        setSil('block');
        setAchievements('hidden');
        setEducationclass('');
        setCertificateclass('')
        setAchievementclass(' ')
        setSilclass(' bg-slate-700 text-white ')
        setProjectclass(' ')
    }
    return (
        <div>
            <div className="justify-between mt-1  bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 flex w-full xsm:text-sm xsm:block">
                <button onClick={educationn} className={`${educationclass}flex p-2 w-[20%] justify-center m-auto hover:bg-slate-700 hover:text-white hover:border-r-2 hover:border-l-2 border-white border-solid xsm:w-full`}>
                    <div className="">Educational Qualification</div>
                </button>
                <button onClick={certificatess} className={`${certificateclass}flex p-2 w-[20%] justify-center m-auto hover:bg-slate-700 hover:text-white hover:border-r-2 hover:border-l-2 border-white border-solid xsm:w-full`}>
                    <div className="">Certifications</div>
                </button>
                <button onClick={projectss} className={`${projectclass}flex p-2 w-[20%] justify-center m-auto hover:bg-slate-700 hover:text-white hover:border-r-2 hover:border-l-2 border-white border-solid xsm:w-full`}>
                    <div className="">Work Experience</div>
                </button>
                <button onClick={achievemenntss} className={`${achievementclass}flex p-2 w-[20%] justify-center m-auto hover:bg-slate-700 hover:text-white hover:border-r-2 hover:border-l-2 border-white border-solid xsm:w-full`}>
                    <div className="">Projects and Achievements</div>
                </button>
                <button onClick={sils} className={`${silclass}flex p-2 w-[20%] justify-center m-auto hover:bg-slate-700 hover:text-white hover:border-r-2 hover:border-l-2 border-white border-solid xsm:w-full`}>
                    <div className="">
                        Skills, Interests & Languages
                    </div>
                </button>
            </div>



            <div>
                <div className={`${education}`}>
                    <div className="flex justify-center mb-10">
                        <table className="w-[90%] bg-slate-700  text-center p-2 mt-4 xsm:w-full">
                            <tr className=" xsm:text-sm">
                                <td className="w-[5%] border-2 border-solid border-white p-2 text-white xsm:hidden">
                                    Sno.
                                </td>
                                <td className="w-[25%] border-2 border-solid border-white p-2 text-white xsm:w-[15%]">
                                    Educational Qualification
                                </td>
                                <td className="w-[35%] border-2 border-solid border-white p-2 text-white xsm:w-[15%]">
                                    Institution
                                </td>
                                <td className="w-[20%] border-2 border-solid border-white p-2 text-white xsm:w-[5%]">
                                    Percentage Obtained
                                </td>
                                <td className="w-[20%] border-2 border-solid border-white p-2 text-white xsm:w-[5%]">
                                    Passing Year
                                </td>
                            </tr>
                            <tbody>
                                <tr className="bg-white xsm:text-sm">
                                    <td className="border-2 border-solid border-black p-2 text-black xsm:hidden">
                                        1.
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black text-left">
                                        B.Tech in Computer Science & Enginnering
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black text-left">
                                        I.K.Gujral Punjab Technical University Mohali Campus 1
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black ">
                                        9.1 (CGPA)
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black ">
                                        2024
                                    </td>
                                </tr>
                                <tr className="bg-white xsm:text-sm">
                                    <td className="border-2 border-solid border-black p-2 text-black xsm:hidden">
                                        2.
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black text-left">
                                        Senior Secondary School (XII<sup>th</sup>)
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black text-left">
                                        Guru Nanak Foundation Public School
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black ">
                                        92%
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black ">
                                        2020
                                    </td>
                                </tr>
                                <tr className="bg-white xsm:text-sm">
                                    <td className="border-2 border-solid border-black p-2 text-black xsm:hidden">
                                        3.
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black text-left">
                                        Secondary School (X<sup>th</sup>)
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black text-left">
                                        Guru Nanak Foundation Public School
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black ">
                                        91%
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black ">
                                        2018
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className={`${certificates}`}>
                    <div className="flex justify-center mb-10">
                        <table className="w-[90%] bg-slate-700  text-center p-2 mt-4 xsm:text-sm">
                            <tr>
                                <td className="w-[10%] border-2 border-solid border-white p-2 text-white">
                                    Sno.
                                </td>
                                <td className="w-[40%] border-2 border-solid border-white p-2 text-white">
                                    Certificate Name
                                </td>

                                <td className="w-[30%] border-2 border-solid border-white p-2 text-white">
                                    Download Certificate
                                </td>
                                <td className="w-[20%] border-2 border-solid border-white p-2 text-white">
                                    Year
                                </td>
                            </tr>
                            <tbody>
                                <tr className="bg-white">
                                    <td className="border-2 border-solid border-black p-2 text-black">
                                        1.
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black text-left">
                                        LinkedIn Learning Certificate - Artificial Intelligence Foundations: Machine Learning (2018)
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black decoration-slice ">
                                        <a href="https://www.linkedin.com/learning/certificates/bf9e0b94f8fa0969354a916e7d43ebf47a49f62c3dd8f156012866e87cd21dd9?u=88982986"><div className="flex justify-center"><div className="mr-2">Link</div><div><FiExternalLink></FiExternalLink></div></div></a>
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black ">
                                        2023
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="border-2 border-solid border-black p-2 text-black">
                                        2.
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black text-left">
                                        Participation in DSA Sprint NIT Durgapur (2023)
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black decoration-slice ">
                                        <a href="https://drive.google.com/file/d/19DbWxtV046BMGcBMw1MZuq8Eap5Fnro8/view?usp=sharing"><div className="flex justify-center"><div className="mr-2">Link</div><div><FiExternalLink></FiExternalLink></div></div></a>
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black ">
                                        2023
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="border-2 border-solid border-black p-2 text-black">
                                        3.
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black text-left">
                                        LinkedIn Learning Certificate - SQL Essential Training (2019)
                                    </td>

                                    <td className="border-2 border-solid border-black p-2 text-black decoration-red-400">
                                        <a href="https://www.linkedin.com/learning/certificates/15f67f8bf8462ea58821c0a0487fe6e51127ed9decdcee95f092eec373d691d8?u=88982986"><div className="flex justify-center"><div className="mr-2">Link</div><div><FiExternalLink></FiExternalLink></div></div></a>
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black ">
                                        2022
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="border-2 border-solid border-black p-2 text-black">
                                        4.
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black text-left">
                                        Participation in Codegoda2022
                                    </td>

                                    <td className="border-2 border-solid border-black p-2 text-black decoration-red-400">
                                        <a href="https://unstop.com/certificate-preview/8a1b0df5-710a-4051-9a6d-62f0f25a5b67"><div className="flex justify-center"><div className="mr-2">Link</div><div><FiExternalLink></FiExternalLink></div></div></a>
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black ">
                                        2022
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="border-2 border-solid border-black p-2 text-black">
                                        5.
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black text-left">
                                        Participation in Flipkart grid 4.0 - Software Development Challenge
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black decoration-slice ">
                                        <a href="https://unstop.com/certificate-preview/923cee56-0b61-4437-a130-c589c638b3ba"><div className="flex justify-center"><div className="mr-2">Link</div><div><FiExternalLink></FiExternalLink></div></div></a>
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black ">
                                        2022
                                    </td>
                                </tr>

                                <tr className="bg-white">
                                    <td className="border-2 border-solid border-black p-2 text-black">
                                        6.
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black text-left">
                                        LinkedIn Learning Certificate - Python Quickstart
                                    </td>

                                    <td className="border-2 border-solid border-black p-2 text-black decoration-red-400">
                                        <a href="https://www.linkedin.com/learning/certificates/1edebd7e431ec0f31be2cbd87d02a3a6c3d907077730e8171adf6e3f6af43299?u=88982986"><div className="flex justify-center"><div className="mr-2">Link</div><div><FiExternalLink></FiExternalLink></div></div></a>
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black ">
                                        2022
                                    </td>
                                </tr>

                                <tr className="bg-white">
                                    <td className="border-2 border-solid border-black p-2 text-black">
                                        7.
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black text-left">
                                        LinkedIn Learning Certificate - Excel Essential Training (Microsoft 365)
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black decoration-slice ">
                                        <a href="https://www.linkedin.com/learning/certificates/c56022e7a53bd8a683cf36a659ca0a1cb3a0cffb09ec29695cff3024fb23e33a"><div className="flex justify-center"><div className="mr-2">Link</div><div><FiExternalLink></FiExternalLink></div></div></a>
                                    </td>
                                    <td className="border-2 border-solid border-black p-2 text-black ">
                                        2021
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className={`${projects} `}>
                    <div>
                    <div className="flex justify-center mb-10 xsm:text-sm">
                            <table className="w-[90%] bg-slate-700  text-center p-2 mt-4">
                                <tr>
                                    <td className="w-[10%] border-2 border-solid border-white p-2 text-white">
                                        Sno.
                                    </td>
                                    <td className="w-[30%] border-2 border-solid border-white p-2 text-white">
                                        Position
                                    </td>
                                    <td className="w-[020%] border-2 border-solid border-white p-2 text-white">
                                        Company
                                    </td>
                                    <td className="w-[20%] border-2 border-solid border-white p-2 text-white">
                                        Offer Letter
                                    </td>
                                    <td className="w-[20%] border-2 border-solid border-white p-2 text-white">
                                        Period
                                    </td>
                                </tr>
                                <tbody>
                                    <tr className="bg-white">
                                        <td className="border-2 border-solid border-black p-2 text-black">
                                            1.
                                        </td>
                                        <td className="border-2 border-solid border-black p-2 text-black text-left">
                                            Web Developer Intern
                                        </td>
                                        <td className="border-2 border-solid border-black p-2 text-black text-left">
                                            Code Casa
                                        </td>
                                        <td className="border-2 border-solid border-black p-2 text-black decoration-slice ">
                                            <a href="https://auth.geeksforgeeks.org/user/jaspreetkaursaini469/"><div className="flex justify-center"><div className="mr-2">Link</div><div><FiExternalLink></FiExternalLink></div></div></a>
                                        </td>
                                        <td className="border-2 border-solid border-black p-2 text-black text-center">
                                            15.08.2023 - 15.09.2023
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="border-2 border-solid border-black p-2 text-black">
                                            2.
                                        </td>
                                        <td className="border-2 border-solid border-black p-2 text-black text-left">
                                            Web Developer Intern
                                        </td>
                                        <td className="border-2 border-solid border-black p-2 text-black text-left">
                                            Bharat Intern
                                        </td>
                                        <td className="border-2 border-solid border-black p-2 text-black decoration-slice ">
                                            <a href="https://www.codechef.com/users/jaspreet_23"><div className="flex justify-center"><div className="mr-2">Link</div><div><FiExternalLink></FiExternalLink></div></div></a>
                                        </td>
                                        <td className="border-2 border-solid border-black p-2 text-black text-center">
                                            15.09.2023 - 15.10.2023
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                <div className={`${achievements}`}>
                    <div>
                        <div className=" mt-4 flex justify-center text-3xl font2 font-semibold xsm:text-2xl">Projects</div>
                        <div className="m-auto justify-around w-[90%] flex xsm:block">
                            <div className="w-[32%] xsm:w-[90%] xsm:m-auto">
                                <div className="bg-slate-700 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3">
                                    <div className="mr-4 ">
                                        Portfolio
                                    </div>
                                </div>
                                <div className="w-[95%] shadow-gray-100 shadow-xl rounded-lg p-2 m-auto text-justify xsm:text-sm">
                                    <div className="text-xs justify-center flex mb-2 mt-0">
                                        <div className="bg-gray-300 p-1 px-3 rounded-md">
                                            (09/2023 - 09/2023)
                                        </div>
                                    </div>
                                    <div>
                                        It is a website to showcase my works, experiences and other details.
                                    </div>
                                    <div className="ml-5">
                                        <ul className="list-disc">
                                            <li>It provides the facility to contact me on different platforms.</li>
                                            <li>It showcases my Educational Qualifications, Achievements, Certifications, Skills, Interests and Languages known.</li>
                                            <li>Created using HTML, CSS, JavaScript, React.js</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[32%] xsm:w-[90%] xsm:m-auto">
                                <div className="bg-slate-700 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3">
                                    <div className="mr-4 ">
                                        Campus Chronicels
                                    </div>
                                </div>
                                <div className="w-[95%] shadow-gray-100 shadow-xl rounded-lg p-2 m-auto text-justify xsm:text-sm">
                                    <div className="text-xs justify-center flex mb-2 mt-0">
                                        <div className="bg-gray-300 p-1 px-3 rounded-md">
                                            (02/2023 - 07/2023)
                                        </div>
                                    </div>
                                    <div>
                                        It is a campus management website that is designed as per the problems faced by staff and students of University.
                                        It provides an interactive platform which resolved all the problems.
                                    </div>
                                    <div className="ml-5">
                                        <ul className="list-disc">
                                            <li>Made user interface more effective</li>
                                            <li>Solved many problem's faced by students</li>
                                            <li>Technologies used : HTML, CSS, Tailwind CSS, Next.Js, Express.Js, Node.js, MongoDb Server</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[32%] xsm:w-[90%] xsm:m-auto">
                                <div className="bg-slate-700 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3">
                                    <div className="mr-4 ">
                                        PTU Exam (Clone)
                                    </div>
                                </div>
                                <div className="w-[95%] shadow-gray-100 shadow-xl rounded-lg p-2 m-auto text-justify xsm:text-sm">
                                    <div className="text-xs justify-center flex mb-2 mt-0">
                                        <div className="bg-gray-300 p-1 px-3 rounded-md">
                                            (10/2022 - 12/2022)
                                        </div>
                                    </div>
                                    <div className="ml-5">
                                        <ul className="list-disc">
                                            <li>The clone of Punjab Technical University Exam portal.</li>
                                            <li>It consists of Student Profile, Progress Caclculator, Latest Notifications, Student Documents, Apply Re-evaluation and Bank Transactions.</li>
                                            <li>Created using HTML, CSS, JavaScript.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" mt-4 flex justify-center text-3xl font2 font-semibold xsm:text-2xl xsm:mt-8">Achievements</div>
                        <div className="flex justify-center mb-10 xsm:text-sm">
                            <table className="w-[90%] bg-slate-700  text-center p-2 mt-4">
                                <tr>
                                    <td className="w-[10%] border-2 border-solid border-white p-2 text-white">
                                        Sno.
                                    </td>
                                    <td className="w-[60%] border-2 border-solid border-white p-2 text-white">
                                        Achievement
                                    </td>

                                    <td className="w-[30%] border-2 border-solid border-white p-2 text-white">
                                        View Profile
                                    </td>
                                </tr>
                                <tbody>
                                    <tr className="bg-white">
                                        <td className="border-2 border-solid border-black p-2 text-black">
                                            1.
                                        </td>
                                        <td className="border-2 border-solid border-black p-2 text-black text-left">
                                            Solved more than 100 questions on GFG
                                        </td>
                                        <td className="border-2 border-solid border-black p-2 text-black decoration-slice ">
                                            <a href="https://auth.geeksforgeeks.org/user/jaspreetkaursaini469/"><div className="flex justify-center"><div className="mr-2">Link</div><div><FiExternalLink></FiExternalLink></div></div></a>
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="border-2 border-solid border-black p-2 text-black">
                                            2.
                                        </td>
                                        <td className="border-2 border-solid border-black p-2 text-black text-left">
                                            Actively participating on Codechef's contest
                                        </td>
                                        <td className="border-2 border-solid border-black p-2 text-black decoration-slice ">
                                            <a href="https://www.codechef.com/users/jaspreet_23"><div className="flex justify-center"><div className="mr-2">Link</div><div><FiExternalLink></FiExternalLink></div></div></a>
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="border-2 border-solid border-black p-2 text-black">
                                            3.
                                        </td>
                                        <td className="border-2 border-solid border-black p-2 text-black text-left">
                                            Solved more than 100 questions on Leetcode
                                        </td>

                                        <td className="border-2 border-solid border-black p-2 text-black decoration-red-400">
                                            <a href="https://leetcode.com/jaspreetkaur23/"><div className="flex justify-center"><div className="mr-2">Link</div><div><FiExternalLink></FiExternalLink></div></div></a>
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="border-2 border-solid border-black p-2 text-black">
                                            4.
                                        </td>
                                        <td className="border-2 border-solid border-black p-2 text-black text-left">
                                            Actively participating on Coding Ninjas Platform
                                        </td>

                                        <td className="border-2 border-solid border-black p-2 text-black decoration-red-400">
                                            <a href="https://www.codingninjas.com/studio/profile/abb309e3-a919-4dea-b77b-986ba0c9788e"><div className="flex justify-center"><div className="mr-2">Link</div><div><FiExternalLink></FiExternalLink></div></div></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                <div className={`${sil}`}>
                    <div className="flex justify-center mb-10">
                        <div className="w-[90%] ">
                            <div className=" mt-4 flex justify-center text-3xl font2 font-semibold xsm:text-2xl">Skills</div>
                            <div className="flex flex-wrap justify-center xsm:text-sm xsm:ml-0 xsm:mr-0">
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        Python
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        JavaScript
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        C/C++
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        Cloud Computing
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        HTML
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        Machine Learning
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        CSS
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        Artificial Intelligence
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        React.js
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        Problem Solving
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        Next.js
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        Communication
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        Node.js
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        Tailwind CSS
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        React Native
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        Express.js
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        Bootstrap
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        Office Suite
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        SQL
                                </div>
                            </div>

                            
                            <div className=" mt-4 flex justify-center text-3xl font2 font-semibold xsm:text-2xl">Interests</div>
                            <div className="flex flex-wrap justify-center">
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        Problem Solving
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        Badminton
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        Reading Books
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        Competitive Programming
                                </div>                                
                            </div>

                            <div className=" mt-4 flex justify-center text-3xl font2 font-semibold xsm:text-2xl">Languages Known</div>
                            <div className="flex flex-wrap justify-center">
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        English
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        Punjabi
                                </div>
                                <div className="bg-slate-500 p-2 px-7 text-white text-center rounded-full mr-2 ml-3 flex justify-center mt-3 cursor-default hover:bg-slate-600 w-auto">
                                        Hindi
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
