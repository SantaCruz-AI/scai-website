// This core file is a container for the middle part of the website, which contains the timeline and some usefull information. 

const Info = () => {

    return (
        <div className="flex flex-cols ">
            <div className="">
                <h1>Current Members</h1>
                <p className="text-4xl">13</p>
            </div>
        </div>
    )
}

const Core = () => {


    return (
        <div className="w-full h-screen bg-slate-100 flex flex-cols gap-10 justify-center p-10">
            <div className="w-1/3 h-5/6 border pt-10 text-right pr-3">
                <h1 className="text-7xl font-bold">Stay up to <span className="text-blue-500">date</span> this <span className="text-yellow-300">Fall</span></h1>
            </div>
            <div className="w-1/3 h-5/6 border">
                <div className="container">
                    <div className="">

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Core;