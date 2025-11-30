const app = Vue.createApp({
    data() {
        return {
            name: 'Tran Vinh Nghi',
            id: 'GCS220505',

            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        // Challenge
        removeById(id) {
            const index = this.cart.indexOf(id)
                if (index > -1) {
                    this.cart.splice(index, 1)
                }
        }
    }
})
