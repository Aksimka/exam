<template lang="pug">
.btn
    i.btn__icon(v-if="iconFlag" :class="icon")
    .btn__text {{ text }}
</template>

<script>
export default {
    name: "Button",
    props: {
        icon: {
            type: String
        },
        text: {
            type: String
        }
    },
    data: function(){
        return {
            iconFlag: false
        }
    },
    created: ()=>{
        if(this.icon){
            this.iconFlag = true
        }
    }
}
</script>

<style lang="sass" scoped>

.btn
    background: #374458
    display: flex
    align-items: center
    justify-content: center
    width: 100px
    height: 30px
    cursor: pointer
    color: #7d9099
    transition: .3s
    &:hover
        background: #2d394b

</style>