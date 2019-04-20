<template lang="pug">
.base-header
    .base-header__title Bitcoin
    .base-header__zoomLayout
        Header_Zoom

</template>

<script>
import Header_Zoom from "./Header_Zoom";
export default {
    name: "Base_Header",
    components: {Header_Zoom},
    data: function(){
        return {
            greeting: "hi"
        }
    }

}
</script>

<style lang="sass" scoped>

.base-header__title
    color: #ffffff
    font-size: 30px
    letter-spacing: 3px

.base-header
    display: flex
    justify-content: space-between
    align-items: center

</style>