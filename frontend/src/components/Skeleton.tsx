

export const Skeleton = () => {
    return (
        <div role="status" className="animate-pulse">
            <div className="p-4  border-slate-300 pb-6 w-screen max-w-screen-md cursor-pointer">
                <div className="flex">

                    <div className="h-4 w-4 bg-gray-200 rounded-full"></div>

                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

                </div>
                <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="w-full text-slate-500 text-sm font-thin pt-4">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>

            </div>



            <div className="h-2.5 bg-gray-200 rounded-full"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
            <span className="sr-only">Loading...</span>
        </div>
    )


}