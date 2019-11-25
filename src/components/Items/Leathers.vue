<template>
    <div class="leathers">
        <h2>Multiplier Values</h2>
        <Table :headers="multiplier_headers" :content="multiplier_content"/>
        <h2>Base Values</h2>
        <Table :headers="base_headers" :content="base_content"/>
    </div>
</template>

<script>
    import Table from "../Table";

    export default {
        components: {Table},
        data() {
            return {
                multiplier_headers: ['Name', 'Value', 'HP', 'Sharp Armor', 'Blunt Armor', 'Heat Armor', 'Cold Insulation', 'Heat Insulation'],
                multiplier_content: null,
                base_headers: ['Name', 'Beauty', 'Deterioration Rate', 'Flammability', 'HP', 'Mass'],
                base_content: null
            }
        },
        methods: {
            // Format the data for usage in the table component.
            formatMultipliers() {
                return Object.keys(this.$store.state.Leathers).map(store => {
                    const object = this.$store.state.Leathers[store];

                    return [
                        object.name,
                        this.$options.filters.dollar(object.value),
                        this.$options.filters.percent(object.multipliers.hp),
                        this.$options.filters.percent(object.multipliers.armor.sharp),
                        this.$options.filters.percent(object.multipliers.armor.blunt),
                        this.$options.filters.percent(object.multipliers.armor.heat),
                        this.$options.filters.temperature(object.multipliers.insulation.cold),
                        this.$options.filters.temperature(object.multipliers.insulation.heat),
                    ];
                });
            },
            formatBaseValues() {
                return Object.keys(this.$store.state.Leathers).map(store => {
                    const object = this.$store.state.Leathers[store];

                    return [
                        object.name,
                        object.beauty,
                        object.deterioration_rate + ' / Day',
                        this.$options.filters.percent(object.flammability),
                        object.hp,
                        object.mass + ' kg'
                    ];
                });
            }
        },
        mounted() {
            this.multiplier_content = this.formatMultipliers();
            this.base_content = this.formatBaseValues();
        }
    }
</script>
