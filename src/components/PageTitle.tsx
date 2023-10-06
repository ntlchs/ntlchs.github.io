function PageTitle({ children }: { children: string | JSX.Element }) {
    return (
        <>
            <h1 className="text-black text-sm font-medium">
                {children}
            </h1>
            <span className="w-1/3 h-[0.7px] bg-black rounded-full mt-4 mb-6"></span>
        </>
    )
}

export default PageTitle;