<template>
    <div class="apparel">
        <h1>Apparel</h1>
        <ul>
            <li v-for="(item, index) in apparel" :key="index">
                <router-link :to="{ name: 'apparel-type', params: {type: item.name.toLowerCase()}}">
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                apparel: this.$store.state.Apparel
            }
        }
    }
</script>
