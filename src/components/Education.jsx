import React from "react";
import { motion } from "framer-motion";
import { TbSchool, TbCertificate } from "react-icons/tb";

const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Science",
    institution: "S.V.P.M College of Engineering Malegaon Bk. Baramati",
    duration: "2022 - 2026",
    marks : "CGPA : 7.98",
    description:
      "Focused on Artificial Intelligence, Data Structures, and Full Stack Development. Participated in multiple hackathons and research projects. President of Entrepreneurship Development Club.",
    icon: <TbSchool size={30} className="text-white" />,
  },
  {
    id: 2,
    degree: "Higher Secondary Education (HSC)",
    institution: "Malojiraje Sheti Vidayala and Jr. College phaltan",
    duration: "2019 - 2021",
    marks : "Percentage : 95.14 %",
    description:
      "Studied Physics, Chemistry, Mathematics, and Computer Science. Developed early interest in software and logical problem-solving.",
    icon: <TbCertificate size={30} className="text-white" />,
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    institution: "Shreemant Shivajiraje English Medium School Jadhavwadi Phaltan",
    duration: "2017 - 2019",
    marks : "Percentage : 85.86 %",
    description:
      "Achieved distinction and built strong foundations in mathematics and science.",
    icon: <TbCertificate size={30} className="text-white" />,
  },
];

export default function Education() {
  return (
    <div
      className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16"
      id="education"
    >
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Education</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            className={`flex justify-between items-center flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 10,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >
            {/* Icon Section */}
            <div className="lg:w-[500px] w-full flex justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-[#1F1F1F] p-10 rounded-2xl shadow-lg flex flex-col items-center justify-center"
              >
                {edu.icon}
                <p className="text-white font-bold text-xl mt-4">
                  {edu.duration}
                </p>
              </motion.div>
            </div>

            {/* Text Section */}
            <div className="lg:w-1/2 lg:space-y-6 space-y-4 text-center lg:text-left">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(edu.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">
                {edu.degree}
              </p>

              <p className="font-semibold text-[#A1A1AA] text-lg">
                {edu.institution}
              </p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {edu.description}
              </p>
              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {edu.marks}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
