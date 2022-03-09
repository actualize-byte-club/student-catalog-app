<script>
// import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      student: {
        first_name: "Meghan",
        last_name: "Scherzer",
        email: "meghan@gmail.com",
        phone_number: "200-300-4000",
        short_bio: "A student learning to code.",
        linkedin_url: "https://www.linkedin.com/in/kevin-gerstein/",
        twitter_handle: "http://twitter.com/meghanscherzer",
        personal_blog: "http://github.com/meghanscherzer",
        online_resume: "http://github.com/meghanscherzer",
        github_url: "http://github.com/meghanscherzer",
        photo: "https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg",
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
    <!-- <h1>{{ student.first_name + " " + student.last_name }}</h1>
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
    </div> -->
    <router-link to="/students">Back</router-link>
  </div>
  <body id="page-top">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">{{ student.first_name }} {{ student.last_name }}</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" :src="student.photo" alt="..." />
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
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#capstone">Capstones</a></li>
        </ul>
      </div>
    </nav>
    <!-- Page Content-->
    <div class="container-fluid p-0">
      <!-- About-->
      <section class="resume-section" id="about">
        <div class="resume-section-content">
          <h1 class="mb-0">
            {{ student.first_name }}
            <span class="text-primary">{{ student.last_name }}</span>
          </h1>
          <div class="subheading mb-5">
            {{ student.phone_number }} ·
            <a href="mailto:name@email.com">{{ student.email }}</a>
          </div>
          <p class="lead mb-5">
            {{ student.short_bio }}
          </p>
          <div class="social-icons">
            <a class="social-icon" :href="student.linkedin_url"><i class="fab fa-linkedin-in"></i></a>
            <a class="social-icon" :href="student.github_url"><i class="fab fa-github"></i></a>
            <a class="social-icon" :href="student.twitter_handle"><i class="fab fa-twitter"></i></a>
            <a class="social-icon" :href="student.twitter_handle"><i class="fab fa-facebook-f"></i></a>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Experience-->
      <section class="resume-section" id="experience">
        <div class="resume-section-content">
          <h2 class="mb-5">Experience</h2>
          <div
            class="d-flex flex-column flex-md-row justify-content-between mb-5"
            v-for="exp in student.resume_data.experience"
            :key="exp.id"
          >
            <div class="flex-grow-1">
              <h3 class="mb-0">{{ exp.job_title }}</h3>
              <div class="subheading mb-3">{{ exp.company_name }}</div>
              <p>{{ exp.details }}</p>
              <div class="flex-shrink-0">
                <span class="text-primary">{{ exp.start_date }} - {{ exp.end_date }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Education-->
      <section class="resume-section" id="education">
        <div class="resume-section-content">
          <h2 class="mb-5">Education</h2>
          <div
            class="d-flex flex-column flex-md-row justify-content-between mb-5"
            v-for="edu in student.resume_data.education"
            :key="edu.id"
          >
            <div class="flex-grow-1">
              <h3 class="mb-0">{{ edu.university_name }}</h3>
              <div class="subheading mb-3">{{ edu.degree }}</div>
              <div>{{ edu.details }}</div>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">{{ edu.start_date }} - {{ edu.end_date }}</span>
            </div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Skills-->
      <section class="resume-section" id="skills">
        <div class="resume-section-content">
          <h2 class="mb-5">Skills</h2>
          <div class="subheading mb-3">Programming Languages & Tools</div>
          <ul class="fa-ul mb-0">
            <li v-for="skill in student.resume_data.skills" :key="skill.id">
              <span class="fa-li"><i class="fas fa-check"></i></span>
              {{ skill }}
            </li>
          </ul>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Capstones-->
      <section class="resume-section" id="capstone">
        <div class="resume-section-content">
          <h2 class="mb-5">Capstone</h2>
          <div
            class="d-flex flex-column flex-md-row justify-content-between mb-5"
            v-for="capstone in student.capstone"
            :key="capstone.id"
          >
            <div class="flex-grow-1">
              <div class="subheading mb-3">{{ capstone.name }}</div>
              <div>{{ capstone.description }}</div>
              <img :src="capstone.screenshot" alt="" class="img-thumbnail img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
    </div>
  </body>
</template>

<style></style>
