<template>
    <div>{{ $state.prop }}</div>
</template>

<script>
export default {
    created () {
        if (this.$isServer) {
            // Will this get relayed to the client?
            this.$state.prop = 2
            // Yes! It will :)
        }
    }
}
</script>
