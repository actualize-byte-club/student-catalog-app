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
              details: "i hated being a teacher",
            },
            {
              start_date: "",
              end_date: "",
              job_title: "",
              company_name: "",
              details: "",
            },
          ],
          education: [
            {
              start_date: "8/13/09",
              end_date: "8/1/13",
              degree: "human biology",
              university_name: "university of kansas",
              details: "i love college",
            },
            {
              start_date: "",
              end_date: "",
              degree: "",
              university_name: "",
              details: "",
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
</template>

<style></style>
