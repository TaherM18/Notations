"use client";

import { Button } from "@/components/ui/button";
import { Doc } from "@/convex/_generated/dataModel";

interface PublishProps {
    initialData: Doc<"documents">
}

const Publish = ({
    initialData
} : PublishProps) => {
    return (
        <div>
            <Button>
                Publish
            </Button>
        </div>
    );
}
 
export default Publish;