<template lang="pug">
.header-zoom
    .header-zoom__text Zoom
    .header-zoom__items
        .header-zoom__item(v-for="item in zoomItems" @click="changeZoom(item.id, item.zoom)") {{ item.text }}
</template>

<script>
export default {
    name: "Header_Zoom",
    data: function(){
        return {
            zoomItems: [
                {
                    id: 0,
                    text: '1d',
                    zoom: 1
                },
                {
                    id: 1,
                    text: '7d',
                    zoom: 7
                },
                {
                    id: 2,
                    text: '1m',
                    zoom: 30
                },
                {
                    id: 3,
                    text: '3m',
                    zoom: 90
                },
                {
                    id: 4,
                    text: '6m',
                    zoom: 180
                },
                {
                    id: 5,
                    text: '1y',
                    zoom: 360
                },
            ],
            currentZoom: null
        }
    },
    methods: {
        changeZoom: function(id, zoom){
            let list = document.getElementsByClassName('header-zoom__items')[0];
            list.childNodes.forEach(function (item) {
                item.classList.remove("header-zoom__item_active");
            });
            let el = list.childNodes[id];
            el.classList.add('header-zoom__item_active');
            this.currentZoom = zoom;
        }
    },
    mounted(){
        let lastItem = this.zoomItems.length - 1;
        this.changeZoom(this.zoomItems[lastItem].id, this.zoomItems[lastItem].zoom)
    }
}
</script>

<style lang="sass" scoped>

.header-zoom
    display: flex
    align-items: center
    justify-content: flex-end
    width: 290px
    color: #4a5375

.header-zoom__text
    font-size: 12px
    padding: 5px 10px

.header-zoom__items
    display: flex
    align-items: center
    font-size: 14px

.header-zoom__item
    background: #17213A
    margin: 0 5px
    width: 30px
    height: 23px
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer
    transition: .5s all
    &:last-child
        margin-right: 0

.header-zoom__item_active
    background: #374867
    color: #b1b5c4

</style>