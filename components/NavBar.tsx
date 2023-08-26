import Link from "next/link";
import Image from "next/image";

const NavBar = () => {

    const links = [
        "Home", 
        "Schedule",
        "Members",
        "Contact",
        "Projects/SCAI", 
        "Join+",
    ]

    return(
<<<<<<< HEAD
        <div className="w-full bg-black rounded-md border p-3 flex flex-rows">
            <div>

            </div>
            <div className=" flex flex-col flex-grow justify-center text-center text-white my-auto">
                <h1 className="w-full tracking-wide text-4xl font-serif text-blue-500 font-semibold">UCSC <span className="tracking-widest text-amber-400 font-light opacity-100">[AI]</span></h1>
            </div>
            <div className="flex-none">
=======
        <div className="w-full bg-neutral-500 rounded-md border border-gray-500 border-opacity-25 flex flex-rows h-fit  p-2">
        
            <div className="h-full justify-center text-center text-white my-auto px-2">
                <h1 className="w-full opacity-80 tracking-wide text-4xl font-serif font-semibold">UCSC <Link href={"/"} className="tracking-widest text-amber-400 font-light opacity-80 hover:opacity-100">[AI]</Link></h1>
            </div>
            <div className="flex-grow flex flex-row gap-4 px-4">
            {
                links.map((value) => (
                    <Link href={"/"+value.toLocaleLowerCase()} className="text-center my-auto text-lg text-white font-serif hover:text-amber-400 hover:opacity-100 tracking-wider opacity-75">{value}</Link>
                ))
            }
            </div>
            <div className="flex-none px-2">
>>>>>>> origin/main
                <Image className="inset-y-0 right-0" width={150} height={100} src="/baskin.png" alt="baskin">    
                </Image>
            </div>
        </div>
    )
}

export default NavBar;