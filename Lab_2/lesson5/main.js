const app = Vue.createApp({       
    data() {
        return {
            name : 'Tran Vinh Nghi', 
            id : 'GCS220505', 
            product : "Nghi's socks",  
            image: './assets/images/socks_green.jpg',    
            inventory: 88,  
            onSale: true, 
            details: ['50% cotton', '30% wool', '20% polyester'],   // Task  
            sizes: ['S', 'M', 'L', 'XL'], // Challenge
            variants: [
              { id: 2234, color: 'green' },  // Task
              { id: 2235, color: 'blue' }   // Task
            ],
        }
    }
})
