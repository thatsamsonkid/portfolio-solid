import { For } from "solid-js";
import Circle from "~/components/Circle";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import TextImage from "~/components/TextImage";
import ContactForm from "~/features/ContactForm";
import Navigation from "~/shared/Navigation";

export default function Home() {
  const skills = [
    { title: "Angular", text: "What I work with everyday" },
    { title: "React", text: "What I use on my down time" },
    { title: "SolidJS", text: "The Future of what I use. (This Site)" },
    { title: "Rxjs", text: "Observing and Reactivity" },
    { title: "Redux", text: "store(y) of my life" },
    { title: "NgRx", text: "Love State Management" },
    { title: "AEM", text: "Manage content the hard way :)" },
    { title: ".CSS{}", text: "Giving the Web style" },
    { title: "HTML", text: "Giving the Web structure" },
    { title: "JS", text: "Giving the web interaction" },
    { title: "Less", text: "Making CSS...well...less" },
    { title: "Sass", text: "CSS with superpowers" },
    {
      title: "Typescript",
      text: "Less debugging on typos :)",
    },
  ];

  return (
    <>
      <Header />
      <main class="text-center mx-auto p-4 min-h-screen">
        <section
          class="flex flex-col content-center items-center min-h-screen"
          id="home"
        >
          <div class="pb-40">
            <h1 class="mt-0 text-3xl leading-7 tracking-wide text-center text-white md:text-6xl md:tracking-widest">
              Sammy Mohamed
            </h1>
            <p class="mt-0 text-3xl italic tracking-wide text-center text-ocean-blue">
              Just a Dev
            </p>
          </div>
          <Navigation></Navigation>
        </section>

        <section id="projects" class="min-h-screen">
          <div class="max-w-[900px] mx-auto">
            <h1 class="text-5xl font-bold text-left mb-6 text-ocean-blue">
              About Me
            </h1>
            <TextImage
              img="/images/new-sammy.png"
              imgAlt="Sammy Mohamed Portrait"
              textColClass="flex-1"
              imgColClass="text-center flex-1"
            >
              <p class="text-left">Hi there,</p>
              <p class="text-left">
                A little bit about me, I'm currently a Web Developer at Amtrak
                since 2016. My experience has largely consisted of developing
                web-applications within AEM (Versions 6.2 - 6.4) working both in
                the front-end and back-end of these applications. n AEM I have
                built new applications and migrated existing web-apps from their
                previous platform.
              </p>
              <p class="text-left">
                Lately, I have been working more within the Angular Framework. I
                am building Angular applications and web-components for
                micro-frontends both in my professional work and personal
                projects (such as this very site.) I've also worked in Vue and
                enjoyed working in this framework. Though my education largely
                focused on networking and telecommunications, I have started to
                enjoy working in web development with a passion for the
                front-end aspect of applications rather than the back-end.
              </p>
              <p class="text-left">
                I definitely want to continue working within Angular and AEM, so
                that I can further hone my knowledge and skills within these
                technologies. I also have an interest in mobile app development,
                specifically utilizing the Flutter framework.
              </p>
            </TextImage>
          </div>
        </section>

        <section id="projects" class="min-h-screen">
          <div class="max-w-[900px] mx-auto">
            <h1 class="text-5xl font-bold text-left mb-6">Projects</h1>
            <ul class="list-none flex p-0 justify-evenly flex-wrap mb-7">
              <For each={skills}>
                {(skill, i) => (
                  <li class="mx-4 my-5">
                    <Circle
                      class={
                        i() % 2 === 0 ? "circle--primary" : "circle--secondary"
                      }
                      title={skill.title}
                    >
                      {skill.text}
                    </Circle>
                  </li>
                )}
              </For>
            </ul>
          </div>
        </section>

        <section id="skills" class="min-h-screen">
          <div class="max-w-[900px] mx-auto">
            <h1 class="text-5xl font-bold text-left mb-6">Skills</h1>
            <ul class="list-none flex p-0 justify-evenly flex-wrap mb-7">
              <For each={skills}>
                {(skill, i) => (
                  <li class="mx-4 my-5">
                    <Circle
                      class={
                        i() % 2 === 0 ? "circle--primary" : "circle--secondary"
                      }
                      title={skill.title}
                    >
                      {skill.text}
                    </Circle>
                  </li>
                )}
              </For>
            </ul>
          </div>
        </section>

        <section class="flex flex-col content-center items-center" id="contact">
          <div class="max-w-[900px] mx-auto">
            <h1 class="text-5xl font-bold text-left mb-6">Get In Touch!</h1>
            <div class="flex">
              <ContactForm></ContactForm>
              <img
                class="img-fluid ml-20 max-w-[480px]"
                src="/images/SAM_1.svg"
                alt="Quetzal Flying over Pyramids"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
