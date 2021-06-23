<template>
    <div class="main">
        <div class="databases">
            <span>数据库列表</span>
            <ul>
                <li v-for="item in databases" @click="selectDb">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import redisTool from '../libs/redisTool';

    export default {
        name: 'main',
        data() {
            return {
                databases: []
            }
        },
        async mounted () {
            let self = this;
            let databaseCount = await redisTool.tables();
            for(var i = 0; i < databaseCount; i++) {
                self.databases.push('db' + i);
            }
        },
        methods: {
            async selectDb() {

            }
        }
    }
</script>

<style>
    @import "../assets/css/common.css";

    .databases ul li {
        float: left;
        margin-left: 10px;
        margin-bottom: 10px;
        background-color: deepskyblue;
        width: 80px;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        text-align: center;

    }
</style>