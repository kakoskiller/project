<template>
    <div v-if="username">
        <div class="chat">
            <h2>Chat</h2>


            <div class="text" v-for="message in messages" :key="message.id">
                {{ message.user }}: {{ message.text }}
            </div>


            <div v-show="emptyMsg" class="empty">There are no current messages</div>
        </div>
        <div class="enter input-group mb-3">
            <input v-model="newmessage" type="text" class="form-control" placeholder="Enter a message"
                aria-label="Recipient's username" aria-describedby="button-addon2">
            <button @click="sendMsg" class="btn btn-outline-secondary" type="button" id="button-addon2">Send</button>
            <button v-show="deleteBtn" @click="delMsg" class="btn btn-outline-secondary" type="button" id="button-addon2">Clear the chat</button>
        </div>


        <!-- <input v-model="newmessage" placeholder="Enter a message"> -->

        <!-- <button @click="sendMsg">Send</button>
        <button v-show="deleteBtn" @click="delMsg">Clear the chat</button> -->
    </div>

    <div v-else class="allert">
        <h2>To log in, go to <router-link :to="{ name: 'Home' }"> link</router-link></h2>
    </div>
</template>

<script>
export default {
    name: "ChatPage",

    data() {
        return {
            messages: [],
            newmessage: '',
            deleteBtn: false,
            emptyMsg: true,
            username: localStorage.getItem("username")
        }
    },

    computed() {
        localStorage.setItem("username", this.$route.query.username);
    },

    methods: {
        delMsg() {
            this.messages = [];
            this.emptyMsg = true;
            alert("все сообщения удолены")
        },

        sendMsg() {
            if (!this.username) {
                this.username = 'Anonymous';
            }

            if (this.newmessage !== '') {
                this.emptyMsg = false;
                this.messages.push({ id: new Date(), text: this.newmessage, user: this.username });
                this.newMessage = '';
                this.deleteBtn = true;
            }
        }
    }
}
</script>


<style scoped>

.enter{
    padding: 10px;
    background-color: #29477F;
    border: 5px solid #04356c;
    color: #2e50ca;
    border-radius: 20px;
}
h2 {
    color: #FF8B00;
}

.text {
    margin-bottom: 20px;
}

.chat {
    background-color: #29477F;
    width: 500px;
    height: 800px;
    border: 5px solid #04356c;
    color: #2e50ca;
    font-size: 18px;
    font-weight: bold;
    margin: 20px;
    padding: 15px;
    border-radius: 20px;
}

.empty {
    margin-bottom: 25px;
    font-style: italic;
}

input {
    margin-right: 10px;
}

.allert {
    padding:20%; 
    margin: 0 auto;
    display: block;
    text-align: center;
}

button {
    margin-left: 5px;
    margin-left: 25px;
}
</style>