import { WrapperComponent } from "..";
import "./skills.scss";

const skillsData = [
  { label: "Html", img: "/skills/html.png" },
  { label: "CSS", img: "/skills/css.png" },
  { label: "React", img: "/skills/reactjs.png" },
  { label: "Node", img: "/skills/nodejs.png" },
  { label: "Tailwind", img: "/skills/tailwind.png" },
  { label: "Typescript", img: "/skills/ts.png" },
  { label: "Javascript", img: "/skills/js.png" },
  { label: "Next", img: "/skills/next.png" },
  { label: "MaterialUI", img: "/skills/mi.png" },
  { label: "Bootstrap", img: "/skills/bootstrap.png" },
  { label: "Redux", img: "/skills/redux.png" },
];

const Skills = () => {
  return (
    <div className="skills">
      {/* <p>Technology</p> */}
      <h2>My Skills</h2>
      <div className="skillsBoxes">
        <div className="skillsBox">
          <h3 className="skillHeading">Front End</h3>
          <div className="skillItems">
            {skillsData?.map((item) => (
              <div className="skillItem" key={item.label}>
                <div className="skillImgBox">
                <img src={item?.img} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="skillsBox">
          <h3 className="skillHeading">Backend End</h3>
          <div className="skillItems">
            <div className="skillItem">
              <img src="/skills/reactjs.png" alt="" />
            </div>
            <div className="skillItem">
              <img src="/skills/nodejs.png" alt="" />
            </div>
            <div className="skillItem">
              <img src="/skills/tailwind.png" alt="" />
            </div>
            <div className="skillItem">
              <img src="/skills/mongodb.png" alt="" />
            </div>
            <div className="skillItem">
              <img src="/skills/nodejs.png" alt="" />
            </div>
            <div className="skillItem">
              <img src="/skills/tailwind.png" alt="" />
            </div>
            <div className="skillItem">
              <img src="/skills/mongodb.png" alt="" />
            </div>
            <div className="skillItem">
              <img src="/skills/reactjs.png" alt="" />
            </div>
          </div>
        </div>
        <div className="skillsBox">
          <h3 className="skillHeading">Databases</h3>
          <div className="skillItems">
            <div className="skillItem">
              <img src="/skills/reactjs.png" alt="" />
            </div>
            <div className="skillItem">
              <img src="/skills/nodejs.png" alt="" />
            </div>
            <div className="skillItem">
              <img src="/skills/tailwind.png" alt="" />
            </div>
            <div className="skillItem">
              <img src="/skills/mongodb.png" alt="" />
            </div>
            <div className="skillItem">
              <img src="/skills/reactjs.png" alt="" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default WrapperComponent(Skills, "experience");
