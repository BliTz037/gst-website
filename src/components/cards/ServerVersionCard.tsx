import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const ServerVersionCard = ({
  serverVersion,
}: {
  serverVersion?: {
    version: string | undefined;
    os: string | undefined;
    protocol: string | undefined;
  };
}) => {
  const nullElement = <div className="text-2xl font-bold">N/A</div>;
  const versionElement = (serverVersion: {
    version: string | undefined;
    os: string | undefined;
    protocol: string | undefined;
  }) => {
    return (
      <div className="text-2xl font-bold">
        {serverVersion?.version} (Protocol {serverVersion?.protocol})
        {serverVersion?.os ? ` - ${serverVersion?.os}` : ""}
      </div>
    );
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Version</CardTitle>
      </CardHeader>
      <CardContent>
        {serverVersion ? versionElement(serverVersion) : nullElement}
      </CardContent>
    </Card>
  );
};
