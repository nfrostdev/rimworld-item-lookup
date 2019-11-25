<template>
    <section aria-label="Search" class="search">
        <form>
            <label for="search">Search</label>
            <input id="search" type="search" v-model="input" @keyup="search"/>
        </form>
        <div v-if="results" class="search__results" @click="resetResults">
            <div v-for="(category, category_name) in results" :key="category_name">
                <router-link v-for="(result, index) in category"
                             :key="index"
                             :to="{name: category_name, params: {type: result.name}  }"
                             class="search__result">
                    <span class="search__result__name">{{ result.name }}</span>
                    <span class="search__result__category">({{ category_name }})</span>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                input: null,
                results: null
            }
        },
        methods: {
            search() {
                if (!this.input || !this.input.length) {
                    this.results = null;
                    return false;
                }

                this.results = {};

                // Check if the inputted value loosely matches one of the store names.
                Object.keys(this.$store.state).forEach(store => {
                    const items = this.$store.state[store].filter(object => {
                        return object.name.toLowerCase().indexOf(this.input) >= 0;
                    });
                    if (items.length) {
                        // The category will be the object keys if there are matches.
                        this.results = {...this.results, ...{[store]: items}};
                    }
                });
            },
            resetResults() {
                this.results = null;
            }
        },
    }
</script>

<style lang="scss">
    $focusPrimary: #2E3034;
    $focusBorder: #575A5C;

    .search {
        padding: 1rem;

        &__result {
            transition: all 0.25s ease;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 0.5rem;
            background-color: $focusPrimary;
            border: 0.0625rem solid $focusBorder;

            &:hover, &:focus {
                background-color: lighten($focusPrimary, 15%);
                border-color: lighten($focusBorder, 15%);
            }

            &s {
                position: absolute;
                display: grid;
                justify-content: start;
                font-size: 0.875rem;
            }

            &__name {
                font-weight: 500;
            }

            &__category {
                font-size: 0.75rem;
                margin-left: 0.5rem;
            }

        }
    }
</style>
