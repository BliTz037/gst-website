"use client";

import { Header } from "@/components/ui/header";
import Image from "next/image";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { fetchServerData } from "@/lib/api";
import { TrackServerForm } from "@/components/forms/TrackServerForm";
import { Footer } from "@/components/ui/footer";
import { ServerStatusCard } from "@/components/cards/ServerStatusCard";
import { PlayerListCard } from "@/components/cards/PlayerListCard";
import { PlayersOnlineCard } from "@/components/cards/PlayersOnlineCard";
import { ServerTypeCard } from "@/components/cards/ServerTypeCard";
import { ServerVersionCard } from "@/components/cards/ServerVersionCard";
import { ServerMapCard } from "@/components/cards/ServerMapCard";

export default function Home() {
  const [serverAddress, setServerAddress] = useState("mc.hypixel.net");
  const [serverType, setServerType] = useState("mc");

  const data = fetchServerData(serverAddress, serverType);

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
              setServerAddress={setServerAddress}
              serverType={serverType}
              setServerType={setServerType}
            />
          </div>
        </div>
        <div className="container pt-6 lg:pt-8">
          <Separator />
          <div className="p-2">
            <h2 className="text-3xl font-bold text-center font-bold p-2">
              Hypixel
            </h2>
            <h2 className="text-base text-center text-primary">
              mc.hypixel.net
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-3 lg:grid-cols-4">
            <ServerTypeCard />
            <ServerStatusCard serverStatus={{ isOnline: true, last: "N/A" }} />
            <PlayersOnlineCard />
            <ServerVersionCard />
            <ServerMapCard />
            <PlayerListCard />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
