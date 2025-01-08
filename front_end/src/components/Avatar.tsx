import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export function AvatarDemo(props:{clicked:boolean}) {
    return (
        <Avatar style={props.clicked ? {
            border: "2px solid white"
        }: {}} className="w-[25px] box-border rounded-full h-[25px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}