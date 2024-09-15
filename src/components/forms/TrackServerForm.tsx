import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Dispatch, SetStateAction } from "react";

const serverTypes: any[] = [
  { value: "mc", label: "Minecraft Java Edition" },
  { value: "mcbedrock", label: "Minecraft Bedrock Edition" },
  { value: "source", label: "Source" },
  { value: "fivem", label: "FiveM / RedM" },
];

export const TrackServerForm = ({
  serverAddress,
  setServerAddress,

  serverType,
  setServerType,
}: {
  serverAddress: string;
  setServerAddress: Dispatch<SetStateAction<string>>;
  serverType: string;
  setServerType: Dispatch<SetStateAction<string>>;
}) => {
  return (
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
  );
};
