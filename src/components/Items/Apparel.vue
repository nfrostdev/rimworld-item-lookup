<template>
    <div class="apparel" v-if="this.item">
        <div class="apparel__content">
            <h1>{{ item.name }}</h1>
            <p>{{ item.description }}</p>
            <p class="apparel__layers">Layers: {{ item.layers.join(', ') }}</p>
            <div class="apparel__base">
                <h2>Base Stats</h2>
                <table>
                    <thead>
                    <tr>
                        <th>HP</th>
                        <th>Sharp Armor</th>
                        <th>Blunt Armor</th>
                        <th>Heat Armor</th>
                        <th>Cold Insulation</th>
                        <th>Heat Insulation</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{{ item.hp }}</td>
                        <td>{{ item.armor.sharp | precise_percent }}</td>
                        <td>{{ item.armor.blunt | precise_percent }}</td>
                        <td>{{ item.armor.heat | precise_percent }}</td>
                        <td>{{ item.insulation.cold | precise_percent }}</td>
                        <td>{{ item.insulation.heat | precise_percent }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div :id="category" v-for="(material, category) in materials">
                <h2>{{ category | capitalize }} Variants</h2>
                <div v-for="type in material" :id="type.name">
                    <h3>{{ type.name }} {{ item.name }}</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>Quality</th>
                            <th>HP</th>
                            <th>Sharp Armor</th>
                            <th>Blunt Armor</th>
                            <th>Heat Armor</th>
                            <th>Cold Insulation</th>
                            <th>Heat Insulation</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="quality in qualities" :class="quality.name">
                            <td>{{ quality.name }}</td>
                            <td>{{ item.hp * type.multipliers.hp }}</td>
                            <td>{{ item.armor.sharp * type.multipliers.armor.sharp * quality.multipliers.armor | precise_percent }}</td>
                            <td>{{ item.armor.blunt * type.multipliers.armor.blunt * quality.multipliers.armor | precise_percent }}</td>
                            <td>{{ item.armor.heat * type.multipliers.armor.heat * quality.multipliers.armor | precise_percent }}</td>
                            <td>
                                <span>{{ (type.multipliers.insulation.cold * item.insulation.cold * quality.multipliers.insulation).toFixed(1) }}&deg;<sup>F</sup></span>
                                <span> / </span>
                                <span>{{ (((type.multipliers.insulation.cold * item.insulation.cold * quality.multipliers.insulation ) - 32) * (5 / 9)).toFixed(1) }}&deg;<sup>C</sup></span>
                            </td>
                            <td>
                                <span>{{ (type.multipliers.insulation.heat * item.insulation.heat * quality.multipliers.insulation).toFixed(1) }}&deg;<sup>F</sup></span>
                                <span> / </span>
                                <span>{{ (((type.multipliers.insulation.heat * item.insulation.heat * quality.multipliers.insulation) - 32) * (5 / 9)).toFixed(1) }}&deg;<sup>C</sup></span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <nav aria-label="Apparel Material" class="apparel__navigation">
            <div class="apparel__navigation__heading">Go to Variant</div>
            <div class="apparel__navigation__variant" v-for="(material, category) in materials">
                <a :href="'#' + category" class="apparel__navigation__category">{{ category | capitalize }} Variants</a>
                <a v-for="type in material" :href="'#' + type.name" class="apparel__navigation__link">{{ type.name }}</a>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        props: {
            item: Object
        },
        data() {
            return {
                qualities: this.$store.state.Qualities,
                materials: null
            }
        },
        mounted() {
            // Different types of apparel are made from different materials, or have limitations of what material that they can be made of.
            this.materials = {
                fabric: this.$store.state.Fabrics,
                leather: this.$store.state.Leathers,
            }
        }
    }
</script>

<style lang="scss">
    $focusPrimary: #2E3034;
    $focusBorder: #575A5C;

    .apparel {

        &__content {
            padding-left: 15rem;
        }

        &__navigation {
            position: fixed;
            top: 8rem;
            left: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            width: 12rem;
            background-color: $focusPrimary;
            border: 0.0625rem solid $focusBorder;
            padding: 0.5rem;
            font-size: 0.875rem;
            line-height: 0.875rem;

            &__heading {
                font-size: 1.25rem;
                line-height: 1.25rem;
                font-weight: 500;
            }

            &__variant {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
            }

            &__category {
                margin: 1rem 0 0.25rem;
                font-weight: 500;
                font-size: 1rem;
                line-height: 1rem;
            }

            &__link {
                margin-top: 0.25rem;
            }
        }
    }
</style>
