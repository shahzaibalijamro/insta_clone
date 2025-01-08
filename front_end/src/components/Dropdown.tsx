// import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DropdownMenuDemoProps {
    selectedIcon: boolean;
    hoverColor: string;
    handleSelected: (event: React.MouseEvent<HTMLHeadingElement>) => void;
    showRelativeIcon: string | undefined;
    showRelativeSettingIcon: string | undefined;
}

export function DropdownMenuDemo({ selectedIcon, hoverColor, handleSelected, showRelativeIcon,showRelativeSettingIcon }: DropdownMenuDemoProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div style={selectedIcon ? {
                    backgroundColor: hoverColor,
                    borderRadius: 8,
                    fontWeight: "bold"
                } : {}} onClick={handleSelected} className="left-icon-wrapper opacity-100 active:opacity-70 cursor-pointer flex justify-start items-center">
                    <div className="">
                        <img className="flex" width={22} src={showRelativeIcon} alt="" />
                    </div>
                    <div className="ps-4">
                        <h1 style={{ fontWeight: "inherit" }} className="">More</h1>
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent style={{
                backgroundColor: 'var(--dropdown-bg-color)',
                color: 'var(--text-color)',
                border: '0px'
            }} className={`w-56 text-white`}>
                <DropdownMenuGroup>
                    <DropdownMenuItem style={{
                        color: 'var(--text-color)'
                    }} className="left-icon-wrapper cursor-pointer active:opacity-70 opacity-100">
                        <div style={selectedIcon ? {
                            backgroundColor: hoverColor,
                            borderRadius: 8,
                            fontWeight: "bold"
                        } : {}} onClick={handleSelected} className="flex justify-start items-center">
                            <div className="">
                                <img className="flex" width={22} src={showRelativeSettingIcon} alt="" />
                            </div>
                            <div className="ps-4">
                                <h1 style={{ fontWeight: "inherit" }} className="">Settings</h1>
                            </div>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Keyboard shortcuts
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>Email</DropdownMenuItem>
                                <DropdownMenuItem>Message</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>More...</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                        New Team
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem disabled>API</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
