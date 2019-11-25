<template>
    <div class="item">
        <Apparel v-if="category === 'Apparel'" :item="item"/>
    </div>
</template>

<script>
    import Apparel from "../components/Items/Apparel";

    export default {
        components: {
            Apparel
        },
        data() {
            return {
                category: this.$route.params.category,
                item: null
            }
        },
        methods: {
            validateItem(type) {
                let item;

                if (this.$route.params.category === 'Apparel') {
                    item = this.$store.state.Apparel.find(object => object.name === type);
                }
                // If this is a valid item, bind it, otherwise "404".
                if (item) {
                    this.item = item;
                } else {
                    this.$router.push({name: 404})
                }
            }
        },
        beforeRouteUpdate(to, from, next) {
            // The item model will need to be updated between routes if this component is re-used.
            this.validateItem(to.params.type);
            next();
        },
        mounted() {
            // Check if the item is valid when mounting.
            this.validateItem(this.$route.params.type);
        }
    }
</script>
