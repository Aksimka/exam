<template lang="pug">
.main
    .menu__layout
        Menu
    .base__layout
        Base
    .main__asideLayout
        Aside
</template>

<script>
import Menu from "./Menu/Menu";
import Base from "./Base/Base";
import Aside from "./Aside/Aside";
export default {
    name: "MyApplication",
    components: {Aside, Base, Menu},
    data: function(){
        return {
            greeting: "hi"
        }
    }

}
</script>

<style lang="sass" scoped>

.main
    display: grid
    grid-template-columns: 14% auto 18%
    grid-gap: 20px

.myApplication
    background: #e2e2e2

.main__asideLayout
    padding-right: 15px

</style>