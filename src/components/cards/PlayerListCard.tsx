import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { ScrollArea } from "../ui/scroll-area";

export const PlayerListCard = ({
  players,
}: {
  players: { name: string; connectedSince: string }[] | undefined;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Player List</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-72">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Connected since</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {players && players.length >= 0 ? (
                players.map((player) => (
                  <TableRow>
                    <TableCell key={player.name}>{player.name}</TableCell>
                    <TableCell key={player.connectedSince}>
                      {player.connectedSince}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={2} className="text-center">
                    No players online
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
