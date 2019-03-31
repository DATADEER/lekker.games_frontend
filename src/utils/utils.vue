<script>
    export default {
        name: "utils",
        data() {
            return {}
        },
        methods: {
            randomizeArrayOrder(array){
                let currentIndex = array.length, temporaryValue, randomIndex;

                // While there remain elements to shuffle...
                while (0 !== currentIndex) {

                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    // And swap it with the current element.
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }

                return array;
            },
            setNewMessage(component, message){

                this.messageCounter++;
                this.currentMessageComponent = component;
                this.currentMessageText = message;

            },
            resetMessage(){
                this.currentMessageComponent = false;
                this.currentMessageText = false;
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
            createIDBasedOnMessageCounter(baseString, messageCounter){

                if(_.isArray(stringToBeHashed)){
                    baseString = JSON.stringify(stringToBeHashed[0]);
                }
                const stringToBeHashed  = baseString + messageCounter.toString();
                return this.convertStringToHash(stringToBeHashed)
            },
        }
    }
</script>
