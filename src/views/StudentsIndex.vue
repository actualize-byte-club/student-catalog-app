<script>
import axios from "axios";
export default {
  data: function () {
    return {
      students: {},
    };
  },
  created: function () {
    this.indexStudents();
  },
  methods: {
    indexStudents: function () {
      axios.get("https://byte-club-resume-data-api.herokuapp.com/students").then((response) => {
        console.log("students index", response);
        this.students = response.data;
      });
    },
  },
};
</script>

<template>
  <div id="student-index-page" class="container-md-2">
    <h1>Students</h1>
    <div class="row ml-5">
      <div class="col" v-for="student in students" v-bind:key="student.id">
        <div class="">
          <h2>{{ student.first_name }} {{ student.last_name }}</h2>
          <h3>
            Capstone:
            <div v-for="capstone in student.capstones" :key="capstone.id">
              {{ capstone.name }}
              <br />
              <router-link :to="`/students/${student.id}`">
                <img v-bind:src="capstone.screenshot" />
              </router-link>
            </div>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
img {
  width: 500px;
  height: 300px;
}
#student-index-page {
  padding-right: 17em;
}
@media (max-width: 992px) {
  body #student-index-page {
    padding-top: 0;
    padding-right: 0;
    padding-left: 0;
  }
}
</style>
