'use client'
import Link from "next/link";

import { LogOut } from 'lucide-react'
import { useState } from "react";


export function Header() {

    return (
        <div className="flex items-center justify-between p-2 bg-red-900/60  mt-5  ">
            <div className="flex items-center">
                <Link href='/' className="text-1xl font-extrabold text-white">
                    D&D tools
                </Link>
            </div>

            <HeaderUserMenu />
        </div>
    )
}

function HeaderUserMenu() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>

            <div className="relative">
                <div onClick={() => setIsOpen(!isOpen)} className="flex gap-3 items-center font-bold cursor-pointer ">
                    <button className=" text-xs outline-none border rounded-full pt-1 pl-3 pr-3 pb-1 "> Login </button>
                </div>
                {isOpen && (
                    <div className="absolute flex flex-col gap-2 bg-white x-50 w-full p-2" >
                        <Link href='#' className="flex text-slate-800 font-bold hover:bg-slate-100 rounded-sm gap-2">
                            <LogOut className="text-slate-400" /> Logout
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}

