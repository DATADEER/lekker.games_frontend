<script>

import _ from "lodash";

    export default {
        name: "utils",
        methods: {
            convertMinutesToHours(minutes) {
                if (minutes > 60) {
                    return minutes / 60
                } else {
                    return minutes;
                }
            },
            determineTimeUnitByValue(minutes) {
                if (minutes <= 60) {
                    return "minutes";
                } else {
                    return "hours";
                }
            },
            removeElementFromArray(array, element) {
                const copyOfArray = [...array];
                const index = copyOfArray.indexOf(element);

                if (index !== -1) {
                    copyOfArray.splice(index, 1);
                }
                return copyOfArray;
            },
            convertStringToHash(stringToBeHashed){

                if(_.isArray(stringToBeHashed)){
                    stringToBeHashed = JSON.stringify(stringToBeHashed[0]);
                }

                let hash = 0, i, chr;
                if (stringToBeHashed.length === 0) return hash;
                for (i = 0; i < stringToBeHashed.length; i++) {
                    chr   = stringToBeHashed.charCodeAt(i);
                    hash  = ((hash << 5) - hash) + chr;
                    hash |= 0; // Convert to 32bit integer
                }
                return hash;

            },
            convertSteamImageHashToUrl(appid, imageHash){
                return `http://media.steampowered.com/steamcommunity/public/images/apps/${appid}/${imageHash}.jpg`;
            },
            getRandomIndex(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
        }
    }

</script>

<style scoped>

</style>