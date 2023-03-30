/* 
Fare una lista della spesa per pasquetta
Inserire un campo di input dove poter inserire gli elementi della spesa,
Aggiungere un BTN per invio elementi
Aggiungere per ogni elemento della lista un BTN "canc" ed un BTN "done" 
*/

const { createApp } = Vue;

createApp({
    data() {
        return {
            listaSpesa:[
                {name: 'pane',
                completed: false
                },
                {name: 'acqua',
                completed: false
                },
            ],
            newIngredient: '',
            completed: '',
            cart: []
            

        }
    },
    methods: {
        newItem() {
            const newIngredient = {
                name: this.newIngredient,
                completed: false
            }
            this.listaSpesa.push(newIngredient)
            this.newIngredient.name
        },
        deleteList(index){
            this.cart.splice(index, 1)
            this.listaSpesa[index].completed = false;
        },
        complete(index) {
            this.listaSpesa[index].completed = true;   
            this.cart.push(this.listaSpesa[index]);
            console.log(this.cart);
            console.log(index);
            console.log(this.listaSpesa[index].completed);       
        }
    },
    mounted() {

    }
}).mount('#app');
