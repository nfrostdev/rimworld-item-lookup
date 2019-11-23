<template>
    <div class="pants">
        <Apparel :item="pants"/>
    </div>
</template>

<script>
    import Apparel from "../../components/Apparel";

    export default {
        components: {Apparel},
        data() {
            return {
                pants: {
                    name: 'Pants',
                    hp: 100,
                    armor_sharp: 0.2,
                    armor_blunt: 0.2,
                    armor_heat: 0.2,
                    cold_ins: 0.2,
                    heat_ins: 0.08,
                    layers: [
                        'Lower Body',
                        'On Skin'
                    ]
                }
            }
        }
    }
</script>
