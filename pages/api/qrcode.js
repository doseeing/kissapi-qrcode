import QRCode from "../../qrcode";

export const config = {
  runtime: "edge",
  unstable_allowDynamic: [
    "**/node_modules/pngjs/**", // use a glob to allow anything in the function-bind 3rd party module
  ],
};

export default async (req) => {
  const { searchParams } = new URL(req.url);
  // try {
  const cht = searchParams.get("cht") || "qr";
  const chs = searchParams.get("chs") || "150x150";
  const chl = searchParams.get("chl") || "hello,world";
  const choe = searchParams.get("choe") || "UTF-8";
  const chld = searchParams.get("chld") || "L|4";

  const width = parseInt(
    chs.split("x").length >= 2 ? chs.split("x")[0] : "150"
  );
  const errorCorrectionLevel =
    chld.split("|").length >= 2 ? chld.split("|")[0] : "L";
  const margin = parseInt(
    chld.split("|").length >= 2 ? chld.split("|")[1] : "4"
  );

  const svg = await QRCode.toBuffer(chl, { type: "png" });

  return new Response(svg, {
    status: 200,
    headers: { "Content-Type": "image/png" },
  });
};
