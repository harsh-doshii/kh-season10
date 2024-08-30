import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="mt-24 rounded bg-white/60 py-10 py-6 md:mt-0 md:max-w-sm md:px-14">
      <form>
        <h1 className="text-3xl font-semibold text-black">Signup</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="email"
            className="bg-[#03b6fc] placeholder:text-xs placeholder:text-white w-full inline-block"
          />
          <Button type="submit" className="w-full bg-[#03b6fc]">
            Sign up
          </Button>
          <div className="text-black text-sm mt-2">
            Already have an account?
            <Link href="/login" className="text-black hover:underline">
              {" "}
              Login now!
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
