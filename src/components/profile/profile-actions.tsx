import { UserCog2Icon, Wallet2Icon } from "lucide-react"

export default function ProfileActions() {
  return (
    <div className="flex gap-3">
      <button className="flex items-center rounded hover:bg-accent px-2 py-1">
        <UserCog2Icon className="size-4 text-pink-600 mr-1" />
        <span className="font-semibold text-sm text-primary">Tiktok studio</span>
      </button>
      <span className="text-muted-foreground font-extralight">|</span>
      <button className="flex items-center rounded hover:bg-accent px-2 py-1">
        <Wallet2Icon className="size-4 text-pink-600 mr-1" />
        <span className="font-semibold text-sm text-primary">Balance</span>
      </button>
    </div>
  )
}
