const SidebarMenu = () => {

  const navLinks =[
    "Home" , "Services" , "Portfolio" , "Contact"
  ]
  return (
    <div className="sidebarMenu">
      {navLinks?.map((item)=>(
        <a href={`#${item}`} key={item}>{item}</a>
      ))}
    </div>
  )
}

export default SidebarMenu