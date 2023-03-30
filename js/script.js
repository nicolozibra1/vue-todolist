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
                    price: 1.99,
                    image: './img/bread.jpg',
                    completed: false,
                },
                {
                    id:2,
                    price: 1.39,
                    name: 'milk',
                    image: './img/milk.jpg',
                    completed: false
                },
                {
                    id:3,
                    price: 2.79,
                    name: 'egg',
                    image: './img/egg.jpg',
                    completed: false
                },
                {
                    id:4,
                    price: 2.99,
                    name: 'hamburger',
                    image: './img/hamburger.jpg',
                    completed: false
                },
                {
                    id:5,
                    price: 1.99,
                    name: 'apple',
                    image: './img/apple.jpg',
                    completed: false
                },
                {
                    id:6,
                    price: 0.99,
                    name: 'lettuce iceberg',
                    image: './img/lattuce.jpg',
                    completed: false
                },
                {
                    id:7,
                    price: 3.29,
                    name: 'rice',
                    image: './img/rice.jpg',
                    completed: false
                },
                {
                    id:8,
                    price: 1.49,
                    name: 'pasta',
                    image: './img/pasta.jpg',
                    completed: false
                },
                {
                    id:9,
                    price: 5.49,
                    name: 'cheese',
                    image: './img/cheese.jpg',
                    completed: false
                },
                {
                    id:10,
                    price: 1.29,
                    name: 'yogurt',
                    image: './img/yogurt.jpg',
                    completed: false
                },
                {
                    id:11,
                    price: 1.95,
                    name: 'seed oil',
                    image: './img/seed-oil.jpg',
                    completed: false
                },
                {
                    id:12,
                    price: 1.33,
                    name: 'mais',
                    image: './img/mais.jpg',
                    completed: false
                }
            ],
            newIngredient: '',
            completed: '',
            cart: [],
            totalPrice: null,
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
            this.newIngredient = '';
        },
        deleteList(index){
            const itemToRemove = this.cart[index];
            this.cart.splice(index, 1);
            const itemIndexFind = this.listaSpesa.findIndex(item => item.id === itemToRemove.id);
            this.listaSpesa[itemIndexFind].completed = false;
            this.totalPrice = parseFloat(this.cart.reduce((total, item) => total + item.price, 0).toFixed(2));
            console.log(this.totalPrice)
        },
        complete(index) {
            this.listaSpesa[index].completed = true;   
            this.cart.push(this.listaSpesa[index]);
            this.totalPrice = parseFloat(this.cart.reduce((total, item) => total + item.price, 0).toFixed(2));
            console.log(this.totalPrice)
        },
    },
    mounted() {

    }
}).mount('#app');
