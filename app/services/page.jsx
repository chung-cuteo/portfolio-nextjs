
import Hero from "@/components/Hero";
import MainContent from "@/components/MainContent";
import Heading from "@/components/Heading";
import { webSiteServices, webAppServices, sectionIcons } from "@/data/servicesData";

export const metadata = {
  title: "Services — Dinh Quang Chung",
};

const Services = () => {
  const WebsiteIcon = sectionIcons.website;
  const WebAppIcon = sectionIcons.webapp;

  return (
    <>
      <Hero src="/images/services/hero.png" />
      <MainContent>
        <Heading text="Services" className="text-center animate-clip-reveal" />
        <p className="text-center pb-[30px]">
          Web開発エンジニアとして、フロントエンドからSPAまで幅広い開発経験を有し、
          ユーザー視点のUI/UX改善やパフォーマンス最適化を意識した実装が可能です。デザイナーやバックエンドチームと協働しながら、
          高品質なWebサイト・アプリケーションを提供してきました。
        </p>

        <div className="flex flex-col xl:flex-row p-8 gap-8">
          <div className="xl:max-w-[550px]">
            <div className="flex items-center gap-3 mb-4">
             {WebsiteIcon && <WebsiteIcon className="w-7 h-7 text-primary" aria-hidden="true" />}
              <h2>Webサイト開発</h2>
            </div>
            <ul className="bg-[#e30a9112] rounded-xl p-10">
              {webSiteServices.map(({ icon: Icon, iconClass, text }) => (
                <li key={text} className="flex items-start gap-3">
                  { Icon && <Icon aria-hidden="true" className={`${iconClass} flex-shrink-0`} /> }
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="xl:max-w-[550px]">
            <div className="flex items-center gap-3 mb-4">
              {WebAppIcon && <WebAppIcon className="w-7 h-7 text-primary" aria-hidden="true" />}
              <h2>Webアプリケーション開発</h2>
            </div>
            <ul className="bg-[#e30a9112] rounded-xl p-10">
              {webAppServices.map(({ icon: Icon, iconClass, text }) => (
                <li key={text} className="flex items-start gap-3">
                  { Icon && <Icon aria-hidden="true" className={`${iconClass} flex-shrink-0`} /> }
                  <span>{text}</span>
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
