<template lang="pug">
.userPlace
    .userPlace-left
        i.fa.fa-th-large(aria-hidden="true")
        i.fa.fa-envelope(aria-hidden="true")
        i.fa.fa-bell(aria-hidden="true")
    .userPlace-right
        UserTitle
        i.fa.fa-caret-down(aria-hidden="true")
</template>

<script>
import UserTitle from "../../Global/UserTitle";
export default {
    name: "UserPlace",
    components: {UserTitle},
    data: function(){
        return {
            greeting: "hi"
        }
    }

}
</script>

<style lang="sass" scoped>

.userPlace
    display: grid
    grid-template-columns: 54% 42%
    grid-gap: 10px

.userPlace-left
    display: flex
    justify-content: space-around
    align-items: center
    i
        color: #5B657E
        font-size: 20px
        cursor: pointer
        transition: .2s color
        &:hover
            color: #707e9c

.userPlace-right
    display: flex
    justify-content: flex-end
    cursor: pointer
    i
        margin: 5px 0 0 16px
        font-size: 20px
        color: #464e63
        transition: .2s color
    &:hover
        i
            color: #6a7796
</style>