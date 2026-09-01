import type { NextApiRequest, NextApiResponse } from "next";

type Health = {
  status: "ok";
  service: string;
  version: string;
  timestamp: string;
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Health>,
) {
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({
    status: "ok",
    service: "play-to-earn-game",
    version: process.env.NEXT_PUBLIC_APP_VERSION ?? "0.1.0",
    timestamp: new Date().toISOString(),
  });
}
