"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "ウェブサイト開発",
    description:"デザイナーと協力し、HTML、CSS、JavaScript、jQueryを用いてコンポーネントやレイアウト、ページの開発を行い。レスポンシブデザインを活用して、多様なデバイスに対応したUIを実装。また、アクセシビリティの実装にも注力し、ブラウザテストとデバッグを通じて高品質なコードを提供。お客様からのフィードバックやトラブルにも対応し、納品までを担当。",
  },
  {
    num: "02",
    title: "ウェブアプリケーション開発",
    description:"デザイナーと協力し、Vue、React、TypeScriptを用いてコンポーネントの開発や状態管理を設計。APIとのデータ連携、UI/UXの実装、テスト、パフォーマンス最適化も担当。LaravelやNode.jsを使用したAPI開発。",
  },
];


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <main
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-pink-500 transition-all duration-500">
                    {service.num}
                  </div>
                
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-pink-500 transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="mt-auto border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </main>
      </div>
    </section>
  );
};

export default Services;
