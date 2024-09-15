import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const ServerStatusCard = ({
  serverStatus,
}: {
  serverStatus: { isOnline: boolean; last: string };
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">
          {serverStatus.isOnline ? "ONLINE" : "OFFLINE"}
        </div>
        <div className="text-sm">{`Last ${serverStatus.isOnline ? "Online" : "Offline"}: ${serverStatus.last ?? "N/A"}`}</div>
      </CardContent>
    </Card>
  );
};
