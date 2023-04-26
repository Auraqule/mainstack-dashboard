import Image from "next/image";
import React from "react";
import { COLORS } from "../constants";
import AnalyticsData from "@/typings";
import TopLocationChart from "../TopLocationChart";
import TopSourceChart from "../TopSourceChart";

type Iprops = {
  analytics: AnalyticsData;
};
const Footer = ({ analytics }: Iprops) => {
  return (
    <footer className="flex-1 h-auto md:h-[326px]">
      <div>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="basis-1/2 w-full md:w-[95%] rounded-xl p-6  border-[1px]">
            <div className="font-semibold flex items-center justify-between">
              <p>Top Locations</p>
              <div className="text-darkOrange_ hover:underline underline-offset-4 cursor-default text-sm font-normal">
                <p>View full reports</p>
              </div>
            </div>
            <div className="flex w-[100%] md:w-[95%] h-[200px] mt-10 items-center justify-between">
              {/* ============= TOP LOCATIONS =============== */}
              <div>
                {analytics.top_locations.map((location) => (
                  <div key={location.country} className="mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Image
                        src={`/${
                          location.country === "Nigeria"
                            ? "nigeria"
                            : location.country === "Germany"
                            ? "germany"
                            : location.country === "Ghana"
                            ? "ghana"
                            : location.country === "Finland"
                            ? "finland"
                            : "uk"
                        }.svg`}
                        alt={location.country}
                        className="w-[21px] h-[15px]"
                        width={21}
                        height={15}
                      />
                      <p>
                        {location.country}
                        <span className="ml-2 font-medium">
                          {location.percent}%
                        </span>
                      </p>
                      <div
                        style={{
                          backgroundColor:
                            location.country === "Nigeria"
                              ? COLORS.blue_
                              : location.country === "Germany"
                              ? COLORS.purple_
                              : location.country === "Ghana"
                              ? COLORS.green_
                              : location.country === "Finland"
                              ? COLORS.yellow_
                              : COLORS.brown_,
                        }}
                        className={`w-3 h-3 ml-2 rounded-full `}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* ============  CHART ========== */}
              <div className="w-[160px] h-[160px]  rounded-full">
                <TopLocationChart top_locations={analytics.top_locations} />
              </div>
            </div>
          </div>

          {/* TOP SOURCES */}
          <div className="basis-1/2 w-full md:w-[95%]   rounded-xl p-6  border-[1px]">
            <div className="font-semibold flex items-center justify-between">
              <p>Top Referral source</p>
              <div className="text-darkOrange_ hover:underline underline-offset-4 cursor-default text-sm font-normal">
                <p>View full reports</p>
              </div>
            </div>
            <div className="flex mt-10 items-center h-[200px] justify-between">
              <div>
                {analytics.top_sources.map((source) => (
                  <div key={source.source} className="mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Image
                        src={`/${source.source}.svg`}
                        alt={source.source}
                        className="w-[21px] h-[15px]"
                        width={21}
                        height={15}
                      />
                      <p className="capitalize">
                        {source.source}
                        <span className="ml-2 font-medium">
                          {source.percent}%
                        </span>
                      </p>
                      <div
                        style={{
                          backgroundColor:
                            source.source === "google"
                              ? COLORS.blue_
                              : source.source === "instagram"
                              ? COLORS.purple_
                              : source.source === "facebook"
                              ? COLORS.green_
                              : COLORS.yellow_,
                        }}
                        className={`w-3 h-3 ml-2 rounded-full `}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* ============  CHART ========== */}
              <div className="w-[160px] h-[160px] rounded-full">
                <TopSourceChart top_sources={analytics.top_sources} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
