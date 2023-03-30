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
                {name: 'bread',
                image: './img/bread.jpg',
                completed: false
                },
                {name: 'milk',
                image: './img/milk.jpg',
                completed: false
                },
                {name: 'egg',
                image: './img/egg.jpg',
                completed: false
                },
                {name: 'hamburger',
                image: './img/hamburger.jpg',
                completed: false
                },
                {name: 'apple',
                image: './img/apple.jpg',
                completed: false
                },
                {name: 'lettuce iceberg',
                image: './img/lattuce.jpg',
                completed: false
                },
                {name: 'rice',
                image: './img/rice.jpg',
                completed: false
                },
                {name: 'pasta',
                image: './img/pasta.jpg',
                completed: false
                },
                {name: 'cheese',
                image: './img/cheese.jpg',
                completed: false
                },
                {name: 'yogurt',
                image: './img/yogurt.jpg',
                completed: false
                },
                {name: 'seed oil',
                image: './img/seed-oil.jpg',
                completed: false
                },
                {name: 'mais',
                image: './img/mais.jpg',
                completed: false
                }
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
            this.cart.push(newIngredient)
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
