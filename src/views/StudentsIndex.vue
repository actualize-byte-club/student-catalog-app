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
      axios.get("/students").then((response) => {
        console.log("students index", response);
        this.students = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="container-md-2">
    <h1>Students</h1>
    <div class="row ml-5">
      <div class="col" v-for="student in students" v-bind:key="student.id">
        <div class="">
          <h2>{{ student.first_name }} {{ student.last_name }}</h2>
          <h3>
            Capstone:
            <div v-for="capstone in student.capstones" :key="capstone.id">
              {{ capstone.name }}
            </div>
            <router-link :to="`/students/${student.id}`">
              <img v-bind:src="student.photo" />
            </router-link>
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
</style>
