"use client"

import { Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
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
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <AlignRight width={30} height={30}/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div>
               Testing 
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
