<template>
    <div class="content__inner">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
import { generateRoute } from '../../constants/config'
import UserIndex from '@/pages/User/index'
import Dashboard from '@/pages/Dashboard/index'
import Index from '@/pages/Index'

export default {
    name: 'Dashboard',
    data() {
        return {
            msg: '首页 Page',
        }
    },
    components: {
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            var comlist = [
                { com: Index, isMain: true },
                { com: Dashboard, alias: '' },
                { com: UserIndex }
            ];
            var vlu = generateRoute(comlist);
            this.msg = vlu;
            console.log(vlu)
        }
    }
}
</script>

<style scoped>

</style>
