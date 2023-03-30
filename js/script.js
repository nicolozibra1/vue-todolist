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
                {
                    id:1,
                    name: 'bread',
                    image: './img/bread.jpg',
                    completed: false,
                },
                {
                    id:2,
                    name: 'milk',
                    image: './img/milk.jpg',
                    completed: false
                },
                {
                    id:3,
                    name: 'egg',
                    image: './img/egg.jpg',
                    completed: false
                },
                {
                    id:4,
                    name: 'hamburger',
                    image: './img/hamburger.jpg',
                    completed: false
                },
                {
                    id:5,
                    name: 'apple',
                    image: './img/apple.jpg',
                    completed: false
                },
                {
                    id:6,
                    name: 'lettuce iceberg',
                    image: './img/lattuce.jpg',
                    completed: false
                },
                {
                    id:7,
                    name: 'rice',
                    image: './img/rice.jpg',
                    completed: false
                },
                {
                    id:8,
                    name: 'pasta',
                    image: './img/pasta.jpg',
                    completed: false
                },
                {
                    id:9,
                    name: 'cheese',
                    image: './img/cheese.jpg',
                    completed: false
                },
                {
                    id:10,
                    name: 'yogurt',
                    image: './img/yogurt.jpg',
                    completed: false
                },
                {
                    id:11,
                    name: 'seed oil',
                    image: './img/seed-oil.jpg',
                    completed: false
                },
                {
                    id:12,
                    name: 'mais',
                    image: './img/mais.jpg',
                    completed: false
                }
            ],
            newIngredient: '',
            completed: '',
            cart: [],
        }
    },
    methods: {
        newItem() {
            const newIngredient = {
                name: this.newIngredient,
                completed: false
            }
            this.cart.push(newIngredient)
            this.newIngredient.name
        },
        deleteList(index){
            const itemToRemove = this.cart[index];
            this.cart.splice(index, 1);
            const itemIndexFind = this.listaSpesa.findIndex(item => item.id === itemToRemove.id);
            this.listaSpesa[itemIndexFind].completed = false;
        },
        complete(index) {
            this.listaSpesa[index].completed = true;   
            this.cart.push(this.listaSpesa[index]);  
        }
    },
    mounted() {

    }
}).mount('#app');
