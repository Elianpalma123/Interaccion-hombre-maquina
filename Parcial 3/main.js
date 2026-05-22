const app = Vue.createApp({

  data() {
    return {
      productos: [
        {
          id: 1,
          nombre: "Acetaminofén",
          categoria: "Medicamento",
          descripcion: "Producto básico para dolor o fiebre.",
          precio: 5000
        },
        {
          id: 2,
          nombre: "Alcohol antiséptico",
          categoria: "Cuidado",
          descripcion: "Producto para limpieza y desinfección.",
          precio: 4500
        },
        {
          id: 3,
          nombre: "Gel antibacterial",
          categoria: "Higiene",
          descripcion: "Producto para limpieza de manos.",
          precio: 7000
        }
      ],

      carrito: [],

      total: 0,

      nombre: "",
      correo: "",
      telefono: "",
      mensaje: "",

      mensajeEnviado: false
    };
  },

  methods: {

    agregarProducto(producto) {
      this.carrito.push(producto);

      this.total = this.total + producto.precio;
    },

    quitarProducto(posicion) {
      this.total = this.total - this.carrito[posicion].precio;

      this.carrito.splice(posicion, 1);
    },

    vaciarCarrito() {
      this.carrito = [];

      this.total = 0;
    },

    enviarFormulario() {
      this.mensajeEnviado = true;

      this.nombre = "";
      this.correo = "";
      this.telefono = "";
      this.mensaje = "";
    }

  }

});

app.mount("#app");