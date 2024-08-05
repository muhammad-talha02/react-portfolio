import { WrapperComponent } from "..";
import "./skills.scss";

const skillsData = [
  { label: "Html", icon:<i className="devicon-html5-plain colored"/>},
  { label: "CSS", icon:
    <i className="devicon-css3-plain colored"></i>
   },
   { label: "Javascript", icon:
    
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          
   },
  { label: "React", icon:
    <i className="devicon-react-original colored"></i>
   },
  { label: "Node", icon:
    <i className="devicon-nodejs-plain-wordmark colored"></i>
  },
  { label: "Bootstrap", icon:

    <i className="devicon-bootstrap-plain colored"></i>
  },
  { label: "Tailwind", icon:
    <i className="devicon-tailwindcss-original colored"></i>
  },
  { label: "MUI", icon:
    <i className="devicon-materialui-plain colored"></i>
  },
  { label: "SQL", icon:
    <i className="devicon-mysql-original colored"></i>
   },
  { label: "Mongodb", icon:
    <i className="devicon-mongodb-plain-wordmark colored"></i>
   },
  { label: "Redis", icon:
    <i className="devicon-redis-plain colored"></i>
   },
  { label: "Typescript", icon: 
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
   },
  { label: "Next", icon:
    <i className="devicon-nextjs-plain colored"></i>
   },
  { label: "JQuery",icon:
    <i className="devicon-jquery-plain-wordmark colored"></i>
   },
  { label: "Webpack", icon:
    <i className="devicon-webpack-plain colored"></i>
   },
  { label: "Azure", icon:
    <i className="devicon-azuredevops-plain colored"></i>
   },
  { label: "Git", icon:
    <i className="devicon-git-plain colored"></i>
   },
  { label: "VSCode", icon:
    <i className="devicon-vscode-plain colored"></i>
   },
  { label: "Github", icon:
    <i className="devicon-github-original colored"></i>
   },
  { label: "Framer",icon:
    <i className="devicon-framermotion-original-wordmark colored"></i>
   },
  { label: "Trello", icon:
    <i className="devicon-trello-plain-wordmark colored"></i>
   },
  { label: "Threejs", icon:
    <i className="devicon-threejs-original-wordmark colored"></i>
   },
  { label: "Slack", icon: 
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" />
  },
  { label: "Redux", icon: 
    <i className="devicon-redux-original colored"></i>
   },
  { label: "Postman", icon:
    <i className="devicon-postman-plain colored"></i>
  },
  { label: "Mongoose", icon:
    <i className="devicon-mongoose-original-wordmark colored"></i>
   },
  { label: "Jira", icon:

    <i className="devicon-jira-plain-wordmark colored"></i>
  },
  { label: "Handlebars", icon:
    <i className="devicon-handlebars-original-wordmark colored"></i>
   },
  { label: "Stackoverflow", icon:

    <i className="devicon-stackoverflow-plain-wordmark colored"></i>
  },
  { label: "Vercel",icon:
    <i className="devicon-vercel-original-wordmark colored"></i>
   },
  { label: "Cloudfare", icon:
    <i className="devicon-cloudflare-plain colored"></i>
   },
  { label: "Babel", icon:
    <i className="devicon-babel-plain colored"></i>
   },
  { label: "Socket", icon:
    <i className="devicon-socketio-original colored"></i>
   },
  { label: "Redux", img: "/skills/redux.png" },
  { label: "aws", icon:
    <i className="devicon-amazonwebservices-plain-wordmark colored"></i>
   },
  { label: "Npm", icon:
    <i className="devicon-npm-original-wordmark colored"></i>
   },
  { label: "Express", icon:
    <i className="devicon-express-original colored"></i>
   },
  { label: "Docker", icon:
   
    <i className="devicon-docker-plain colored"></i>
          
   },
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
                  {item.icon}         
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
