<template>
    <div class="apparel">
        <h1>{{ item.name }}</h1>
        <div class="apparel__base">
            <h2>Base Stats</h2>
            <div class="apparel__layers">
                {{ item.layers.join(', ') }}
            </div>
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
                    <td>{{ item.armor_sharp * 100 }}%</td>
                    <td>{{ item.armor_blunt * 100 }}%</td>
                    <td>{{ item.armor_heat * 100 }}%</td>
                    <td>{{ item.cold_ins * 100 }}%</td>
                    <td>{{ item.heat_ins * 100 }}%</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="apparel__leathers">
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
                        <td>{{ item.hp }}</td>
                        <td>{{ (item.armor_sharp * leather.armor_sharp * 100 * quality.multiplier).toFixed(1) }}%</td>
                        <td>{{ (item.armor_blunt * leather.armor_blunt * 100 * quality.multiplier).toFixed(1) }}%</td>
                        <td>{{ (item.armor_heat * leather.armor_heat * 100 * quality.multiplier).toFixed(1) }}%</td>
                        <td>
                            <span>{{ (leather.cold_ins * item.cold_ins * quality.multiplier).toFixed(1) }}&deg;<sup>F</sup></span>
                            <span> / </span>
                            <span>{{ (((leather.cold_ins * item.cold_ins * quality.multiplier ) - 32) * (5 / 9)).toFixed(1) }}&deg;<sup>C</sup></span>
                        </td>
                        <td>
                            <span>{{ (leather.heat_ins * item.heat_ins * quality.multiplier).toFixed(1) }}&deg;<sup>F</sup></span>
                            <span> / </span>
                            <span>{{ (((leather.heat_ins * item.heat_ins * quality.multiplier) - 32) * (5 / 9)).toFixed(1) }}&deg;<sup>C</sup></span>
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
        data() {
            return {
                qualities: this.$store.state.Qualities,
                fabrics: this.$store.state.Fabrics,
                leathers: this.$store.state.Leathers,
            }
        },
        props: {
            item: Object
        },
    }
</script>
