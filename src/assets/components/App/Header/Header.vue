<template lang="pug">
.header
    .header__logoLayout
        Logo(:url="logoUrl")
    .header__searchLayout
        Search
    .header__userPlaceLayout
        UserPlace

</template>

<script>
import Logo from '../../Global/Logo_medium'
import Search from "../../Global/Search";
import UserPlace from "./UserPlace";
export default {
    name: "Header",
    components: {UserPlace, Search, Logo},
    data: function(){
        return {
            greeting: "hi",
            logoUrl: 'images/origamiWhite.png'
        }
    }

}
</script>

<style lang="sass" scoped>
.header
    width: 100%
    height: 83px
    align-items: center
    display: grid
    grid-template-columns: 15% auto 25%

.header__userPlaceLayout
    padding-right: 10px


.header__logoLayout
    padding-left: 30px




</style>