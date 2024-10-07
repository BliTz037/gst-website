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
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel } from "../ui/form";

const serverTypes: any[] = [
  { value: "mc", label: "Minecraft Java Edition" },
  { value: "mcbedrock", label: "Minecraft Bedrock Edition" },
  { value: "source", label: "Source" },
  { value: "fivem", label: "FiveM / RedM" },
];

const formSchema = z.object({
  serverAddress: z.string(),
  serverType: z.string(),
});

export const TrackServerForm = ({
  serverAddress,
  serverType,
  setServerAddress,
  setServerType,
  setData,
}: {
  serverAddress: string;
  serverType: string;
  setServerAddress: any;
  setServerType: any;
  setData: any;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serverAddress: "mc.hypixel.net",
      serverType: "mc",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (serverAddress !== values.serverAddress || serverType !== values.serverType) {
      setData(null);
    }
    setServerAddress(values.serverAddress);
    setServerType(values.serverType);
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Track a server</CardTitle>
        <CardDescription>
          Provide the server address and get the information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} id="trackServerForm">
            <div className="flex flex-wrap justify-center items-center lg:space-x-2">
              <div className="min-w-[12rem]">
                <FormField
                  control={form.control}
                  name="serverType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Server type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        name="serverType"
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {serverTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
              <div className="grow">
                <FormField
                  control={form.control}
                  name="serverAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <Input placeholder="Server address" {...field} />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-end">
        <Button type="submit" form="trackServerForm">
          Track it
        </Button>
      </CardFooter>
    </Card>
  );
};
