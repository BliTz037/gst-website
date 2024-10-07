import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const PlayersOnlineCard = ({
  playersOnline,
}: {
  playersOnline?: { online: number; max: number };
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Players</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">
          {playersOnline
            ? `${playersOnline.online} / ${playersOnline.max}`
            : "N/A"}
        </div>
      </CardContent>
    </Card>
  );
};
