import Explore from "@mui/icons-material/Explore";
import Group from "@mui/icons-material/Group";
import OndemandVideoSharp from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenter from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded";

import Head from "next/head";
import Image from "next/image";
import React from "react";
import HeaderLink from "../components/HeaderLink";
import { getProviders, signIn } from 'next-auth/react';

const home = ({providers}) => {
  return (
    <div className="space-y-10">
      <Head>
        <title>LindIn Login</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" />
      </Head>
      <header className="flex justify-around items-center py-4">
        <div className="relative w-36 h-10">
          <Image
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
            alt={`logo`}
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            <HeaderLink Icon={Explore} text="Discover"/>
            <HeaderLink Icon={Group} text="People"/>
            <HeaderLink Icon={OndemandVideoSharp} text="Learning"/>
            <HeaderLink Icon={BusinessCenter} text="Jobs"/>
          </div>

          {
            providers && Object.values(providers).map(provider => (
              <div key={provider.name}>
                <div className="pl-4">
                  <button className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2" onClick={()=>signIn(provider.id, {callbackUrl: "/"})}>Sign in</button>
                </div>
              </div>
            ))
          }
          
        </div>
      </header>

      <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
        <div className="space-y-6 xl:space-y-10">
            <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0">Welcome to your professional community</h1>
            <div className="space-y-4">
              <div className="intent">
                <h2 className="text-xl">Search for a job</h2>
                <ArrowForwardIosRounded className="text-gray-700" />
              </div>
              <div className="intent">
                <h2 className="text-xl">Find a person you Know</h2>
                <ArrowForwardIosRounded className="text-gray-700" />
              </div>
              <div className="intent">
                <h2 className="text-xl">Learn a new skill</h2>
                <ArrowForwardIosRounded className="text-gray-700" />
              </div>
            </div>
        </div>

        <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-14 right-5">
          <Image src="/dxf91zhqd2z6b0bwg85ktm5s4.svg" alt="Banner" layout="fill" priority />
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: {providers}, // will be passed to the page component as props
  }
}

export default home;
