
import crypto from "node:crypto";
import dotenv from "dotenv";
import path from "node:path";

dotenv.config({
  path: path.resolve(process.cwd(), "../.env"),
});

const orderId = "order_TyrL4R1a0NEBgo";
const paymentId = "2841f4cd-f368-4705-839b-41ae51a0d50b";

const secret = process.env.RAZORPAY_KEY_SECRET;

if (!secret) {
  throw new Error("RAZORPAY_KEY_SECRET is missing from parent .env");
}

const signature = crypto
  .createHmac("sha256", secret)
  .update(`${orderId}|${paymentId}`)
  .digest("hex");

console.log("Secret loaded:", Boolean(secret));
console.log("Generated signature:", signature);
