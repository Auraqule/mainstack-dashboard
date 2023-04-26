import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer, Header, LineChart } from "./components";
import { AiOutlineInfoCircle } from "react-icons/ai";
import AnalyticsData from "@/typings";
import { sumKeys } from "@/utils";
const inter = Inter({ subsets: ["latin"] });
const API_URL = "https://fe-task-api.mainstack.io/";

const fetchAnalyticsData = async () => {
  const res = await fetch(API_URL);
  const data: AnalyticsData = await res.json();
  return data;
};

export default async function Home() {
  const analyticsData = await fetchAnalyticsData();
  return (
    <section className="w-[95%] mx-auto md:w-full h-auto sm:h-full pb-6  md:pr-[5%] sm:overflow-y-scroll">
      <Header />
      {/* =============== Main =========== */}
      <main className="my-6 flex-1 rounded-xl px-6 pt-7 pb-5 h-auto border-[1px]">
        <div className="font-semibold flex items-center justify-between">
          <div>
            <p>Page Views</p>
            <p className="text-sm font-normal mt-2">All time</p>
            <p className="text-3xl font-semibold mt-4">
              {sumKeys(analyticsData.graph_data.views)}
            </p>
          </div>

          <AiOutlineInfoCircle className="opacity-60" />
        </div>
        <div className="w-full">
          <LineChart views={analyticsData.graph_data.views} />
        </div>
      </main>
      <Footer analytics={analyticsData} />
    </section>
  );
}
