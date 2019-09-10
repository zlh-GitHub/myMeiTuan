<template>
    <div class="m-hcity">
        <dl>
            <dt>{{data.title}}：</dt>
            <dd v-for="(item, index) in data.list" :key="index" @click="changeCity(item.name)">
                <router-link :to={}>{{item.name}}</router-link>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    data() {
        return{

        }
    },
    props: ["data"],
    methods: {
        changeCity(item) {
            this.$store.dispatch("setCity", {city: item})
        }
    }
}
</script>
<style scoped>

</style>