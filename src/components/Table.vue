<template>
    <table>
        <thead>
        <tr>
            <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(data, data_index) in content" :key="data_index">
            <td v-for="(value, value_index) in data" :key="value_index">{{ value }}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        props: {
            headers: Array,
            content: Array
        }
    }
</script>
