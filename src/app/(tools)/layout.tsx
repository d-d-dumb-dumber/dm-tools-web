import { ReactNode } from "react";
import { Header } from "../components/header";
import BottomMenu from "../components/bottomMenu";


export default function AuthenticatedLayout({ children }: { children: ReactNode }) {
    return (
        <div className="mx-auto grid min-h-screen w-full  grid-rows-[min-content_max-content_min-content]" >
            <Header />
            <main className="text-gray-300">
                {children}
            </main>
            <BottomMenu />
        </div>
    )
}