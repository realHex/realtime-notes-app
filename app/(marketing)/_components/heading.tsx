"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

 //Acts as a client component, not a server component

export const Heading = () => {
    return(
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center">
                Your Ideas, Documents, & Plans. Unified. Welcome to  
                <span  className="underline"> Realtime Notion</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium text-center">
                Realtime Notion is a collaborative workspace that <br/>
                brings your team's ideas and documents together in one place.
            </h3>
            <Button>
                Enter the Workspace
                <ArrowRight className="w-4 h-4"/>
            </Button>
        </div>
    )
}