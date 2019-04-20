<template lang="pug">
.menu__layout
    .menu
        .menu-item(v-for="item in menuItems")
            .menu-item__icon
                i.fa(:class="item.icon" aria-hidden="true")
            .menu-item__text {{ item.text }}
    .mode-switcher
        .mode-switcher__text Dark Mode
        Switcher

</template>

<script>
import Switcher from "./Switcher";
export default {
    name: "Menu",
    components: {Switcher},
    data: function(){
        return {
            menuItems: [
                {
                    icon: 'fas fa-chart-pie',
                    text: 'Dashboard'
                },
                {
                    icon: 'fa-credit-card',
                    text: 'Transact'
                },
                {
                    icon: 'fa-random',
                    text: 'Exchange'
                },
                {
                    icon: 'fa-folder',
                    text: 'History'
                },
                {
                    icon: 'fa-cog',
                    text: 'Settings'
                },
            ]
        }
    }

}
</script>

<style lang="sass" scoped>

.menu__layout
    display: flex
    flex-direction: column
    justify-content: space-between

.menu
    display: flex
    flex-direction: column
    align-items: flex-start

.menu-item
    padding: 20px 40px
    display: flex
    justify-content: flex-start
    align-items: center
    color: #838ea5
    cursor: pointer
    i
        color: #444f66
    &:not(:first-child)
        margin-top: 24px

.menu-item__icon
    font-size: 18px

.menu-item__text
    margin-left: 10px


.mode-switcher
    display: flex
    justify-content: flex-start
    align-items: center
    margin-left: 40px
    margin-bottom: 40px

.mode-switcher__text
    color: #838ea5
    font-size: 14px

</style>