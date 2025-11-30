const app = Vue.createApp({       
    data() {
        return {
            
            name : 'Tran Vinh Nghi', 
            id : 'GCS220505', 
            cart:0,
            product : "Nghi's socks",  
            image: './assets/images/socks_green.jpg',    
            inventory: 88,  
            onSale: true, 
            details: ['50% cotton', '30% wool', '20% polyester'],   
            sizes: ['S', 'M', 'L', 'XL'], 
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },  
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }   
            ],
        }
    },

    methods: {
        // Task
        addToCart() {
            this.cart += 1
        },
        // Challenge
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        },
        // Task
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})
