"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
                Your Ideas, Documents, & Plans - Unified. Welcome to <span className="underline">Notations</span>
            </h1>
            <h3 className="text-base sm:texx-xl md:text-2xl font-medium">
                Notations is the connected workspace where <br/> better, faster work happens
            </h3>
            <Button>Enter Notations <ArrowRight className="h-4 w-4 ml-2"/></Button>
        </div>
    );
}

export default Heading;