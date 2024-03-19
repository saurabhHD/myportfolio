const Type = {
    primary : "bg-[#FF517E] hover:bg-[#FCC255]",
    secondary : "bg-[#FCC255] hover:bg-[#FF517E]"
}

const MyBtn = ({
    children = 'Button',
    link = "#",
    type = "primary",
    rounded = true
})=> {
    return (
        <button 
        className={`${rounded && "rounded-full"} ${Type[type]} text-white md:px-10 px-8 md:py-4 py-4 md:text-md text-sm`}>
           {children}
        </button>
    )
}

export default MyBtn;