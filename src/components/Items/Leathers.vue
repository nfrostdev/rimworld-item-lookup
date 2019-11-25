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
                        this.toDollarAmount(object.value),
                        this.toWholePercent(object.multipliers.hp),
                        this.toWholePercent(object.multipliers.armor.sharp),
                        this.toWholePercent(object.multipliers.armor.blunt),
                        this.toWholePercent(object.multipliers.armor.heat),
                        this.toTemperature(object.multipliers.insulation.cold),
                        this.toTemperature(object.multipliers.insulation.heat),
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
                        this.toWholePercent(object.flammability),
                        object.hp,
                        object.mass + ' kg'
                    ];
                });
            },
            toWholePercent(value) {
                return (value * 100).toFixed(0) + '%';
            },
            toDollarAmount(value) {
                return '$' + value.toFixed(2);
            },
            toTemperature(value) {
                return value.toFixed(1) + '° F / ' + ((value - 32) * (5 / 9)).toFixed(1) + '° C';
            }
        },
        mounted() {
            this.multiplier_content = this.formatMultipliers();
            this.base_content = this.formatBaseValues();
        }
    }
</script>
