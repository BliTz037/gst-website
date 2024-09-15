import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const ServerMapCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">rp_rockford_v2b</div>
      </CardContent>
    </Card>
  );
};
