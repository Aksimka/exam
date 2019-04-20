<template>
    <div id="app">
        <div class="make-request-form">
            <h2 class="make-request-form__title">Заявка на обмен</h2>
            <div class="form-input">
                <label for="rooms" class="form-input__text">Колличество комнат:</label>
                <input id="rooms" type="text" class="form-input__main" name="rooms" v-model="rooms">
            </div>
            <div class="form-input">
                <label for="stage" class="form-input__text">Этаж:</label>
                <input id="stage" type="text" class="form-input__main" name="stage" v-model="stage">
            </div>
            <div class="form-input">
                <label for="size" class="form-input__text">Размер квартиры:</label>
                <input id="size" type="text" class="form-input__main" name="size" v-model="size">
            </div>
            <div class="form-input">
                <label for="userName" class="form-input__text">Ваше имя:</label>
                <input id="userName" type="text" class="form-input__main" name="userName" v-model="userName">
            </div>
            <div class="form-input">
                <label for="userMail" class="form-input__text">Ваша почта:</label>
                <input id="userMail" type="text" class="form-input__main" name="userEmail" v-model="userMail">
            </div>
            <div class="form-input">
                <label for="userTel" class="form-input__text">Ваш телефон:</label>
                <input id="userTel" type="text" class="form-input__main" name="userTel" v-model="userTel">
            </div>
            <button class="form-input__btn" @click="makeRequest">Подать заявку</button>
            <p>{{response}}</p>
        </div>
        <div class="request-output">
            <h2 class="request-output__title">Найти заявки</h2>
            <div class="form-input">
                <label for="findRequests" class="form-input__text">Тип недвижимости</label>
                <!--<input id="findRequests" type="text" class="form-input__main" name="userTel">-->
                <select class="form-input-select" id="findRequests">
                    <option selected value="1r">1-комнатная</option>
                    <option value="2r">2-комнатная</option>
                    <option value="3r">3-коинатнаяа</option>
                    <option value="studio">Студия</option>
                    <option value="house">Дом</option>
                </select>
                <button class="form-input__btn">Найти</button>
            </div>
        </div>
    </div>


</template>

<script>
import axios from 'axios';
    export default {
        name: 'app',

        data () {
            return {
                rooms: '',
                stage: '',
                size: '',
                userName: '',
                userMail: '',
                userTel: '',
                response: ''
            }
        },
        methods: {
            makeRequest(){
                axios({
                    method: 'post',
                    url: 'http://localhost:3000/app/makeRequest',
                    data: {
                        rooms: Number(this.rooms),
                        stage: Number(this.stage),
                        size: Number(this.size),
                        userName: this.userName,
                        userMail: this.userMail,
                        userTel: this.userTel
                    }
                }).then((res)=>{
                    console.log(res);
                })
                .catch(err=> this.response = err);
                // axios.post('http://localhost:3000/app/makeRequest', {
                //     rooms: Number(this.rooms),
                //     stage: Number(this.stage),
                //     size: Number(this.size),
                //     userName: this.userName,
                //     userMail: this.userMail,
                //     userTel: this.userTel
                // })
                // .then((res)=>{
                //     this.response = res;
                // })
            }
        }
    }
</script>

<style lang="sass">
    *
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        box-sizing: border-box
        margin: 0
        padding: 0
    h2
        font-size: 24px
        color: #515151
        font-weight: bolder
    #app
        font-family: 'Roboto', sans-serif
        -webkit-font-smoothing: antialiased
        -moz-osx-font-smoothing: grayscale
        display: flex
        justify-content: space-around
        color: #252b40

    .container
        width: 1200px
        margin: 0 auto

    .make-request-form
        margin: 40px 0 0 40px
        width: 45%

    .make-request-form__title
        margin-bottom: 30px
    .form-input
        display: flex
        flex-direction: column
        width: 50%
    .form-input__text
        margin-top: 10px
    .form-input__main
        margin-top: 5px
        display: flex
        flex-direction: column
        width: 80%
        padding: 5px 10px
        font-size: 16px
        color: #404040
        border: 1px solid #838383
        -webkit-border-radius: 5px
        -moz-border-radius: 5px
        border-radius: 5px
        &:focus
            outline: none
    .form-input-select
        padding: 5px 10px
        font-size: 16px
        color: #404040
        border: 1px solid #838383
        -webkit-border-radius: 5px
        -moz-border-radius: 5px
        border-radius: 5px
        &:focus
            outline: none
    .form-input__btn
        padding: 10px 20px
        border: 0
        background: #9bff59
        font-size: 18px
        color: #ffffff
        -webkit-border-radius: 5px
        -moz-border-radius: 5px
        border-radius: 5px
        margin-top: 20px
        cursor: pointer
        &:focus
            outline: none

    .request-output
        width: 45%
        margin: 40px 40px 0 0
    .request-output__title
        margin-bottom: 30px



</style>
