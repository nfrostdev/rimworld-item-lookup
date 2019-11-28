<template>
    <div class="item-list">
        <h1>{{ category }}</h1>

        <ul v-if="category === 'Apparel'">
            <li v-for="item in items">
                <router-link :to="{ name: 'item', params: {category: category, type: item.name}}">
                    {{ item.name }}
                </router-link>
            </li>
        </ul>

        <Qualities v-if="category === 'Qualities'"/>
        <Textile v-if="category === 'Leathers' || category === 'Fabrics'"/>
    </div>
</template>

<script>
    import Qualities from "../components/Items/Qualities";
    import Textile from "../components/Items/Textile";

    export default {
        components: {
            Textile,
            Qualities
        },
        data() {
            return {
                category: null,
                items: null
            }
        },
        methods: {
            validateCategory(parent) {
                const category = this.$store.state[parent.params.category];

                if (!category) {
                    this.$router.push({name: 404})
                }
                this.category = parent.params.category;
                this.items = category;
            }
        },
        beforeRouteUpdate(to, from, next) {
            // The item model will need to be updated between routes if this component is re-used.
            this.validateCategory(to);
            next();
        },
        mounted() {
            this.validateCategory(this.$route);
        }
    }
</script>
