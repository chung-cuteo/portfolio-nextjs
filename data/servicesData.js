import {
  HiOutlineViewBoards,
  HiOutlineCode,
  HiOutlineCheckCircle,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineDatabase,
  HiOutlineServer,
  HiOutlineSquares2X2,
} from "react-icons/hi";
import {
  HiCpuChip,
  HiOutlineDevicePhoneMobile,
  HiOutlineBolt,
} from "react-icons/hi2";
import { SiRedux } from "react-icons/si";

const webSiteServices = [
  {
    icon: HiOutlineCode,
    iconClass: "w-8 h-6 text-primary mt-1",
    text: "デザイナーと協働でHTML/CSS/JavaScript/jQueryによるページ・コンポーネント実装",
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    iconClass: "w-5 h-5 text-primary mt-1",
    text: "レスポンシブデザインでマルチデバイス対応",
  },
  {
    icon: HiOutlineCheckCircle,
    iconClass: "w-5 h-5 text-primary mt-1",
    text: "アクセシビリティ改善を含むUI実装",
  },
  {
    icon: HiOutlineChartBar,
    iconClass: "w-5 h-5 text-primary mt-1",
    text: "ブラウザテスト・デバッグによる品質向上",
  },
  {
    icon: HiOutlineUsers,
    iconClass: "w-5 h-5 text-primary mt-1",
    text: "クライアントフィードバック対応、納品まで担当",
  },
];

const webAppServices = [
  {
    icon: HiOutlineSquares2X2,
    iconClass: "w-5 h-5 text-primary mt-1",
    text: "Vue-Nuxt/React-Next/TypeScriptによるコンポーネント開発",
  },
  {
    icon: SiRedux,
    iconClass: "w-5 h-5 text-primary mt-1",
    text: "状態管理（Vuex/Pinia/Redux）を用いた設計",
  },
  {
    icon: HiOutlineDatabase,
    iconClass: "w-5 h-5 text-primary mt-1",
    text: "APIとの非同期データ連携",
  },
  {
    icon: HiOutlineBolt,
    iconClass: "w-5 h-5 text-primary mt-1",
    text: "UI/UX改善・パフォーマンス最適化",
  },
  {
    icon: HiOutlineServer,
    iconClass: "w-5 h-5 text-primary mt-1",
    text: "Laravel/Node.jsによる簡易API作成",
  },
];

const sectionIcons = {
  website: HiOutlineViewBoards,
  webapp: HiCpuChip,
};

export { sectionIcons, webAppServices, webSiteServices };
