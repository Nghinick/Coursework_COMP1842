const app = Vue.createApp({       
    data() {
        return {
            
            name : 'Tran Vinh Nghi', 
            id : 'GCS220505', 
            cart:0,
            product : "Socks", 
            brand : "Nghi's fashion", 
            brand1 : "Fashion", 
            selectedVariants: 0,     
            onSale: true, 
            details: ['50% cotton', '30% wool', '20% polyester'],   
            sizes: ['S', 'M', 'L', 'XL'], 
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },  
            ],
            onSale: true
        }
    },

    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariants(index) {
            this.selectedVariants = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariants].image
        },
        inStock() {
            return this.variants[this.selectedVariants].quantity
        },

        // Challenge
        sale() {
            if (this.onSale) {
                return this.brand1 + ' ' + this.product + ' is on sale.'
            }
            return ''
        }
    }
})
