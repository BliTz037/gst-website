import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MinecraftIcon } from "../icons/MinecraftIcon";
import { SourceIcon } from "../icons/SourceIcon";
import { FiveMIcon } from "../icons/FiveMIcon";

const serverTypeIcons: { [key: string]: () => JSX.Element } = {
  'mc': () => <MinecraftIcon width={64} height={64} />,
  'mcbedrock': () => <Image src="/bedrock.webp" alt="Bedrock" width={64} height={64} />,
  'source': () => <SourceIcon width={64} height={64} color="#f0db4f" />,
  'fivem': () => <FiveMIcon width={64} height={64} color="white" />,
};

const serverTypeName: { [key: string]: () => string } = {
  'mc': () => "Minecraft Java Edition",
  'mcbedrock': () => "Minecraft Bedrock Edition",
  'source': () => "Source",
  'fivem': () => "FiveM / RedM",
};

export const ServerTypeCard = ({serverType}: {serverType: string}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Server Type</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-2">
          {serverTypeIcons[serverType]()}
        </div>
        <div className="text-xl font-bold text-center">
          {serverTypeName[serverType]()}
        </div>
      </CardContent>
    </Card>
  );
};
