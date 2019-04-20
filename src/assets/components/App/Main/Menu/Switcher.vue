<template lang="pug">
.switcher
    .switcher__layout
        .switcher__circle
</template>

<script>
export default {
    name: "Switcher",
    data: function(){
        return {
            greeting: "hi"
        }
    }

}
</script>

<style lang="sass" scoped>
.switcher
    width: 40px
    height: 20px
    margin-left: 10px

.switcher__layout
    border: 1px solid #838ea5
    -webkit-border-radius: 25px
    -moz-border-radius: 25px
    border-radius: 25px
    width: 40px
    height: 20px
    position: relative
    display: flex
    align-items: center
    justify-content: center

.switcher__circle
    position: absolute
    top: 1px
    left: 22px
    background: #577be5
    width: 15px
    height: 15px
    -webkit-border-radius: 50%
    -moz-border-radius: 50%
    border-radius: 50%
    cursor: pointer
    
</style>