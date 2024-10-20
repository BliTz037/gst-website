import React, { useState, useEffect, Suspense } from "react";
import { Separator } from "@radix-ui/react-separator";
import { Skeleton } from "../ui/skeleton";
import { fetchServerData } from "@/lib/api";
import { PlayerListCard } from "./PlayerListCard";
import { PlayersOnlineCard } from "./PlayersOnlineCard";
import { ServerMapCard } from "./ServerMapCard";
import { ServerStatusCard } from "./ServerStatusCard";
import { ServerTypeCard } from "./ServerTypeCard";
import { ServerVersionCard } from "./ServerVersionCard";

const mcServerSkeleton = (
  <>
    <Skeleton className="h-[150px] rounded-xl" />
    <Skeleton className="h-[150px] rounded-xl" />
    <Skeleton className="h-[150px] rounded-xl" />
    <Skeleton className="h-[150px] rounded-xl" />
    <Skeleton className="h-[150px] rounded-xl" />
  </>
);

const fivemServerSkeleton = (
  <>
    <Skeleton className="h-[150px] rounded-xl" />
    <Skeleton className="h-[150px] rounded-xl" />
    <Skeleton className="h-[150px] rounded-xl" />
    <Skeleton className="h-[150px] rounded-xl" />
    <Skeleton className="h-[150px] rounded-xl" />
    <Skeleton className="h-[150px] rounded-xl" />
  </>
);

const sourceServerSkeleton = (
  <>
    <Skeleton className="h-[150px] rounded-xl" />
    <Skeleton className="h-[150px] rounded-xl" />
    <Skeleton className="h-[150px] rounded-xl" />
    <Skeleton className="h-[150px] rounded-xl" />
    <Skeleton className="h-[150px] rounded-xl" />
    <Skeleton className="h-[150px] rounded-xl" />
  </>
);

const mcServer = (data: any) => (
  <>
    <ServerTypeCard serverType={"mc"} />
    <ServerStatusCard serverStatus={{ isOnline: data.online, last: "N/A" }} />
    <PlayersOnlineCard
      playersOnline={
        data?.players
          ? { online: data?.players?.online, max: data?.players?.max }
          : undefined
      }
    />
    <ServerVersionCard
      serverVersion={
        data?.version
          ? {
              version: data?.version?.name,
              os: "",
              protocol: data?.version?.protocol,
            }
          : undefined
      }
    />
  </>
);

const mcBedrockServer = (data: any) => (
  <>
    <ServerTypeCard serverType={"mcbedrock"} />
    <ServerStatusCard serverStatus={{ isOnline: data.online, last: "N/A" }} />
    <PlayersOnlineCard
      playersOnline={
        data?.players
          ? { online: data?.players?.online, max: data?.players?.max }
          : undefined
      }
    />
    <ServerVersionCard
      serverVersion={
        data?.version
          ? {
              version: data?.version?.name,
              os: "",
              protocol: data?.version?.protocol,
            }
          : undefined
      }
    />
  </>
);

const fivemServer = (data: any) => (
  <>
    <ServerTypeCard serverType={"fivem"} />
    <ServerStatusCard serverStatus={{ isOnline: data.online, last: "N/A" }} />
    <PlayersOnlineCard
      playersOnline={
        data?.clients
          ? { online: data?.clients, max: data?.sv_maxclients }
          : undefined
      }
    />
    <ServerMapCard
      serverMap={
        data?.mapname
          ? {
              serverMap: data?.mapname,
            }
          : undefined
      }
    />
  </>
);

const fivemCfxServer = (data: any) => (
  <>
    <ServerTypeCard serverType={"fivem"} />
    <ServerStatusCard serverStatus={{ isOnline: data.online, last: "N/A" }} />
    <PlayersOnlineCard
      playersOnline={
        data?.Data
          ? { online: data?.Data.clients, max: data?.Data.sv_maxclients }
          : undefined
      }
    />
    <ServerMapCard
      serverMap={
        data?.Data.mapname
          ? {
              serverMap: data?.Data.mapname,
            }
          : undefined
      }
    />
    <ServerVersionCard
      serverVersion={
        data?.Data.server
          ? {
              version: data?.Data.server,
              os: undefined,
              protocol: undefined,
            }
          : undefined
      }
    />
    <PlayerListCard
      players={
        data?.Data.players
          ? data?.Data.players.map((player: any) => ({
              name: player.name,
              connectedSince: null,
            }))
          : undefined
      }
    />
  </>
);

const sourceServer = (data: any) => (
  <>
    <ServerTypeCard serverType={"source"} />
    <ServerStatusCard serverStatus={{ isOnline: data.online, last: "N/A" }} />
    <PlayersOnlineCard
      playersOnline={
        data?.players
          ? { online: data?.players?.online, max: data?.players?.max }
          : undefined
      }
    />
    <ServerVersionCard
      serverVersion={
        data?.version
          ? {
              version: data?.version ?? "N/A",
              os: data?.OS ?? null,
              protocol: data?.protocol,
            }
          : undefined
      }
    />
    <ServerMapCard
      serverMap={
        data?.map
          ? {
              serverMap: data?.map,
            }
          : undefined
      }
    />
    <PlayerListCard
      players={
        data?.players?.list
          ? data?.players.list.map((player: any) => {
              let connectedSince = null;
              if (player.timeOnline) {
                const date = new Date(player?.timeOnline.start);
                connectedSince = `${date.toLocaleString()}`;
              }
              return {
                name: player.name,
                connectedSince: connectedSince ?? "N/A",
              };
            })
          : undefined
      }
    />
  </>
);

const nameSkeleton = (
  <div className="flex justify-center items-center">
    <Skeleton className="h-8 w-64 mb-5 rounded-lg" />
  </div>
);

interface ServerTrackerDashboardProps {
  serverAddress: string;
  serverType: string;
  setData: any;
  data: any;
}

export function ServerTrackerDashboard({
  serverAddress,
  serverType,
  setData,
  data,
}: ServerTrackerDashboardProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await fetchServerData(serverAddress, serverType);
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, [serverAddress, serverType]);

  const serverSkeleton = () => {
    switch (serverType) {
      case "mc":
        return mcServerSkeleton;
      case "mcbedrock":
        return mcServerSkeleton;
      case "fivemCfx":
      case "fivem":
        return fivemServerSkeleton;
      case "source":
        return sourceServerSkeleton;
      default:
        return null;
    }
  };

  const serverData = () => {
    if (!data) return null;
    switch (serverType) {
      case "mc":
        return mcServer(data);
      case "mcbedrock":
        return mcBedrockServer(data);
      case "fivemCfx":
        return fivemCfxServer(data);
      case "fivem":
        return fivemServer(data);
      case "source":
        return sourceServer(data);
      default:
        return null;
    }
  };

  return (
    <div className="container pt-6 lg:pt-8">
      <Separator />
      <div className="p-2">
        <Suspense fallback={nameSkeleton}>
          <h2 className="text-3xl font-bold text-center font-bold p-2">
            {serverAddress}
          </h2>
        </Suspense>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-3 lg:grid-cols-4">
        {loading ? serverSkeleton() : serverData()}
      </div>
    </div>
  );
}
