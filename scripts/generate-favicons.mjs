import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const iconSvg = readFileSync(join(root, "public/images/logo-icon.svg"));

async function generate() {
  const icon32 = await sharp(iconSvg).resize(32, 32).png().toBuffer();
  const icon180 = await sharp(iconSvg).resize(180, 180).png().toBuffer();

  writeFileSync(join(root, "app/icon.png"), icon32);
  writeFileSync(join(root, "app/apple-icon.png"), icon180);

  console.log("Generated app/icon.png (32×32) and app/apple-icon.png (180×180)");
}

generate().catch((error) => {
  console.error(error);
  process.exit(1);
});
