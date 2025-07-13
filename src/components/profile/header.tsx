import { Button } from "@/components/ui/button"
import { UserPlus2, Footprints, Share2Icon } from "lucide-react"
import DrawerMenu from "@/components/profile/drawer-menu"

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between h-14 px-4 bg-primary-foreground border-b sticky top-0 z-10">
      <Button size={'icon'} variant={'ghost'} className="rounded-full">
        <UserPlus2 className="size-5" />
      </Button>
      <div className="flex items-center gap-2">
        <Button size={'icon'} variant={'ghost'} className="rounded-full">
          <Footprints className="size-5" />
        </Button>
        <Button className="rounded-full " size={'icon'} variant={'ghost'}>
          <Share2Icon className="size-5" />
        </Button>
        <DrawerMenu />
      </div>
    </div>
  )
}
