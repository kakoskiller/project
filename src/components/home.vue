<template>
    <div>
        <div v-if="isAuth">
            <div>Greetings, dear <b>{{ username }}</b></div>

            <div class="centr">
                <button @click="logout" class="btn btn-outline-secondary" type="button" id="button-addon2">Log out</button>
            </div>

            <!-- <button @click="logout">Log out</button> -->
        </div>

        <div v-else>
            <div class="input-group mb-3">
                <input v-model="username" @keyup.p="login" type="text" class="form-control" placeholder="Your name"
                    aria-label="Recipient's username" aria-describedby="button-addon2">
                <button @click="login" class="btn btn-outline-secondary" type="button" id="button-addon2">Login</button>
            </div>


            <!-- <label >Enter your name</label>
            <input v-model="username" @keyup.p="login">
            <button @click="login">Login</button> -->
        </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
    name: "HomePage",
    data() {
        return {
            isAuth: false,
            username: ""
        }
    },

    created() {
        if (localStorage.getItem("isAuth")) {
            this.isAuth = true;
            this.username = localStorage.getItem("username")
        }
    },

    methods: {
        login() {
            if (this.username !== "") {
                this.isAuth = true;

                localStorage.setItem("isAuth", true);
                localStorage.setItem("username", this.username)


                this.$router.push({
                    name: 'Chat',
                    query: { username: this.username }
                })
            }
            else { alert('please enter your name') }
        },

        logout() {
            this.isAuth = false;
            this.username = "";

            localStorage.removeItem("isAuth");
            localStorage.removeItem("username")
        }
    }
}
</script>

<style scoped>
.centr {
    margin: 0 auto;
    display: block;
    text-align: center;
}

div {
    padding: 30px;
    font-size: 22px;
}

label {
    margin: 0 15px;
}

button {
    margin-left: 5px;
}
</style>