import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const ServerMapCard = ({
  serverMap,
}: {
  serverMap?: {
    serverMap: string | undefined;
  };
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {serverMap?.serverMap ?? "N/A"}
        </div>
      </CardContent>
    </Card>
  );
};
