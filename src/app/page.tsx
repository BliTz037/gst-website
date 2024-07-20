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

export default function Home() {
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
                Game Server Tracker API
              </h2>
              <h2 className="text-base font-semibold leading-7 text-primary">
                A simplest way to track your game server
              </h2>
              <p className="mt-6 text-lg leading-8">
                GST gives to you information like number of players connected on
                various game servers (Minecraft, Source, GTA V).
              </p>
            </div>
          </div>
        </section>
        <div className="container min-h-screen pt-6 lg:pt-10">
          <div className=" flex justify-center items-center">
            <Card>
              <CardHeader>
                <CardTitle>Track a server</CardTitle>
                <CardDescription>
                  Provide the server address and get the information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row space-x-2">
                  <Input value="mc.hypixel.net" placeholder="Server address" />
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Server Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mc">Minecraft Java Edition</SelectItem>
                      <SelectItem value="mcbedrock">
                        Minecraft Bedrock Edition
                      </SelectItem>
                      <SelectItem value="source">Source</SelectItem>
                      <SelectItem value="fivem">FiveM / RedM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="justify-end">
                <Button>Track it</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
