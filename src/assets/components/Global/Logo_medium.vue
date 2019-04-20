<template lang="pug">
.logo
    img.logo__img(:src="url")
    .logo__text .bn
</template>

<script>
export default {
    name: "Logo_medium",
    data: function(){
        return {
            greeting: "hi"
        }
    },
    props: {
        url: {
            type: String,
            default: "images/origamiWhite.png"
        }
    }

}
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Varela+Round');

.logo
    display: flex
    align-items: center
    font-family: 'Varela Round', sans-serif
.logo__img
    background-size: cover
    width: 50px
    height: 50px
.logo__text
    color: #ffffff
    margin-left: 5px
    font-size: 20px
</style>