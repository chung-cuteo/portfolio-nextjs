"use client";

import Hero from "@/components/Hero";
import MainContent from "@/components/MainContent";

import {
  HiOutlineViewBoards,
  HiOutlineCode,
  HiOutlineCheckCircle,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineDatabase,
  HiOutlineServer,
} from "react-icons/hi";
import {
  HiCpuChip,
  HiOutlineDevicePhoneMobile,
  HiOutlineSquares2X2,
  HiOutlineBolt,
} from "react-icons/hi2";
import { SiRedux } from "react-icons/si";

const webSiteServices = [
  {
    icon: <HiOutlineCode className="w-8 h-6 text-primary mt-1" />,
    text: "デザイナーと協働でHTML/CSS/JavaScript/jQueryによるページ・コンポーネント実装",
  },
  {
    icon: (
      <HiOutlineDevicePhoneMobile className="w-5 h-5 text-primary mt-1" />
    ),
    text: "レスポンシブデザインでマルチデバイス対応",
  },
  {
    icon: <HiOutlineCheckCircle className="w-5 h-5 text-primary mt-1" />,
    text: "アクセシビリティ改善を含むUI実装",
  },
  {
    icon: <HiOutlineChartBar className="w-5 h-5 text-primary mt-1" />,
    text: "ブラウザテスト・デバッグによる品質向上",
  },
  {
    icon: <HiOutlineUsers className="w-5 h-5 text-primary mt-1" />,
    text: "クライアントフィードバック対応、納品まで担当",
  },
];

const webAppServices = [
  {
    icon: <HiOutlineSquares2X2 className="w-5 h-5 text-primary mt-1" />,
    text: "Vue-Nuxt/React-Next/TypeScriptによるコンポーネント開発",
  },
  {
    icon: <SiRedux className="w-5 h-5 text-primary mt-1" />,
    text: "状態管理（Vuex/Pinia/Redux）を用いた設計",
  },
  {
    icon: <HiOutlineDatabase className="w-5 h-5 text-primary mt-1" />,
    text: "APIとの非同期データ連携",
  },
  {
    icon: <HiOutlineBolt className="w-5 h-5 text-primary mt-1" />,
    text: "UI/UX改善・パフォーマンス最適化",
  },
  {
    icon: <HiOutlineServer className="w-5 h-5 text-primary mt-1" />,
    text: "Laravel/Node.jsによる簡易API作成",
  },
];

const Services = () => {
  return (
    <>
      <Hero src="/images/services/hero.png" />
      <MainContent>
        <p className="text-center pb-[30px]">
          Web開発エンジニアとして、フロントエンドからSPAまで幅広い開発経験を有し、ユーザー視点のUI/UX改善やパフォーマンス最適化を意識した実装が可能です。デザイナーやバックエンドチームと協働しながら、高品質なWebサイト・アプリケーションを提供してきました。
        </p>
        <div className="flex flex-col xl:flex-row p-8 gap-8">
          <div className="xl:max-w-[550px]">
            <div className="flex items-center gap-3 mb-4">
              <HiOutlineViewBoards className="w-7 h-7 text-primary" />
              <h2 className="text-[25px] font-semibold">Webサイト開発</h2>
            </div>
            <ul className="bg-[#e30a9112] rounded-xl p-10">
               {webSiteServices.map(({icon,text}, i) => (
                <li key={i} className="flex items-start gap-2">
                  {icon}
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="xl:max-w-[550px]">
            <div className="flex items-center gap-3 mb-4">
              <HiCpuChip className="w-7 h-7 text-primary" />
              <h2 className="text-[25px] font-semibold">
                Webアプリケーション開発
              </h2>
            </div>
            <ul className="bg-[#e30a9112] rounded-xl p-10">
              {webAppServices.map(({icon,text}, i) => (
                <li key={i} className="flex items-start gap-2">
                  {icon}
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MainContent>
    </>
  );
};

export default Services;
