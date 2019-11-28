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
                        <td>{{ (item.armor.sharp * 100).toFixed(1) }}%</td>
                        <td>{{ (item.armor.blunt * 100).toFixed(1) }}%</td>
                        <td>{{ (item.armor.heat * 100).toFixed(1) }}%</td>
                        <td>{{ (item.insulation.cold * 100).toFixed(1) }}%</td>
                        <td>{{ (item.insulation.heat * 100).toFixed(1) }}%</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div id="fabric" class="apparel__fabrics">
                <h2>Fabric Variants</h2>
                <div v-for="fabric in fabrics" :id="fabric.name" class="apparel__fabric">
                    <h3>{{ fabric.name }} {{ item.name }}</h3>
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
                            <td>{{ item.hp * fabric.multipliers.hp }}</td>
                            <td>{{ (item.armor.sharp * fabric.multipliers.armor.sharp * 100 * quality.multipliers.armor).toFixed(1) }}%</td>
                            <td>{{ (item.armor.blunt * fabric.multipliers.armor.blunt * 100 * quality.multipliers.armor).toFixed(1) }}%</td>
                            <td>{{ (item.armor.heat * fabric.multipliers.armor.heat * 100 * quality.multipliers.armor).toFixed(1) }}%</td>
                            <td>
                                <span>{{ (fabric.multipliers.insulation.cold * item.insulation.cold * quality.multipliers.insulation).toFixed(1) }}&deg;<sup>F</sup></span>
                                <span> / </span>
                                <span>{{ (((fabric.multipliers.insulation.cold * item.insulation.cold * quality.multipliers.insulation ) - 32) * (5 / 9)).toFixed(1) }}&deg;<sup>C</sup></span>
                            </td>
                            <td>
                                <span>{{ (fabric.multipliers.insulation.heat * item.insulation.heat * quality.multipliers.insulation).toFixed(1) }}&deg;<sup>F</sup></span>
                                <span> / </span>
                                <span>{{ (((fabric.multipliers.insulation.heat * item.insulation.heat * quality.multipliers.insulation) - 32) * (5 / 9)).toFixed(1) }}&deg;<sup>C</sup></span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="leather" class="apparel__leathers">
                <h2>Leather Variants</h2>
                <div v-for="leather in leathers" :id="leather.name" class="apparel__leather">
                    <h3>{{ leather.name }} {{ item.name }}</h3>
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
                            <td>{{ item.hp * leather.multipliers.hp }}</td>
                            <td>{{ (item.armor.sharp * leather.multipliers.armor.sharp * 100 * quality.multipliers.armor).toFixed(1) }}%</td>
                            <td>{{ (item.armor.blunt * leather.multipliers.armor.blunt * 100 * quality.multipliers.armor).toFixed(1) }}%</td>
                            <td>{{ (item.armor.heat * leather.multipliers.armor.heat * 100 * quality.multipliers.armor).toFixed(1) }}%</td>
                            <td>
                                <span>{{ (leather.multipliers.insulation.cold * item.insulation.cold * quality.multipliers.insulation).toFixed(1) }}&deg;<sup>F</sup></span>
                                <span> / </span>
                                <span>{{ (((leather.multipliers.insulation.cold * item.insulation.cold * quality.multipliers.insulation ) - 32) * (5 / 9)).toFixed(1) }}&deg;<sup>C</sup></span>
                            </td>
                            <td>
                                <span>{{ (leather.multipliers.insulation.heat * item.insulation.heat * quality.multipliers.insulation).toFixed(1) }}&deg;<sup>F</sup></span>
                                <span> / </span>
                                <span>{{ (((leather.multipliers.insulation.heat * item.insulation.heat * quality.multipliers.insulation) - 32) * (5 / 9)).toFixed(1) }}&deg;<sup>C</sup></span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <nav aria-label="Apparel Material" class="apparel__navigation">
            <div class="apparel__navigation__heading">Go to Variant</div>
            <a href="#fabric" class="apparel__navigation__variant">Fabric Variants</a>
            <a v-for="fabric in fabrics" :href="'#' + fabric.name">{{ fabric.name }}</a>

            <a href="#leather" class="apparel__navigation__variant">Leather Variants</a>
            <a v-for="leather in leathers" :href="'#' + leather.name">{{ leather.name }}</a>
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
                fabrics: this.$store.state.Fabrics,
                leathers: this.$store.state.Leathers,
            }
        }
    }
</script>

<style lang="scss">
    $focusPrimary: #2E3034;
    $focusBorder: #575A5C;

    .apparel {

        &__content {
            padding-left: 14rem;
        }

        &__navigation {
            position: fixed;
            top: 8rem;
            left: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            width: 12rem;
            background-color: $focusPrimary;
            border: 0.0625rem solid $focusBorder;
            padding: 0.5rem;
            font-size: 0.875rem;

            &__heading {
                font-size: 1.25rem;
                font-weight: 500;
            }

            &__variant {
                margin: 0.5rem 0 0.25rem;
                font-weight: 500;
                font-size: 1rem;
            }
        }
    }
</style>
