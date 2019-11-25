<template>
    <div class="qualities">
        <p>Quality affects attributes of items after other calculations have occurred.</p>
        <Table :headers="headers" :content="content"/>
    </div>
</template>

<script>
    import Table from "../Table";

    export default {
        components: {Table},
        data() {
            return {
                headers: ['Name', 'Beauty', 'Comfort', 'Armor', 'Insulation', 'Melee Damage', 'Ranged Accuracy', 'Value', 'Deterioration Rate'],
                content: null
            }
        },
        methods: {
            // Format the Qualities data for usage in the table Component.
            formatQualities() {
                return Object.keys(this.$store.state.Qualities).map(store => {
                    const object = this.$store.state.Qualities[store];

                    return [
                        object.name,
                        this.toPercent(object.multipliers.beauty),
                        this.toPercent(object.multipliers.comfort),
                        this.toPercent(object.multipliers.armor),
                        this.toPercent(object.multipliers.insulation),
                        this.toPercent(object.multipliers.melee_damage),
                        this.toPercent(object.multipliers.ranged_accuracy),
                        this.toPercent(object.multipliers.value),
                        this.toPercent(object.multipliers.deterioration_rate),
                    ];
                });
            },
            toPercent(value) {
                return (value * 100).toFixed(0) + '%';
            }
        },
        mounted() {
            this.content = this.formatQualities();
        }
    }
</script>
