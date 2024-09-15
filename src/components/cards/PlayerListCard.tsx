import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export const PlayerListCard = () => {
  return (
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
  );
};
