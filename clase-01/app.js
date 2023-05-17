const { createApp } = Vue

createApp({

    data() {
        return {
            mensaje: 'Hola Vue.js!',
            curso: 'codo a codo',
            mensaje2: 'Hola mensaje2 Vue.js!',
            mensaje3: '<h1>Esto es html</h1>'
        }
    },

}).mount('#app')


// ----------------- OTRA APP 2 ----------------- //

createApp({

    data() {
        return {
            mensaje: 'Hola Vue.js!',
            url: 'https://www.google.com',
            login: true,
        }
    },

}).mount('#app2')