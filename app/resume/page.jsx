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
import {
  SiTailwindcss,
  SiNextdotjs,
  SiNuxtdotjs,
  SiJquery,
  SiVuetify,
  SiWebpack,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Hero from "@/components/Hero";
import MainContent from "@/components/MainContent";
import Heading from "@/components/Heading";

const experiences = {
  icon: "/images/resume/badge.svg",
  title: "My experience",
  items: [
    {
      company: "株式会社カイエン",
      year: "2020-2024",
      position: "フロントエンドエンジニア",
      detailList: [
        "HTML/CSS/JavaScript を用いたWebサイト・アプリ開発と運用",
        "React-Next/Vue-Nuxt を使ったシングルページアプリケーション（SPA）の開発",
        "バックエンドと連携したAPI開発・データ管理",
        "Webpack / Babel を用いた開発環境構築",
        "レスポンシブデザイン・アクセシビリティ対応のUI実装",
        "UI/UX改善のための実装最適化とコード品質向上",
        "チームへの新技術導入、トレーニング、インターン教育",
      ],
    },
    {
      company: "有限会社浜製作所",
      year: "2024-現在",
      position: "フロントエンドエンジニア、マシニングセンターエンジニア",
      detailList: [
        "会社Webサイトの運用・更新",
        "マシニングセンターを使用した金属部品の加工・製造",
        "図面確認および精密加工の実施",
        "品質チェック・工程管理",
        "製造現場での正確さ・チームワーク・責任感を習得",
      ],
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

const Resume = () => {
  return (
    <>
      <Hero src="/images/resume/hero.png" />
      <MainContent>
        <Heading text="Resume" className="text-center" />
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
              <div className="flex flex-col gap-[10px]">
                <h2 className="text-center xl:text-left">{experiences.title}</h2>
                <ul className="relative">
                  {experiences &&
                    experiences.items.map((item, i) => (
                      <li
                        key={i}
                        className="relative pl-8 xl:pl-32 py-6 last:before:hidden before:absolute before:left-2 xl:before:left-0 before:h-[calc(100%-12px)] before:px-[2px] before:bg-primary xl:before:ml-[6.5rem] before:top-[50px] before:origin-top before:scale-y-0 before:animate-timeline
                         after:absolute after:left-[2px] xl:after:left-[-6px] after:w-2 after:h-2 after:border-4 after:box-content after:border-primary after:rounded-full xl:after:ml-[6.5rem] after:top-[35px]"
                      >
                        <div className="flex flex-col xl:flex-row items-start">
                          <time className="xl:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-30 h-7 mb-3 xl:mb-0 p-2 bg-primary text-white rounded-full">
                            {item.year}
                          </time>
                          <h3 className="mb-2">{item.position}</h3>
                        </div>
                        <p className="font-bold mb-4">
                          {item.company}
                        </p>
                        <ul className="space-y-1.5 list-disc list-inside flex flex-col items-start">
                          {item.detailList &&
                            item.detailList.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                        </ul>
                      </li>
                    ))}
                </ul>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h2>{education.title}</h2>
                <p className="max-w-[600px]  mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#e30a9112] py-4 px-10 rounded-xl flex flex-col justify-start items-start gap-1"
                      >
                        <span className="text-primary">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-primary"></span>
                          <p className="">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h2>{skills.title}</h2>
                </div>
                <ul className="grid grid-cols-2 xl:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[130px] border border-primary rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-primary transition-all duration-300">
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
                <h2>{about.title}</h2>
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
      </MainContent>
    </>
  );
};

export default Resume;
