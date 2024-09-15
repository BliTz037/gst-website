import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MinecraftIcon } from "../icons/MinecraftIcon";
import { SourceIcon } from "../icons/SourceIcon";
import { FiveMIcon } from "../icons/FiveMIcon";

const serverTypeIcons = {
  mc: () => <MinecraftIcon width={64} height={64} />,
  mcbedrock: () => <Image src="/bedrock.webp" alt="Bedrock" width={96} height={96} />,
  source: () => <SourceIcon width={64} height={64} color="#f0db4f" />,
  fivem: () => <FiveMIcon width={64} height={64} color="white" />,
};

export const ServerTypeCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Server Type</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-2">
          {serverTypeIcons['mc']()}
        </div>
        <div className="text-xl font-bold text-center">
          Minecraft Java Edition
        </div>
      </CardContent>
    </Card>
  );
};
