import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <main className="h-full py-7 xl:py-10">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-20">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6 text-[65px]">
              Hello I'm <br />{" "}
              <span className="text-pink-500">DINH QUANG CHUNG</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Web制作の分野で5年間の経験があり、HTML・CSS・JavaScriptを中心に、必要に応じてVueやReactを用いたSPA開発にも携わってきました。セマンティックなマークアップやレスポンシブデザインを意識し、ユーザーにとって見やすく使いやすいWebページ制作を心がけています。どうぞよろしくお願いいたします。
            </p>
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
                  iconStyles="w-9 h-9 border border-pink-500 rounded-full flex justify-center items-center text-pink-500 text-base hover:bg-pink-500 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </main>
  );
};

export default Home;
