import "./Card.scss"
const Card = () => {
    return (
        <div className="Card">

            <div className="imgContainer">
                <a href="https://muhammad-talha02.github.io/3d-portfolio/" target="_blank">
                    <img src="https://muhammad-talha02.github.io/3d-portfolio/assets/carrent-aba013d1.png" alt="" />
                </a>
                <a href={"https://www.google.com/"} target="_blank">
                    <img src="/github.png" className="githubBtn" alt="" />
                </a>
            </div>
            <div className="content">
                <h4>Youtube Netlify</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rerum distinctio quos at? Quam, nisi?</p>
                <p className="tags"> <span style={{ color: "skyblue" }}>#reactjs</span> <span style={{ color: "green" }}>#nodejs</span> <span style={{ color: "yellowgreen" }}>#mongodb</span>
                </p>
            </div>
        </div>
    )
}

export default Card
