import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import f1 from "../../../src/images/founders/Abdul Matin Qalandari.jpg"
import f2 from "../../../src/images/founders/Esmatullah Wardak.jpg"
import f3 from "../../../src/images/founders/a.jpg"
export default function Founders() {
  return (
    <>
      <div className="py-5 px-5">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-black mb-4">Founders</h2>
          <p className="text-xl text-black mb-12">
            MEET THE VISIONARIES BEHIND AFGHAN INVEST
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8 ">
          {/* Founder 1 */}
          <div className="w-full rounded-xl bg-gray-50 shadow-lg group">
            <div className="overflow-hidden rounded-t-xl">
              <img
                className="w-full h-[auto] bg-cover bg-no-repeat rounded-t-xl transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                src={f1}
                alt=""
              />
            </div>
            <div className="p-8 flex flex-col gap-4" style={{ minHeight: "500px" }}>
              <h2 className="font-semibold text-2xl">
                Chairman of Board of Directors at Afghanistan Chamber of
                Industry and Mines and Chairman & Founder of Baheer Group of
                Companies
              </h2>
              <div className="flex justify-between">
                <span className="font-bold">Founder :</span>
                <span className="font-semibold opacity-75">
                  Mr. Abdul Matin Qalandari
                </span>
              </div>
              <div className="flex justify-end">
                <Link to="/about">
                  <GoArrowRight className="w-10 h-10" />
                </Link>
              </div>
            </div>
          </div>
          {/* Founder 2 */}
          <div className="w-full rounded-xl bg-gray-50 shadow-lg group">
            <div className="overflow-hidden rounded-t-xl">
              <img
                className="w-full h-[auto] bg-cover bg-no-repeat rounded-t-xl transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                src={f2}
                alt=""
              />
            </div>
            <div className="p-8 flex flex-col gap-4" style={{ minHeight: "500px" }}>
              <h2 className="font-semibold text-2xl">
                Chairman of Ghazni Province’s Chamber of Commerce and Investment
                and Founder and chairman of Green Energy Plus (Battery
                Manufacturing Company)
              </h2>
              <div className="flex justify-between">
                <span className="font-bold">Founder :</span>
                <span className="font-semibold opacity-75">
                  Mr. Esmatullah Wardak
                </span>
              </div>
              <div className="flex justify-end">
                <Link to="/about">
                  <GoArrowRight className="w-10 h-10" />
                </Link>
              </div>
            </div>
          </div>
          {/* Founder 3 */}
          <div className="w-full rounded-xl bg-gray-50 shadow-lg group">
            <div className="overflow-hidden rounded-t-xl">
              <img
                className="w-full h-[auto] bg-cover bg-no-repeat rounded-t-xl transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                src={f3}
                alt=""
              />
            </div>
            <div className="p-8 flex flex-col gap-4" style={{ minHeight: "500px" }}>
              <h2 className="font-semibold text-2xl">
                Chairman of Afghanistan Chamber of Commerce and Investment and
                Chairman and Founder of Kabul Folad Steel Company
              </h2>
              <div className="flex justify-between">
                <span className="font-bold">Founder :</span>
                <span className="font-semibold opacity-75">
                  Mr. Shirbaz Kaminzada
                </span>
              </div>
              <div className="flex justify-end">
                <Link to="/about">
                  <GoArrowRight className="w-10 h-10" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
