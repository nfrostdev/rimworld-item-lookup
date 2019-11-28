<template>
    <table>
        <thead>
        <tr>
            <th v-for="header in headers">{{ header }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="data in content">
            <td v-for="value in data">{{ value }}</td>
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
