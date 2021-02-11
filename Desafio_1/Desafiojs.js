new Vue({
    el: "#app",
    data: {
        valor: 0
    },
    methods:{
        aumenta(){
         this.valor++;
        },
        diminui(){
         this.valor--;
        }
    },
    computed:{
        quadrado(){
            if(this.valor >= 0){
                return Math.sqrt(this.valor);
            }else{
                return "vai dar não"
            }      
        }
    }
})