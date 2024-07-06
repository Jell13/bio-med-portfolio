"use client"

import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger} from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'
import Link from "next/link"
import { AlignRight } from "lucide-react"

const navigation = [
    {
        id: 1,
        path: "/",
        name: "Home"
    },
    {
        id: 2,
        path: "/about",
        name: "About"
    },
    {
        id: 3,
        path: "/experiences",
        name: "Experiences"
    },
    {
        id: 4,
        path: "/projects",
        name: "Projects"
    }
]

const MobileNav = () => {

    const pathname = usePathname()
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <AlignRight width={30} height={30}/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <nav className="flex flex-col justify-center items-center gap-8 mt-32">
                {navigation.map(nav => (
                    <SheetClose key={nav.id} asChild>
                            <Link className="relative group text-xl" key={nav.id} href={nav.path}>
                                {nav.name}
                                <span className={`absolute border-b-2 left-0 bottom-[1px] border-black group-hover:w-full duration-300 ${pathname === nav.path ? "w-full" : "w-0"}`}>&nbsp;</span>
                            </Link>
                    </SheetClose>
                ))}
            </nav>          
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
