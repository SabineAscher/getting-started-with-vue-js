var app = new Vue ({
    el: "#app",
    data: {
        brand: "Vue Mastery",
        product: "Socks",
        selectedVariant: 0,
        details: ["80% Cotton", "20 % Polyester", "Gender neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "Socks.JPG",
                variantQuantity: 10,
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "Socks_blue.JPG",
                variantQuantity: 0,
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        updateProduct(index){
            this.selectedVariant = index,
            console.log(index)
        },
    },  
    computed: {
        title() {
            return this.brand + " " + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },

        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    },
})