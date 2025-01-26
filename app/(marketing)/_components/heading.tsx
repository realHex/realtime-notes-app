"use client";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignIn, SignInButton } from "@clerk/clerk-react";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

 //Acts as a client component, not a server component

export const Heading = () => {
    const {isAuthenticated, isLoading} = useConvexAuth();

    return(
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center">
                Your Ideas, Documents, & Plans. Unified. Welcome to  
                <span  className="underline"> NotionCN</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium text-center">
                NotionCN is a Notion clone that 
                supports CollaboratioN
            </h3>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg"/>    
                </div>
            )}
            {isAuthenticated && !isLoading && (
                <Button asChild>
                    <Link href="/documents">
                    Enter NotionCN
                    <ArrowRight className="w-4 h-4"/>
                    </Link>
                </Button>
            )}
            {!isAuthenticated && !isLoading && (
                <SignInButton>
                    <Button>
                        Get started
                        <ArrowRight className="h-4 w-4 ml-2"/>
                    </Button>
                </SignInButton>
            )}

        </div>
    )
}