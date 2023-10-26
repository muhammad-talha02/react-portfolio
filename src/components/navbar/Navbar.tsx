import "./navbar.scss"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="logo">
                    M Talha
                </div>
                <div className="socialLinks">
                    <a href="#"><img src="/public/facebook.png" alt="" /></a>
                    <a href="#"><img src="/public/instagram.png" alt="" /></a>
                    <a href="#"><img src="/public/youtube.png" alt="" /></a>
                    <a href="#"><img src="/public/dribbble.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
