<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      student: {},
    };
  },
  created: function () {
    axios.get(`/students/${this.student.id}`).then((response) => {
      this.student = response.data;
      console.log(this.student);
      console.log(this.student.experience);
    });
  },
  methods: {},
};
</script>

<template>
  <div class="student-show">
    <router-link to="/students">Back</router-link>
  </div>
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
  <div id="student-show-body" class="container-fluid p-0">
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
          v-for="exp in student.experiences"
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
          v-for="edu in student.educations"
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
          <li v-for="skill in student.skills" :key="skill.id">
            <span class="fa-li"><i class="fas fa-check"></i></span>
            {{ skill.name }}
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
          v-for="capstone in student.capstones"
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
</template>
