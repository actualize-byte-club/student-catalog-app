<script>
import axios from "axios";
export default {
  data: function () {
    return {
      students: [
        {
          first_name: "Ben",
          last_name: "Astengo",
          capstone: [
            {
              title: "SprintRoute",
              image:
                "https://komonews.com/resources/media/dfb64beb-1311-490c-a8e1-0b7dda676807-medium16x9_everett_crash_komo_07.jpg?1460578767600",
            },
            { title: "Something", image: "Somethingelseeee" },
          ],
        },
        {
          first_name: "Camden",
          last_name: "Parker",
          capstone: [
            {
              title: "NeedABike",
              image: "https://i.pinimg.com/originals/c3/02/af/c302afefbc869048ce8cf9aeeac10338.jpg",
            },
          ],
        },
      ],
    };
  },
  created: function () {
    // this.indexStudents();
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
  <div class="container">
    <h1>Students Index</h1>
    <div v-for="student in students" v-bind:key="student.id">
      <h1>{{ student.first_name }} {{ student.last_name }}</h1>
      <h3>Capstone: {{ student.capstone[0].title }}</h3>
      <img v-bind:src="student.capstone[0].image" alt="" />
    </div>
  </div>
</template>
