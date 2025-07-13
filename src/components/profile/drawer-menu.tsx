import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { MenuIcon, Music, QrCodeIcon, Settings, UserCog2, Wallet2 } from 'lucide-react';


export default function DrawerMenu() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button className="rounded-full " size={'icon'} variant={'ghost'}>
                    <MenuIcon className="size-5" />
                </Button>
            </DrawerTrigger>
            <DrawerContent className='sm:max-w-sm w-full mx-auto min-h-36'>
                <DrawerHeader className='hidden'>
                    <DrawerTitle></DrawerTitle>
                    <DrawerDescription></DrawerDescription>
                </DrawerHeader>
                <div className='py-2 flex flex-col'>
                    <button className='flex p-4 hover:bg-accent text-sm items-center justify-between'>
                        <div className='flex items-center gap-3'>

                            <UserCog2 className='size-5' />
                            <strong>Tiktok studio</strong>
                        </div>

                    </button>

                    <button className='flex p-4 hover:bg-accent text-sm items-center justify-between'>
                        <div className='flex items-center gap-3'>

                            <Wallet2 className='size-5' />
                            <strong>Balance</strong>
                        </div>

                        <span className='text-sm font-semibold text-muted-foreground'>244.87 $US</span>

                    </button>

                    <button className='flex p-4 hover:bg-accent text-sm items-center justify-between'>
                        <div className='flex items-center gap-3'>

                            <Music className='size-5' />
                            <strong>My Music</strong>
                        </div>

                    </button>

                    <button className='flex p-4 hover:bg-accent text-sm items-center justify-between'>
                        <div className='flex items-center gap-3'>

                            <QrCodeIcon className='size-5' />
                            <strong>My QR code</strong>
                        </div>

                    </button>

                    <button className='flex p-4 hover:bg-accent text-sm items-center justify-between'>
                        <div className='flex items-center gap-3'>

                            <Settings className='size-5' />
                            <strong>Settings and privacy</strong>
                        </div>
                    </button>
                </div>
            </DrawerContent>
        </Drawer>
    )
}