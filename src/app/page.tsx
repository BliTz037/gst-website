"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const serverTypes: any[] = [
  { value: "mc", label: "Minecraft Java Edition" },
  { value: "mcbedrock", label: "Minecraft Bedrock Edition" },
  { value: "source", label: "Source" },
  { value: "fivem", label: "FiveM / RedM" },
];

export default function Home() {
  const [serverAddress, setServerAddress] = useState("mc.hypixel.net");
  const [serverType, setServerType] = useState("mc");

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
            <Card className="w-full max-w-2xl">
              <CardHeader>
                <CardTitle>Track a server</CardTitle>
                <CardDescription>
                  Provide the server address and get the information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center items-center lg:space-x-2">
                  <div className="min-w-[12rem]">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Server Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {serverTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grow">
                    <Input
                      className=""
                      value={serverAddress}
                      placeholder="Server address"
                      onChange={(e) => setServerAddress(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="justify-end">
                <Button>Track it</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="container pt-6 lg:pt-8">
          <Separator />
          <div className="p-2">
            <h2 className="text-3xl font-bold text-center font-bold p-2">
              Hypixel
            </h2>
            <h2 className="text-base text-center">mc.hypixel.net</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-3 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Server Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">Minecraft Java Edition</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">OFFLINE</div>
                <div className="text-sm">Last Online: 2024-01-01 13:42:02</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Players</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">1295 / 10000</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Version</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Requires MC 1.8 / 1.21</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">rp_rockford_v2b</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Player List</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Connected since</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">BliTz_37</TableCell>
                      <TableCell className="font-medium">1 hour</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">BliTz_37</TableCell>
                      <TableCell className="font-medium">1 hour</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">BliTz_37</TableCell>
                      <TableCell className="font-medium">1 hour</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Made with ❤️ by{" "}
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              @BliTz
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
}
