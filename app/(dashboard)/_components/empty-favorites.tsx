import Image from "next/image";

export const EmptyFavorites = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image src="/empty-favorites.svg" alt="Empty Search" height={140} width={140} />
            <h2 className="text-2xl font-bold mt-6 tracking-tighter">
                No favorite boards!
            </h2>

            <p className="text-muted-foreground text-sm mt-1.5">
                Try favoriting a board
            </p>
        </div>
    );
};