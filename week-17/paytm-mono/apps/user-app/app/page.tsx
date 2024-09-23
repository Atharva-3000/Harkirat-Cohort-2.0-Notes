import { PrismaClient } from "@repo/db/client";
const client = new PrismaClient();
import {useBalance} from "@repo/store/useBalance";
export default function Home() {
  return (
    <div className="text-3xl text-purple-700">
      Hello there {useBalance()}
    </div>
  );
}
