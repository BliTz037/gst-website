"use client";

import { Header } from "@/components/ui/header";
import Image from "next/image";
import { useState } from "react";
import { TrackServerForm } from "@/components/forms/TrackServerForm";
import { Footer } from "@/components/ui/footer";
import { ServerTrackerDashboard } from "@/components/cards/ServerTrackerDashboard";
import React from "react";

export default function Home() {
  const [serverAddress, setServerAddress] = useState("mc.hypixel.net");
  const [serverType, setServerType] = useState("mc");
  const [data, setData] = useState(null);

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        <section className="p-10" style={{ backgroundColor: "#1E1F1C" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div className="mx-auto max-w-2xl lg:text-center">
              <div className="flex justify-center item-center">
                <Image
                  src="/gst_icon.png"
                  alt="GST Icon"
                  width={96}
                  height={96}
                />
              </div>
              <h2 className="md:text-5xl text-3xl font-bold p-2">
                Game Server Tracker
              </h2>
              <h2 className="text-base font-semibold leading-7 text-primary">
                A simplest way to track your game server
              </h2>
              <p className="mt-6 text-lg leading-8">
                GST gives server information about your favorite game servers
                (Minecraft, Source, GTA V).
              </p>
            </div>
          </div>
        </section>
        <div className="container pt-6 lg:pt-10">
          <div className="flex justify-center items-center">
            <TrackServerForm
              serverAddress={serverAddress}
              serverType={serverType}
              setServerAddress={setServerAddress}
              setServerType={setServerType}
              setData={setData}
            />
          </div>
        </div>
        <ServerTrackerDashboard
          serverAddress={serverAddress}
          serverType={serverType}
          setData={setData}
          data={data}
        />
      </main>
      <Footer />
    </>
  );
}
