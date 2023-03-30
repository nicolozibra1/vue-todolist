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
            completed: false

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
            this.listaSpesa.splice(index, 1)
        },
        complete() {
            this.listaSpesa[index].completed = true;
        }
    },
    mounted() {

    }
}).mount('#app');
