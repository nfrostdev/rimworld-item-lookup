<template>
    <div class="apparel" v-if="this.item">
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
        <div id="leather" class="apparel__leathers">
            <h2>Leather Variants</h2>
            <div v-for="(leather, l_index) in leathers" :key="l_index" class="apparel__leather">
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
                    <tr v-for="(quality, q_index) in qualities" :key="q_index" :class="quality.name">
                        <td>{{ quality.name }}</td>
                        <td>{{ item.hp * leather.multipliers.hp }}</td>
                        <td>{{ (item.armor.sharp * leather.armor.sharp * 100 * quality.multipliers.armor).toFixed(1) }}%</td>
                        <td>{{ (item.armor.blunt * leather.armor.blunt * 100 * quality.multipliers.armor).toFixed(1) }}%</td>
                        <td>{{ (item.armor.heat * leather.armor.heat * 100 * quality.multipliers.armor).toFixed(1) }}%</td>
                        <td>
                            <span>{{ (leather.insulation.cold * item.insulation.cold * quality.multipliers.insulation).toFixed(1) }}&deg;<sup>F</sup></span>
                            <span> / </span>
                            <span>{{ (((leather.insulation.cold * item.insulation.cold * quality.multipliers.insulation ) - 32) * (5 / 9)).toFixed(1) }}&deg;<sup>C</sup></span>
                        </td>
                        <td>
                            <span>{{ (leather.insulation.heat * item.insulation.heat * quality.multipliers.insulation).toFixed(1) }}&deg;<sup>F</sup></span>
                            <span> / </span>
                            <span>{{ (((leather.insulation.heat * item.insulation.heat * quality.multipliers.insulation) - 32) * (5 / 9)).toFixed(1) }}&deg;<sup>C</sup></span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
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
