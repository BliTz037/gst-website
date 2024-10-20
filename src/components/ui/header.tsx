import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServerIcon } from "@/components/icons/ServerIcon";
import { DATA } from "@/data/data";

export function Header() {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex flex-row gap-3 p-5">
        <ServerIcon width={32} height={32} />
        <h1 className="font-heading text-xl md:text-2xl font-bold">Game Server Tracker</h1>
      </div>
      <div>
        <Link href={DATA.swagger}>
          <Button variant="link">Swagger</Button>
        </Link>
        <Link href={DATA.links.github}>
          <Button variant="link">Github</Button>
        </Link>
      </div>
    </div>
  );
}
