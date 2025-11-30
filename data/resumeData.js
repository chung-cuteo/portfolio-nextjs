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

export const experiences = {
  icon: "/images/resume/badge.svg",
  title: "My experience",
  items: [
    {
      company: "株式会社カイエン",
      year: "2020-2024",
      position: "フロントエンドエンジニア",
      detailList: [
        "HTML/CSS/JavaScript を用いたWebサイト・アプリ開発と運用",
        "React/Next.js / Vue/Nuxt を使った SPA の実装",
        "バックエンドと連携した API 開発・データ管理",
        "Webpack / Babel を用いた開発環境構築",
        "レスポンシブデザイン・アクセシビリティ対応の UI 実装",
        "パフォーマンス改善・コード品質向上",
        "チームへの新技術導入やメンター経験",
      ],
    },
    {
      company: "有限会社浜製作所",
      year: "2024-現在",
      position: "フロントエンドエンジニア / マシニングセンター担当",
      detailList: [
        "コーポレートサイトの運用・更新",
        "製造現場での図面確認と精密加工サポート",
        "品質チェックと工程改善の補助",
      ],
    },
  ],
};

export const educations = {
  icon: "/images/resume/cap.svg",
  title: "My education",
  items: [
    {
      school: "HUNG VUONG University（フンヴオン大学）",
      faculty: "Faculty of Science, Department of Biology",
      jpFaculty: "理学部 生物学科",
      period: "2011-2015",
    },
    {
      school: "AN Language School（ANランゲージスクール）",
      faculty: "Japanese Language Program",
      jpFaculty: "日本語科",
      period: "2016-2018",
    },
    {
      school: "Sundai Electronics & Business College（駿台電子・ビジネス専門学校）",
      faculty: "IT Expert Course",
      jpFaculty: "ITエキスパート科",
      period: "2018-2020",
    },
  ],
};

export const skills = {
  title: "My skills",
  skillList: [
    { icon: "FaHtml5", name: "HTML5" },
    { icon: "FaCss3", name: "CSS3" },
    { icon: "FaJs", name: "JavaScript" },
    { icon: "FaReact", name: "React.js" },
    { icon: "SiNextdotjs", name: "Next.js" },
    { icon: "FaVuejs", name: "Vue.js" },
    { icon: "SiNuxtdotjs", name: "Nuxt.js" },
    { icon: "FaNodeJs", name: "Node.js" },
    { icon: "FaPhp", name: "PHP" },
    { icon: "FaLaravel", name: "Laravel" },
    { icon: "SiJquery", name: "jQuery" },
    { icon: "SiWebpack", name: "Webpack" },
    { icon: "FaGulp", name: "Gulp" },
    { icon: "FaSass", name: "SASS" },
    { icon: "SiTailwindcss", name: "Tailwind CSS" },
    { icon: "SiVuetify", name: "Vuetify" },
    { icon: "FaGithub", name: "Git" },
    { icon: "FaFigma", name: "Figma" },
    { icon: "SiAdobexd", name: "Adobe XD" },
    { icon: "SiAdobephotoshop", name: "Photoshop" },
  ],
};

export const about = {
  title: "About me",
  description:
    "ベトナム出身、埼玉在住のフロントエンドエンジニアです。Webサイト・Webアプリ開発を中心に、UI/UX・パフォーマンス改善に注力しています。趣味はゲームで、創造力と問題解決に取り組んでいます。",
  info: [
    { fieldName: "名前", fieldValue: "Dinh Quang Chung" },
    { fieldName: "電話", fieldValue: "070 4003 9831" },
    { fieldName: "実務年数", fieldValue: "5年以上" },
    { fieldName: "Email", fieldValue: "dinhquangchung.k9sh@gmail.com" },
    { fieldName: "国籍", fieldValue: "ベトナム" },
    { fieldName: "趣味", fieldValue: "ゲーム" },
    { fieldName: "言語", fieldValue: "ベトナム語, 日本語" },
  ],
};