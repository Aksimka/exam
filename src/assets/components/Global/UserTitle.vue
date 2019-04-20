<template lang="pug">
.userTitle
    .userTitle__title Helltie McDonald
    .userTitle__undertitle User
</template>

<script>
export default {
    name: "UserTitle",
    data: function(){
        return {
            greeting: "hi"
        }
    }

}
</script>

<style lang="sass" scoped>

.userTitle
    font-family: 'Varela Round', sans-serif
    display: flex
    flex-direction: column
    justify-content: center
    align-items: flex-end
    width: 131px

.userTitle__title
    color: #cdced3
    font-size: 14px
    font-weight: bolder

.userTitle__undertitle
    color: #495168
    font-size: 12px
    margin-top: 5px
    display: flex
    align-items: center
    justify-content: flex-end


</style>