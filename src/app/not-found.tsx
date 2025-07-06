import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 px-6">
      <div className="space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="font-bold text-8xl text-white/20 md:text-9xl">404</h1>
          <h2 className="font-bold text-3xl text-white md:text-4xl">
            Page Not Found
          </h2>
          <p className="mx-auto max-w-md text-gray-300 text-lg">
            このページは存在しません。お探しのページが見つからないか、削除された可能性があります。
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/">
            <Button className="border-white/30 bg-white/20 text-white backdrop-blur-md hover:bg-white/30">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
