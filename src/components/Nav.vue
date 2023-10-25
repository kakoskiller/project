<template>
    <div class="conteainer">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/chat">Chat</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="test">subloading the data</a>
            </li>

        </ul>
    </div>

    <!-- <div class="conteainer" >
        <nav>
            <router-link to="/" >Home page</router-link>
            <router-link to="/chat">Chat</router-link>
            <router-link to="test">subloading the data API</router-link>
        </nav>
    </div> -->
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
    name: 'NavComp',
}
</script>

<style scoped>
.conteainer {
    background-color: #29477F;
    border: 5px solid #052A6E;
    height: 70px;
    display: flex;
    justify-content: center;
    border-radius: 20px;
}

nav {
    width: 500px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
}
</style>