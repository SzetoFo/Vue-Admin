<template>
    <Breadcrumb class="breadcrumb">
    <Breadcrumb-item 
    v-for="(item,index) in list"
    :href="item.path"
    :key="item.name"
    >
    {{item.meta.title}}
    </Breadcrumb-item>
    </Breadcrumb>
</template>

<script>
export default {
    data() {
        return {
            list: []
        }
    },
    created() {
        this.updateBreadcrumbs();
    },
    methods: {
        updateBreadcrumbs() {

            
        }
    }
}
</script>

<style scope>
.breadcrumb {
    height: 64px;
    line-height: 64px;
    padding: 0 24px;
    margin-bottom: -24px;
}
</style>
