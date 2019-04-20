<template lang="pug">
.info
    .info__name {{ name }}
    .info__main
        .info__createDate Дата создания: {{ info.data }}
        .info__createTime Время: {{ info.time }}
        .info__dataCount Колличество записей: {{ info.count }}
        .info__reminders Напоминаний: {{ info.reminders }}
    .info__footer
        Button(:text="btn.text")

</template>

<script>
import Button from "../../../../Global/Button";
export default {
    name: "Diagram",
    components: {Button},
    data: function(){
        return {
            name: 'База',
            info: {
                data: '30.09.2018',
                time: '18:37',
                count: 3,
                reminders: 1
            },
            btn: {
                icon: '',
                text: "Print"
            }
        }
    },
    created: ()=>{
        let count = null;
        let inc = 100;
        for(let i = 0; i < 48; i++){
            count+=inc;
            inc = inc + 100;
        }
        console.log(count);
    }

}
</script>

<style lang="sass" scoped>

.info
    padding: 20px 23px
    border: 1px solid #3d4a65
    color: #4d5e80

.info__name
    font-weight: bolder
    font-size: 18px

.info__main
    margin-top: 30px
    div
        margin: 15px 0

.info__footer
    margin-top: 40px

.info__print


</style>