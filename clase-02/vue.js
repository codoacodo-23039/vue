const { createApp } = Vue


//Crear la instancia de Vue
const ejemplo1 = Vue.createApp({

    data() { //definir los datos
        return {
            valorBind: 'valor de mi bind', //valor de mi bind
            valorModel: 'valor para mi model', //valor para mi model
        }
    },
 

}).mount('#ejemplo1')


 
//Crear la instancia de Vue
const ejemplo2 = Vue.createApp({

    data() { //definir los datos
        return {
            nombre: 'Lionel', //valor de mi bind
            apellido: 'Messi', //valor para mi model
            edad: 35,
        }
    },

    methods: { //definir los metodos
        detalles(){ //metodo para mostrar los detalles
            return `${this.nombre} ${this.apellido} tiene la edad de: ${this.edad}`
        }
    }
 
}).mount('#ejemplo2')


const ejemplo3 = Vue.createApp({
    data() { //definir los datos
        return {
            nombre: 'Lionel', //valor de mi bind
            apellido: 'Messi', //valor para mi model
            contenidoHtml: '<h1>Contenido HTML</h1>',
            imagenSrc: 'https://static.dw.com/image/64142948_303.jpg',
            imagenAlt: 'Messi',
            imagenTitulo: 'Messi',
        }
    }

}).mount('#ejemplo3')


//ESTO ES NUESTRO COMPONENTE PERSONALIZADO
const CustomComponentNuestraEtiqueta = { //definir el componente

    template: `<h1 class="titulo">Componente personalizado {{data}}</h1>`, //definir el template

    data() { //definir los datos    
        return {
            data: 'data del componente',

        }
    }
}


const ejemplo4 = Vue.createApp({
    components: { //definir los componentes
        'custom-component-nuestra-etiqueta': CustomComponentNuestraEtiqueta
    }
}).mount('#ejemplo4')


const CustomComponentTwo = { 
    template:`<div class="cajita" v-on:mouseover="cambiarNombre();" v-on:mouseout="restablecerNombre();"><h1>Componente Personalizado <span id="nombre">{{nombre}}</span></h1></div>`, //definir el template

    data() { //definir los datos
        return {
            nombre: 'Lionel Scaloni', //valor de mi bind
        }
    },

    methods: { //definir los metodos
        cambiarNombre(){ //metodo para mostrar los detalles
            this.nombre = 'Lionel Messi'
            document.getElementById('nombre').style.color = 'red'
        },
        restablecerNombre(){ //metodo para mostrar los detalles
            this.nombre = 'Scaloni'
            document.getElementById('nombre').style.color = 'black'
        }

    },
}


const ejemplo5 = Vue.createApp({
    components: { //definir los componentes
        'custom-component-two': CustomComponentTwo
    }
}).mount('#ejemplo5')

