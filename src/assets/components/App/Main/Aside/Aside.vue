<template lang="pug">
.aside
    Info
</template>

<script>
import Info from "./Info/Info";
export default {
    name: "Aside",
    components: {Info},
    data: function(){
        return {
            greeting: "hi"
        }
    }

}
</script>

<style lang="sass" scoped>
.aside
    padding: 12px 0
</style>