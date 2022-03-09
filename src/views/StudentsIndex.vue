<script>
import axios from "axios";
export default {
  data: function () {
    return {
      students: [
        {
          id: 1,
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
          id: 2,
          first_name: "Camden",
          last_name: "Parker",
          capstone: [
            {
              title: "NeedABike",
              image: "https://i.pinimg.com/originals/c3/02/af/c302afefbc869048ce8cf9aeeac10338.jpg",
            },
          ],
        },
        {
          id: 2,
          first_name: "Camden",
          last_name: "Parker",
          capstone: [
            {
              title: "NeedABike",
              image: "https://i.pinimg.com/originals/c3/02/af/c302afefbc869048ce8cf9aeeac10338.jpg",
            },
          ],
        },
        {
          id: 2,
          first_name: "Camden",
          last_name: "Parker",
          capstone: [
            {
              title: "NeedABike",
              image: "https://i.pinimg.com/originals/c3/02/af/c302afefbc869048ce8cf9aeeac10338.jpg",
            },
          ],
        },
        {
          id: 2,
          first_name: "Camden",
          last_name: "Parker",
          capstone: [
            {
              title: "NeedABike",
              image: "https://i.pinimg.com/originals/c3/02/af/c302afefbc869048ce8cf9aeeac10338.jpg",
            },
          ],
        },
        {
          id: 2,
          first_name: "Camden",
          last_name: "Parker",
          capstone: [
            {
              title: "NeedABike",
              image: "https://i.pinimg.com/originals/c3/02/af/c302afefbc869048ce8cf9aeeac10338.jpg",
            },
          ],
        },
        {
          id: 2,
          first_name: "Camden",
          last_name: "Parker",
          capstone: [
            {
              title: "NeedABike",
              image: "https://i.pinimg.com/originals/c3/02/af/c302afefbc869048ce8cf9aeeac10338.jpg",
            },
          ],
        },
        {
          id: 2,
          first_name: "Camden",
          last_name: "Parker",
          capstone: [
            {
              title: "NeedABike",
              image: "https://i.pinimg.com/originals/c3/02/af/c302afefbc869048ce8cf9aeeac10338.jpg",
            },
          ],
        },
        {
          id: 2,
          first_name: "Camden",
          last_name: "Parker",
          capstone: [
            {
              title: "NeedABike",
              image: "https://i.pinimg.com/originals/c3/02/af/c302afefbc869048ce8cf9aeeac10338.jpg",
            },
          ],
        },
        {
          id: 2,
          first_name: "Camden",
          last_name: "Parker",
          capstone: [
            {
              title: "NeedABike",
              image: "https://i.pinimg.com/originals/c3/02/af/c302afefbc869048ce8cf9aeeac10338.jpg",
            },
          ],
        },
        {
          id: 2,
          first_name: "Camden",
          last_name: "Parker",
          capstone: [
            {
              title: "NeedABike",
              image: "https://i.pinimg.com/originals/c3/02/af/c302afefbc869048ce8cf9aeeac10338.jpg",
            },
          ],
        },
        {
          id: 2,
          first_name: "Camden",
          last_name: "Parker",
          capstone: [
            {
              title: "NeedABike",
              image: "https://i.pinimg.com/originals/c3/02/af/c302afefbc869048ce8cf9aeeac10338.jpg",
            },
          ],
        },
        {
          id: 2,
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
  <div class="container-md-2">
    <h1>Students</h1>
    <div class="row ml-5">
      <div class="col" v-for="student in students" v-bind:key="student.id">
        <div class="">
          <h2>{{ student.first_name }} {{ student.last_name }}</h2>
          <h3>Capstone: {{ student.capstone[0].title }}</h3>
          <router-link to="/students/"><img v-bind:src="student.capstone[0].image" /></router-link>
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
