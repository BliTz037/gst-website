import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const ServerVersionCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Version</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">Requires MC 1.8 / 1.21</div>
      </CardContent>
    </Card>
  );
};
