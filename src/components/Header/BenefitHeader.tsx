import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

export default function BenefitHeader({title, description}: {title: string, description: string}) {
    return (
      <header className="p-6">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Button
            variant="outline"
            className="border-white/30 bg-white/20 text-white backdrop-blur-md hover:bg-white/30"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="text-right">
          <h1 className="font-bold text-2xl text-white md:text-3xl">
            {title}
          </h1>
          <p className="text-sm text-white/80">{description}</p>
        </div>
      </div>
    </header>

    );
}
