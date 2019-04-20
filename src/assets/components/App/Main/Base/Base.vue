<template lang="pug">
.base
    Base_Header
    .base__contentLayout
        Base_Content
</template>

<script>
import Base_Header from "./Header/Base_Header";
import Base_Content from "./Content/Base_Content";
export default {
    name: "Base",
    components: {Base_Content, Base_Header},
    data: function(){
        return {
            greeting: "hi"
        }
    }

}
</script>

<style lang="sass" scoped>

.base
    font-weight: bolder
    padding: 12px 0

.base__contentLayout
    height: 200px

</style>