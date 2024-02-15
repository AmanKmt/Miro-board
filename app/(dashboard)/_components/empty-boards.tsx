'use client'

import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useOrganization } from "@clerk/nextjs";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";

export const EmptyBoards = () => {
    const router = useRouter();
    const { organization } = useOrganization();

    const { mutate, pending } = useApiMutation(api.board.create);

    const onClick = () => {
        if (!organization) return;

        mutate({
            orgId: organization.id,
            title: 'Untitled'
        }).then((id) => {
            toast.success('Board created');
            router.push(`/board/${id}`);
        }).catch(() => {
            toast.error('Failed to create board');
        });
    };

    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image src="/note.svg" alt="Empty Search" height={110} width={110} />
            <h2 className="text-2xl font-bold mt-6 tracking-tighter">
                Create your first board
            </h2>

            <p className="text-muted-foreground text-sm mt-1.5">
                Start by creating a board for your organization
            </p>

            <div className="mt-6">
                <Button size="lg" onClick={onClick} disabled={pending}>
                    Create board
                </Button>
            </div>
        </div>
    );
};