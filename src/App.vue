<template>
    <div id="app">
        <header>
            <nav>
                <router-link :to="{name: 'home'}">Home</router-link>
                <router-link v-for="category in Object.keys(this.$store.state)"
                             :to="{name: 'category', params: {category: category}}">
                    {{ category }}
                </router-link>
            </nav>
        </header>
        <Search/>
        <main id="main">
            <transition name="fade" mode="out-in">
                <!-- A random key is generated to ensure that the route transition triggers even when a component would be re-used. -->
                <router-view :key="$route.path"/>
            </transition>
        </main>
    </div>
</template>

<script>
    import Search from "./components/Search";

    export default {
        components: {
            Search
        },
    }
</script>

<style lang="scss">
    $primary: #15191D;
    $focusPrimary: #2E3034;
    $focusBorder: #575A5C;

    * {
        box-sizing: border-box;
        font-family: 'Asap', sans-serif;
    }

    html {
        background-color: $primary;
        color: #eee;
        font-size: 16px;
    }

    main, header {
        padding: 1rem;
    }

    header {
        background-color: $focusPrimary;
        border-bottom: 0.0625rem solid $focusBorder;
    }

    nav {
        display: flex;
        justify-content: space-between;
    }

    a {
        color: invert($focusPrimary);
        text-decoration: none;

        &:hover, &:focus, &.router-link-exact-active {
            text-decoration: underline;
        }
    }

    h1, h2, h3 {
        color: #aaa;
    }

    h2, h3 {
        margin: 0 0 0.5rem;
        font-weight: 500;
    }

    h1 {
        margin: 0 0 1rem;
        font-size: 1.5rem;
    }

    h2 {
        border-bottom: 0.0625rem solid rgba(#aaa, 0.5);
        padding-bottom: 0.125rem;
        font-size: 1.25rem;
    }

    h3 {
        font-size: 1.125rem;
    }

    table {
        background-color: $focusPrimary;
        border-collapse: collapse;
        font-size: 0.875rem;
        text-shadow: 0 0 0.125rem black;
        text-align: right;
        margin: 0 0 2rem;
    }

    th, td {
        padding: 0.3875rem 0.5rem 0.375rem;
        border: 0.0625rem solid $focusBorder;

        &:first-child {
            text-align: right;
        }
    }

    th {
        font-weight: 500;
    }

    $awfulInner: #212120;
    $awfulOuter: #0C0D0D;
    $awfulBorder: #323232;

    td {
        border: 0.0625rem solid $awfulBorder;
    }

    tbody tr {
        &:hover, &:focus {
            color: $focusPrimary;
            background: invert($focusPrimary) !important;
            text-shadow: none;
        }

        background: radial-gradient($awfulInner, $awfulOuter);

        td {
            border-color: $awfulBorder;
        }

        &.Awful {
            background: radial-gradient($awfulInner, $awfulOuter);

            td {
                border-color: $awfulBorder;
            }
        }

        $poorInner: #2B2B2B;
        $poorOuter: #262626;
        $poorBorder: #3C3C3C;

        &.Poor {
            background: radial-gradient($poorInner, $poorOuter);

            td {
                border-color: $poorBorder;
            }
        }

        $normalInner: #343434;
        $normalOuter: #393939;
        $normalBorder: #676767;

        &.Normal {
            background: radial-gradient($normalInner, $normalOuter);

            td {
                border-color: $normalBorder;
            }
        }

        $goodInner: #3E3E3D;
        $goodOuter: #4A4A4A;
        $goodBorder: #9E9F9F;

        &.Good {
            background: radial-gradient($goodInner, $goodOuter);

            td {
                border-color: $goodBorder;
            }
        }

        $excellentInner: #474748;
        $excellentOuter: #585858;
        $excellentBorder: #D9D9D8;

        &.Excellent {
            background: radial-gradient($excellentInner, $excellentOuter);

            td {
                border-color: $excellentBorder;
            }
        }

        $masterworkInner: #505047;
        $masterworkOuter: #67665A;
        $masterworkBorder: #FFF1AA;

        &.Masterwork {
            background: radial-gradient($masterworkInner, $masterworkOuter);

            td {
                border-color: $masterworkBorder;
            }
        }

        $legendaryInner: #53523C;
        $legendaryOuter: #676743;
        $legendaryBorder: #FED206;

        &.Legendary {
            background: radial-gradient($legendaryInner, $legendaryOuter);

            td {
                border-color: $legendaryBorder;
            }
        }
    }

    // Transitions
    .fade-enter-active, .fade-leave-active {
        transition: all 0.125s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter {
        transform: translateY(1rem);
    }

    .fade-leave-to {
        transform: translateX(1rem);
    }
</style>
