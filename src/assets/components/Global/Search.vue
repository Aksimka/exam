<template lang="pug">
.search
    i.fa.fa-search(aria-hidden="true")
    input.search__input(placeholder="Type in to Search...")

</template>

<script>
export default {
    name: "Search"
}
</script>

<style lang="sass" scoped>

.search
    display: flex
    justify-content: flex-start
    align-items: center
    margin: 0 5px
    i
        color: #535c74
        font-size: 16px
        transition: .2s color
    &:hover
        i
            color: #707e9c




.search__input
    font-family: 'Roboto', sans-serif
    border: 0
    font-size: 11px
    background: inherit
    color: #5D6A86
    padding: 5px 8px
    position: relative
    font-weight: bolder
    &:focus
        outline: none
::-webkit-input-placeholder
    color: #5D6A86
    opacity: 1
::-moz-placeholder
    color: #5D6A86
    opacity: 1


</style>