const app=new Vue({
    el:'#app',
    data: {
        titulito: 'hola mundo con vueJS',
        web: ['vuejs',['php','html','css','javascript'],'angularjs','reactjs'],
        frutas:[
            {nombre:'Pera',cantidad:5},
            {nombre:'Manzana',cantidad:2},
            {nombre:'Tomate',cantidad:10}

        ],
        nuevaFruta: ""
    },
    methods:{
        agregarFruta(fruta){
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad:2
            })
        }
        
    }
})