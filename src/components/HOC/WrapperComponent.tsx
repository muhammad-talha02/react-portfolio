import { FC } from "react"
import "./hoc.scss"

const WrapperComponent = (Component: FC<any>, idName?: string) => {
    console.log("dfsfdfdf")
    return function HOC() {
        return (
            <section id={idName} style={{
                // background: "linear-gradient(360deg, #0e0e27, #111132)"
            }}>
                <div className="container">
                    <Component />
                </div>
            </section>

        )
    }
}

export default WrapperComponent
