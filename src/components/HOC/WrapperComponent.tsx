import { FC } from "react"
import "./hoc.scss"

const WrapperComponent = (Component: FC<any>, idName: string) => {
    console.log("dfsfdfdf")
    return function HOC() {
        return (
            <section id={idName}>
                <div className="container">
                    <Component />
                </div>
            </section>

        )
    }
}

export default WrapperComponent
