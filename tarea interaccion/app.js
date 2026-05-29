const app = Vue.createApp({

    data() {

        return {

            nuevaTarea: "",

            tareas: []

        }

    },

    methods: {

        agregarTarea() {

            if (this.nuevaTarea.trim() !== "") {

                this.tareas.push({

                    texto: this.nuevaTarea,

                    completada: false

                })

                this.nuevaTarea = ""

            }

        },

        eliminarTarea(index) {

            this.tareas.splice(index, 1)

        },

        toggleTarea(index) {

            this.tareas[index].completada =
                !this.tareas[index].completada

        }

    }

})

app.mount("#app")