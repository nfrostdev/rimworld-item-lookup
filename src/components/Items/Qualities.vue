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
            // Format the data for usage in the table component.
            formatQualities() {
                return Object.keys(this.$store.state.Qualities).map(store => {
                    const object = this.$store.state.Qualities[store];

                    return [
                        object.name,
                        object.multipliers.beauty,
                        object.multipliers.comfort,
                        object.multipliers.armor,
                        object.multipliers.insulation,
                        object.multipliers.melee_damage,
                        object.multipliers.ranged_accuracy,
                        object.multipliers.value,
                        object.multipliers.deterioration_rate,
                    ].map(value => this.toWholePercent(value));
                });
            },
            toWholePercent(value) {
                // In order to lazily pass through whatever values I want I'm just going to check the type.
                // If JavaScript wasn't a horrible language this wouldn't be possible.
                if (typeof value === 'number') {
                    return (value * 100).toFixed(0) + '%';
                }
                return value;
            }
        },
        mounted() {
            this.content = this.formatQualities();
        }
    }
</script>
