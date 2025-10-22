"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPhp,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaVuejs,
  FaLaravel,
  FaGulp,
  FaSass,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiNuxtdotjs, SiJquery, SiVuetify, SiWebpack, SiAdobexd, SiAdobephotoshop } from "react-icons/si";


// experience data
const experience = {
  icon: "/images/resume/badge.svg",
  title: "My experience",
  description: `4年間でフロントエンドエンジニアとして、コーポレートサイトやWebアプリの開発を担当しました。
HTML・CSS・JavaScriptを中心に、VueやReactを用いたSPA開発、API連携、レスポンシブデザインの実装などを行いました。
デザイナーと協力しながら、ユーザー目線を意識した高品質なUI/UXの構築に取り組みました。また1年間で
マシニングセンターを使用した金属部品の製造・加工に携わっています。製造現場での正確さ、チームワーク、責任感を学び、これらを今後の開発業務にも活かしていきたいと考えています。`,
  items: [
    {
      company: "有限会社浜製作所",
      position: "フロントエンドエンジニア",
      duration: "2024 - 現在",
    },
    {
      company: "株式会社カイエン",
      position: "マシニングセンターエンジニア",
      duration: "2020 - 2024",
    },
  ],
};

// education data
const education = {
  icon: "/images/resume/cap.svg",
  title: "My education",
  description:
    "大学では生物学を専攻し、論理的思考力や問題解決力を養いました。その後、日本語学校とIT専門学校で学び、日本語能力とプログラミングの基礎を身につけました。専門学校ではHTML、CSS、JavaScriptを中心に、Web開発の実践的なスキルを学び、現在のWebエンジニアとしての基盤を築きました。",
  items: [
    {
      institution: "HUNG VUONG 大学",
      degree: "理学部 生物学科",
      duration: "2011年8月〜2015年3月",
    },
    {
      institution: "アンランゲージスクール日本語学校",
      degree: "日本語",
      duration: "2016年3月〜2018年3月",
    },
    {
      institution: "駿台電子情報＆ビジネス専門学校",
      degree: "ITエキスパート科",
      duration: "2018年4月〜2020年3月",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "主にHTML, CSS, JavaScript, Vue.js, Nuxt.js, React.js, Next.jsを用いたフロントエンド開発を行っており、モダンなWebアプリケーション構築を得意としています。また、プロジェクトによってPHPやLaravelにも携わった経験があります。",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaVuejs />,
      name: "Vue.js",
    },
    {
      icon: <SiNuxtdotjs />,
      name: "Nuxt.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaLaravel />,
      name: "Laravel",
    },
     {
      icon: <SiJquery />,
      name: "jQuery",
    },
       {
      icon: <SiWebpack />,
      name: "Webpack",
    },
         {
      icon: <FaGulp />,
      name: "Gulp",
    },
        {
      icon: <FaSass />,
      name: "SASS",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
    },
      {
      icon: <SiVuetify />,
      name: "Vuetify",
    },
    {
      icon: <FaGithub />,
      name: "Git",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
     {
      icon: <SiAdobexd />,
      name: "XD",
    },
     {
      icon: <SiAdobephotoshop />,
      name: "Photoshop",
    },
  ],
};

// about data
const about = {
  title: "About me",
  description:
    "私はベトナム出身で、現在は埼玉県川口市に在住しています。フロントエンドを中心にWebサイトやWebアプリケーション開発者です。趣味はゲームで、楽しみながら新しいアイデアやクリエイティブな発想を日々の開発に活かしています。",
  info: [
    {
      fieldName: "名前",
      fieldValue: "Dinh Quang Chung",
    },
    {
      fieldName: "電話",
      fieldValue: "070 4003 9831",
    },
    {
      fieldName: "実務年数",
      fieldValue: "5年以上",
    },
      {
      fieldName: "Email",
      fieldValue: "dinhquangchung.k9sh@gmail.com",
    },
   
    {
      fieldName: "国籍",
      fieldValue: "ベトナム",
    },
        {
      fieldName: "趣味",
      fieldValue: "ゲーム",
    },
    {
      fieldName: "言語",
      fieldValue: "ベトナム語, 日本語",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

const Resume = () => {
  return (
    <main className="min-h-[80vh] flex items-center justify-center py-7 xl:py-10">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-4 px-10 rounded-xl flex flex-col justify-start items-start gap-1"
                        >
                          <span className="text-pink-500">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-pink-500"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-4 px-10 rounded-xl flex flex-col justify-start items-start gap-1"
                        >
                          <span className="text-pink-500">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-pink-500"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[130px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-pink-500 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </main>
  );
};

export default Resume;
