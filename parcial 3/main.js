const app = Vue.createApp({

    data() {

        return {

            nuevaTarea: "",

            tareas: []

        }

    },

    methods: {

        agregarTarea() {

            if (this.nuevaTarea !== "") {

                this.tareas.push(this.nuevaTarea)

                this.nuevaTarea = ""

            }

        },

        eliminarTarea(index) {

            this.tareas.splice(index, 1)

        }

    }

})

app.mount("#app")