import Image from "next/image";

export const Heroes = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center max-w-5xl">
                <div className="flex items-center">
                    <div className="relative w-[300px] h-[300px] sm:w-[350px]
                    sm:h-[350px] md:h-[400px] md:w-[400px]">
                        <Image
                            src="/wave.png"
                            fill
                            className="object-contain dark:hidden"
                            alt="Wave"
                        />
                        <Image
                            src="/wave-dark.png"
                            fill
                            className="object-contain hidden dark:block"
                            alt="Wave"
                        />
                    </div>
                    <div className="relative w-[300px] h-[300px] hidden md:block">
                        <Image
                            src="/paper.png"
                            fill
                            className="object-contain dark:hidden"
                            alt="Paper"
                        />
                        <Image
                            src="/paper-dark.png"
                            fill
                            className="object-contain hidden dark:block"
                            alt="Paper"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}