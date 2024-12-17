import QRCode from "../../qrcode";
import { PassThrough } from "stream";

export default async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "image/png");
  try {
    const cht = req.query.cht || "qr";
    const chs = req.query.chs || "150x150";
    const chl = req.query.chl || "hello,world";
    const choe = req.query.choe || "UTF-8";
    const chld = req.query.chld || "L|4";

    const width = parseInt(
      chs.split("x").length >= 2 ? chs.split("x")[0] : "150"
    );
    const errorCorrectionLevel =
      chld.split("|").length >= 2 ? chld.split("|")[0] : "L";
    const margin = parseInt(
      chld.split("|").length >= 2 ? chld.split("|")[1] : "4"
    );

    // https://stackoverflow.com/questions/59863984/express-generate-and-return-qr-code-on-get-request
    const qrStream = new PassThrough();
    await QRCode.toFileStream(qrStream, chl, {
      type: "png",
      width: width,
      errorCorrectionLevel: errorCorrectionLevel,
      margin: margin,
    });

    qrStream.pipe(res);
  } catch (err) {
    console.error("Failed to return content", err);
  }
};
