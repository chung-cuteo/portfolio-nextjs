import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Hero from "@/components/Hero";
import MainContent from "@/components/MainContent";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Heading from "@/components/Heading";

const Home = () => {
  return (
    <>
      <Hero src="/images/hero.png" />
      <MainContent>
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="text-center flex flex-col xl:text-left  xl:items-start items-center order-2 xl:order-none">
            <span className="text-xl">Frontend Developer</span>
            <p className="text-[30px] xl:text-[50px] my-4">Hello I'm </p>
            <Heading
              text="Dinh Quang Chung"
              className="relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-primary"
            />
            <div className="max-w-[500px] mb-9 mx-auto xl:mx-0">
              <p>
                Web 制作に携わって4年以上、主に HTML・CSS・JavaScript
                を中心としたフロントエンド開発を行ってきました。Vue.js や React
                を使った SPA の実装にも取り組み、見やすく使いやすい UI/UX
                と、セマンティックで保守しやすいコードを意識しています。
              </p>
              <p className="mt-6">
                また、必要に応じて Node.js や PHP / Laravel を用いた簡単な API
                開発やサーバーサイドの補助作業も担当した経験があります。フロントエンドを軸にしつつ、バックエンドとの連携も理解した上で、より良い
                Web 体験を作ることを目指しています。
              </p>
            </div>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-primary rounded-full flex justify-center items-center text-primary text-base hover:bg-primary hover:text-white hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </MainContent>
    </>
  );
};

export default Home;
