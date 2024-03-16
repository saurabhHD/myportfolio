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
        className={`${rounded && "rounded-full"} ${Type[type]} text-white px-10 py-4 text-md`}>
           {children}
        </button>
    )
}

export default MyBtn;