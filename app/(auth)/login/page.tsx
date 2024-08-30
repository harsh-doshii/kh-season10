import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Login() {
  return (
    <div className="mt-24 rounded  py-10 py-6 md:mt-0 md:max-w-sm md:px-14">
      <form>
        <h1 className="text-3xl">Login</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="email"
            className="bg-[#03b6fc] placeholder:text-xs placeholder:text-white w-full inline-block"
          />
          <Button
            // variant="secondary"
            type="submit"
            className="w-full bg-[#03b6fc] text-black"
          >
            Log in
          </Button>
          <div className="text-white text-sm mt-2 center">
            Welcome to season 10
            {/* <Link href="/login" className="text-white hover:underline">
              {" "}
              Login now!
            </Link> */}
          </div>
        </div>
      </form>
    </div>
  );
}
