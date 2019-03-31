<template>
    <section class="list flex flex-row justify-between items-start">

        <img class="absolute pin-b pin-l mt-auto w-24" src="@/assets/img/meme/horse.svg"/>

        <ul class="pl-32">
            <li class="mb-3" v-for="item in message" :key="getQuestionID(item, message)">
                <h4 class="anchor mb-2" @click="currentOpenedQuestionID = toggleAnswer(item, message, currentOpenedQuestionID)" v-html="item.question"></h4>
                <p v-if="isSelectedQuestion(item, message, currentOpenedQuestionID)" v-html="item.answer" ></p>
            </li>
        </ul>

    </section>
</template>

<script>

import _ from "lodash";

    export default {
        name: "list",
        props:["message"],
        data() {
            return {
                currentOpenedQuestionID:false,
            }
        },
        methods: {
            toggleAnswer(item, questionsList, currentOpenedQuestionID){
                const clickedQuestionID = this.getQuestionID(item,questionsList);
                if(_.isNumber(currentOpenedQuestionID) && clickedQuestionID === currentOpenedQuestionID){
                    return false;
                }else {
                    return clickedQuestionID;
                }
            },
            getQuestionID(item, questionsList){
                return questionsList.findIndex((singleQuestion) => { return singleQuestion.question === item.question} );
            },
            isSelectedQuestion(item, questionsList, currentOpenedQuestionID){
                return this.getQuestionID(item, questionsList) === currentOpenedQuestionID;
            }

        }
    }
</script>

<style lang="scss" scoped>


</style>