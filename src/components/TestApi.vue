<template>
    <div class="conteainer">
        <div class="title">Teams</div>

        <div v-if="isLoad" class="loading">Loading data...</div>
        <div v-else class="data">
            <div v-for="(el, i ) in teamData" :key="el.city">
                {{ i + 1 }}. {{ el.first_name }} {{ el.last_name }}
                <img src="https://www.pinclipart.com/picdir/big/159-1597907_delete-garbage-remove-trash-trash-can-icon-delete.png"
                    alt="delete" style="width: 15px;
                height:15px ;" @click="removeTeam(el.id)">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TestApi",

    data() {
        return {
            teamData: [],
            isLoad: true
        }
    },
    methods: {
        removeTeam(id) {
            this.teamData = this.teamData.filter((el) => el.id !== id);
        }
    },

    mounted() {
        const url = 'https://free-nba.p.rapidapi.com/players?page=0&per_page=25';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c470eebe63msh79641ab51a60492p19fc51jsn09fbd7d8cae2',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            },
        };

        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                this.teamData = res.data;
                if (this.teamData !== ' ')
                    this.isLoad = false;
            })
    }
}
</script>

<style scoped>
.conteainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title {
    font-size: 2em;
    color: #FF8B00;
    margin: 10px;
    font-weight: bold;
}

.data {
    width: auto;
    background-color:#29477F;
    border: 5px solid #04356c;
    border-radius: 20px;
    padding: 20px;
    Word-spacing: 5px
}

.loading {
    padding-bottom: 20px;
}

.img {
    cursor: pointer;
    margin-left: 10px;
}
</style>