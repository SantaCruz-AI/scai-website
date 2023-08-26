import Link from "next/link";
import Image from "next/image";

const NavBar = () => {

    return(
        <div className="w-full bg-black rounded-md border p-3 flex flex-rows">
            <div>

            </div>
            <div className=" flex flex-col flex-grow justify-center text-center text-white my-auto">
                <h1 className="w-full tracking-wide text-4xl font-serif text-blue-500 font-semibold">UCSC <span className="tracking-widest text-amber-400 font-light opacity-100">[AI]</span></h1>
            </div>
            <div className="flex-none">
                <Image className="inset-y-0 right-0" width={150} height={100} src="/baskin.png" alt="baskin">    
                </Image>
            </div>
        </div>
    )
}

export default NavBar;