import { getDiscoveryText } from "../lib/discovery";

export const dynamic = "force-static";

export function GET() {
  return new Response(getDiscoveryText(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
