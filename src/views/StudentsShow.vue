<script>
// import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      student: {
        first_name: "Meghan",
        last_name: "Scherzer",
        resume_data: {
          experience: [
            {
              start_date: "3/4/20",
              end_date: "8/19/21",
              job_title: "teacher",
              company_name: "cusd 200",
              details: "I hated being a teacher",
            },
            {
              start_date: "10/10/10",
              end_date: "12/12/12",
              job_title: "Software Engineer",
              company_name: "Google",
              details: "hi I am a software dude at google",
            },
          ],
          education: [
            {
              start_date: "8/13/09",
              end_date: "8/1/13",
              degree: "human biology",
              university_name: "university of kansas",
              details: "I love college",
            },
            {
              start_date: "9/9/9",
              end_date: "11/11/11",
              degree: "Computer Science",
              university_name: "American University",
              details: "I have a degree, I am cool.",
            },
          ],
          skills: ["Ruby", "JavaScript", "HTML", "CSS"],
        },
        capstone: [
          {
            name: "Alternatively Green",
            description: "blah blah blah",
            screenshot:
              "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBjb2RlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
          },
        ],
      },
    };
  },
  created: function () {
    // axios.get("/students/" + this.$route.params.id).then((response) => {
    //   console.log("students show", response);
    //   this.student = response.data;
    // });
  },
  methods: {},
};
</script>

<template>
  <div class="student-show">
    <h1>{{ student.first_name + " " + student.last_name }}</h1>
    <h5>Experience:</h5>
    <div v-for="exp in student.resume_data.experience" :key="exp.id">
      <p>Start date: {{ exp.start_date }}</p>
      <p>End Date: {{ exp.end_date }}</p>
      <p>Job Title: {{ exp.job_title }}</p>
      <p>Company Name: {{ exp.company_name }}</p>
      <p>Details: {{ exp.details }}</p>
    </div>
    <h5>Education:</h5>
    <div v-for="edu in student.resume_data.education" :key="edu.id">
      <p>{{ edu.start_date }}</p>
      <p>{{ edu.end_date }}</p>
      <p>{{ edu.degree }}</p>
      <p>{{ edu.university_name }}</p>
      <p>{{ edu.details }}</p>
    </div>
    <h5>Skills:</h5>
    <div v-for="skill in student.resume_data.skills" :key="skill.id">
      <p>{{ skill }}</p>
    </div>
    <h5>Capstone:</h5>
    <div v-for="capstone in student.capstone" :key="capstone.id">
      <p>{{ capstone.name }}</p>
      <p>{{ capstone.description }}</p>
      <img :src="capstone.screenshot" alt="" />
    </div>
    <router-link to="/students">Back</router-link>
  </div>
  <body id="page-top">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Clarence Taylor</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt="..." />
        </span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
        </ul>
      </div>
    </nav>
    <!-- Page Content-->
    <div class="container-fluid p-0">
      <!-- About-->
      <section class="resume-section" id="about">
        <div class="resume-section-content">
          <h1 class="mb-0">
            Clarence
            <span class="text-primary">Taylor</span>
          </h1>
          <div class="subheading mb-5">
            3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
            <a href="mailto:name@email.com">name@email.com</a>
          </div>
          <p class="lead mb-5">
            I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews.
            Iterative approaches to corporate strategy foster collaborative thinking to further the overall value
            proposition.
          </p>
          <div class="social-icons">
            <a class="social-icon" href="#!"><i class="fab fa-linkedin-in"></i></a>
            <a class="social-icon" href="#!"><i class="fab fa-github"></i></a>
            <a class="social-icon" href="#!"><i class="fab fa-twitter"></i></a>
            <a class="social-icon" href="#!"><i class="fab fa-facebook-f"></i></a>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Experience-->
      <section class="resume-section" id="experience">
        <div class="resume-section-content">
          <h2 class="mb-5">Experience</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1" v-for="exp in student.resume_data.experience" :key="exp.id">
              <h3 class="mb-0">{{ exp.job_title }}</h3>
              <div class="subheading mb-3">{{ exp.company_name }}</div>
              <p>{{ exp.details }}</p>
              <div class="flex-shrink-0">
                <span class="text-primary">{{ exp.start_date }} - {{ exp.end_date }}</span>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">Web Developer</h3>
              <div class="subheading mb-3">Intelitec Solutions</div>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the
                digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information
                highway will close the loop on focusing solely on the bottom line.
              </p>
            </div>
            <div class="flex-shrink-0"><span class="text-primary">December 2011 - March 2013</span></div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">Junior Web Designer</h3>
              <div class="subheading mb-3">Shout! Media Productions</div>
              <p>
                Podcasting operational change management inside of workflows to establish a framework. Taking seamless
                key performance indicators offline to maximise the long tail. Keeping your eye on the ball while
                performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.
              </p>
            </div>
            <div class="flex-shrink-0"><span class="text-primary">July 2010 - December 2011</span></div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between">
            <div class="flex-grow-1">
              <h3 class="mb-0">Web Design Intern</h3>
              <div class="subheading mb-3">Shout! Media Productions</div>
              <p>
                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C
                users after installed base benefits. Dramatically visualize customer directed convergence without
                revolutionary ROI.
              </p>
            </div>
            <div class="flex-shrink-0"><span class="text-primary">September 2008 - June 2010</span></div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Education-->
      <section class="resume-section" id="education">
        <div class="resume-section-content">
          <h2 class="mb-5">Education</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">University of Colorado Boulder</h3>
              <div class="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science - Web Development Track</div>
              <p>GPA: 3.23</p>
            </div>
            <div class="flex-shrink-0"><span class="text-primary">August 2006 - May 2010</span></div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between">
            <div class="flex-grow-1">
              <h3 class="mb-0">James Buchanan High School</h3>
              <div class="subheading mb-3">Technology Magnet Program</div>
              <p>GPA: 3.56</p>
            </div>
            <div class="flex-shrink-0"><span class="text-primary">August 2002 - May 2006</span></div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Skills-->
      <section class="resume-section" id="skills">
        <div class="resume-section-content">
          <h2 class="mb-5">Skills</h2>
          <div class="subheading mb-3">Programming Languages & Tools</div>
          <ul class="list-inline dev-icons">
            <li class="list-inline-item"><i class="fab fa-html5"></i></li>
            <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
            <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
            <li class="list-inline-item"><i class="fab fa-angular"></i></li>
            <li class="list-inline-item"><i class="fab fa-react"></i></li>
            <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
            <li class="list-inline-item"><i class="fab fa-sass"></i></li>
            <li class="list-inline-item"><i class="fab fa-less"></i></li>
            <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
            <li class="list-inline-item"><i class="fab fa-gulp"></i></li>
            <li class="list-inline-item"><i class="fab fa-grunt"></i></li>
            <li class="list-inline-item"><i class="fab fa-npm"></i></li>
          </ul>
          <div class="subheading mb-3">Workflow</div>
          <ul class="fa-ul mb-0">
            <li>
              <span class="fa-li"><i class="fas fa-check"></i></span>
              Mobile-First, Responsive Design
            </li>
            <li>
              <span class="fa-li"><i class="fas fa-check"></i></span>
              Cross Browser Testing & Debugging
            </li>
            <li>
              <span class="fa-li"><i class="fas fa-check"></i></span>
              Cross Functional Teams
            </li>
            <li>
              <span class="fa-li"><i class="fas fa-check"></i></span>
              Agile Development & Scrum
            </li>
          </ul>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Interests-->
      <section class="resume-section" id="interests">
        <div class="resume-section-content">
          <h2 class="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier
            and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing,
            and kayaking.
          </p>
          <p class="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an
            aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in
            the front-end web development world.
          </p>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Awards-->
      <section class="resume-section" id="awards">
        <div class="resume-section-content">
          <h2 class="mb-5">Awards & Certifications</h2>
          <ul class="fa-ul mb-0">
            <li>
              <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
              Google Analytics Certified Developer
            </li>
            <li>
              <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
              Mobile Web Specialist - Google Certification
            </li>
            <li>
              <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
              1
              <sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition 2009
            </li>
            <li>
              <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
              1
              <sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)
            </li>
            <li>
              <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
              2
              <sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition 2008
            </li>
            <li>
              <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
              1
              <sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
              3
              <sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
            </li>
          </ul>
        </div>
      </section>
    </div>
  </body>
</template>

<style></style>
