import Image from "next/image";
import Me from "@/assets/me.png"
import * as motion from "framer-motion/client"
import App from "./components/card";

//Storing All skills here
var skills = [
  {
    input: "ROBOTICS",
    link: "https://iottechnews.com/wp-content/uploads/2024/04/boston-dynamics-atlas-robot-retires-robotics-2048x1367.jpg",
    href: "https://spectrum.ieee.org/topic/robotics/"
  },
  {
    input: "WEB DEVELOPMENT",
    link: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "https://en.wikipedia.org/wiki/Web_development"
  },
  {
    input:"LINUX SYSTEM MANAGEMENT",
    link:"https://images.unsplash.com/photo-1629654291663-b91ad427698f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href:"https://www.britannica.com/technology/Linux"
  },
  {
    input:"PROGRAMMING",
    link:"https://images.unsplash.com/photo-1483817101829-339b08e8d83f?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href:"https://www.britannica.com/technology/computer-program"
  },
  {
    input:"AI & ML", 
    link:"https://images.unsplash.com/photo-1717501218636-a390f9ac5957?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href:"https://www.britannica.com/technology/artificial-intelligence/Methods-and-goals-in-AI"
  },
  {
    input:"3D MODELLING",
    link:"https://content.instructables.com/FK8/2M5E/IB0MJS9Q/FK82M5EIB0MJS9Q.png?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=MjAxNS0wNi0xNyAxMzo0MTo1NS4w",
    href:"https://www.adobe.com/in/products/substance3d/discover/what-is-3d-modeling.html"
  },
  {
    input:"LEADERSHIP",
    link:"https://images.unsplash.com/photo-1513759565286-20e9c5fad06b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href:"https://en.wikipedia.org/wiki/Leadership"
  },
  {
    input:"DESIGNING",
    link:"https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href:"https://www.figma.com/resource-library/what-is-ui-design/"
  },
  {
    input:"PUBLIC SPEAKING",
    link:"https://images.unsplash.com/photo-1710360683896-e0506fb3579a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href:"https://en.wikipedia.org/wiki/Public_speaking"
  },
]

var progs = [
  {
    input:"PYTHON",
    link:"https://wallpapercave.com/wp/wp4850110.png",
    href:"https://python.org",
  },
  {
    input: "C++",
    link:"https://wallpapercave.com/wp/wp4009915.jpg",
    href:"https://en.wikipedia.org/wiki/C%2B%2B",
  },
  {
    input:"C",
    link:"https://e1.pxfuel.com/desktop-wallpaper/62/435/desktop-wallpaper-c-in-embedded-systems-programming-c-programming-language.jpg",
    href:"https://www.britannica.com/technology/C-computer-programming-language",
  },
  {
    input:"JAVA",
    link:"https://wallpapercave.com/wp/wp11880809.jpg",
    href:"https://www.britannica.com/technology/Java-computer-programming-language",
  },
  {
    input:"JAVASCRIPT",
    link:"https://wallpapercave.com/wp/wp12454874.jpg",
    href:"https://www.britannica.com/technology/JavaScript",
  },
  {
    input: "DART",
    link:"https://media.licdn.com/dms/image/D5612AQETIeFxyUec0w/article-cover_image-shrink_720_1280/0/1688741396037?e=2147483647&v=beta&t=xJWbHee--sD_HF5mdaioiDhzRGPO_KWdd2SbCXvDxb0",
    href:"https://dart.dev/",
  },
  {
    input:"HTML",
    link:"https://e0.pxfuel.com/wallpapers/973/666/desktop-wallpaper-html-5.jpg",
    href:"https://www.britannica.com/technology/HTML",
  },
  {
    input:"CSS",
    link:"https://e0.pxfuel.com/wallpapers/86/212/desktop-wallpaper-css-html-css.jpg",
    href:"https://www.britannica.com/technology/CSS-programming-language",
  },
  {
    input:"SQL",
    link:"https://e0.pxfuel.com/wallpapers/826/742/desktop-wallpaper-your-trusted-guide-to-microsoft-sql-server.jpg",
    href:"https://www.britannica.com/technology/SQL",
  }
]

var lang = [
  {
    input:"ENGLISH",
    link:"https://r1.ilikewallpaper.net/iphone-wallpapers/download/11023/Letters-English-iphone-wallpaper-ilikewallpaper_com.jpg",
    href:"https://www.britannica.com/topic/English-language",
  },
  {
    input:"HINDI",
    link:"https://i.pinimg.com/736x/b8/4f/6e/b84f6eb2bda7195b0401f7cf828a00fa.jpg",
    href:"https://www.britannica.com/topic/Hindi-language",
  },
  {
    input:"SANSKRIT",
    link:"https://i.pinimg.com/originals/1c/c0/30/1cc0300614e936e69a7b401ccb36de9c.png",
    href:"https://www.britannica.com/topic/Sanskrit-language",
  }
]

export default function Home() {
  return (
    <main className=" snap-y snap-mandatory overflow-y-scroll h-screen">
      <motion.section className="flex snap-always snap-center h-svh w-svw p-6" id="main" >
        <motion.div className="flex flex-col justify-end">
          <motion.div className="font-normal text-5xl leading-none" initial={{ x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{ ease:"easeIn", duration:4}}>KUSH KUMAR KUSHWAHA&apos;s</motion.div>
          <motion.div className=" font-black text-[200px] leading-none" initial={{x:-100, opacity:0}} animate={{x:0,opacity:1}} transition={{ease:"easeIn",duration:4}}>PORTFOLIO <br/>WEBSITE</motion.div>
        </motion.div>
      </motion.section>
      <section className="flex snap-always snap-center h-svh w-svw p-6 justify-between" id="about">
        <div className="flex flex-col flex-grow">
          <Image src={Me} alt="Me"></Image>
          <div className="h-10"></div>
          <div className="text-4xl font-semibold text-left p-2 w-7/12">
            ASPIRING ROBOTICS ENGINEER WITH A PASSION FOR HUMANOID DESIGN. 
            FASCINATED BY THE INTRICATE CHALLENGES OF REPLICATING HUMAN MOVEMENT AND INTERACTION IN MACHINES. 
            DRIVEN TO REVOLUTIONIZE HUMAN-ROBOT INTERACTION AND CREATE LIFELIKE HUMANOIDS THAT CAN ASSIST IN HEALTHCARE, EDUCATION, AND BEYOND. 
            OUTSIDE THE CLASSROOM, I&apos;M OFTEN FOUND DIVING INTO SCI-FI LITERATURE, SEEKING INSPIRATION FOR THE NEXT BREAKTHROUGH IN HUMANOID ROBOTICS.
          </div>
        </div>
        <div className="w-1/12 pl-12">
          <div className=" -translate-y-24 origin-bottom-left rotate-90 font-black text-8xl right-0 leading-none text-nowrap">
            ABOUT ME
          </div>
        </div>
      </section>
      <section id="skills" className="flex snap-always snap-center h-svh w-svw p-6 justify-between">
        <div className="w-1/12 place-content-end pr-12 ">
          <div className="-translate-y-28 origin-bottom-right -rotate-90 font-black text-8xl right-0 leading-none text-nowrap p-0">
            CURRENT SKILLS
          </div>
        </div>
        <div className="flex flex-grow p-4">
          <div className=" grid grid-cols-3 grid-rows-3 gap-4">
            {
              skills.map((skill, index) => {
                return (
                  <App key={index} input={skill.input} link={skill.link} href={skill.href} />
                )
              })
            }
          </div>
        </div>
      </section>
      <section id="programs" className="flex snap-always snap-center h-svh w-svw p-6 justify-between">
        <div className="flex flex-grow p-4">
          <div className=" grid grid-cols-3 grid-rows-3 gap-4">
            {
              progs.map((skill, index) => {
                return (
                  <App key={index} input={skill.input} link={skill.link} href={skill.href} />
                )
              })
            }
          </div>
        </div>
        <div className="w-1/12 place-content-start pr-12">
          <div className="-translate-y-14  translate-x-10 origin-bottom-left rotate-90 font-black  text-7xl right-0 leading-none text-nowrap p-0 ">
            TECHNICAL LANGUAGES
          </div>
        </div>
      </section>
      <section id="languages" className="flex snap-always snap-center h-svh w-svw p-6 justify-between">
        <div className="w-1/12 place-content-end pr-12 ">
          <div className="-translate-y-28 origin-bottom-right -rotate-90 font-black text-8xl right-0 leading-none text-nowrap p-0">
            LANGUAGES
          </div>
        </div>
        <div className="flex flex-grow px-4 py-28">
          <div className=" grid grid-cols-3 grid-rows-1 gap-4">
            {
              lang.map((skill, index) => {
                return (
                  <App key={index} input={skill.input} link={skill.link} href={skill.href}/>
                )
              })
            }
          </div>
        </div>
      </section>
    </main>
  );
}
