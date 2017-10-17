<template>
    <div class="sider">
        <div class="logo">
            <img :src="logoUrl"
                alt="logo">
            <span>{{appName}}</span>
        </div>

        <Menu theme="light"
            width="auto"
            active-name="/index">

            <template v-for="menu in menus">
                <MenuItem :name="menu.key"
                    v-if="!menu.children">
                <Icon type="ios-paper"></Icon>
                 {{menu.title}}
                </MenuItem>
                <!--has submenu-->
                <Submenu :name="menu.key" v-else >
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        {{menu.title}}
    
                    </template>

                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>

            </template>
        </Menu>
    </div>
</template>

<script>
import config, { menus } from '../../constants/config'

export default {
    data() {
        return {
            logoUrl: config.logoUrl,
            appName: config.appName,
            menus,
        }
    },
    created() {

    }
}
</script>

<style lang="scss" scoped>
.sider {
    width: 224px;
    background: #fff;
    position: absolute;
    overflow: visible;
    height: 100vh;
    transition: all .3s ease-out;
    box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.01);
    z-index: 520;
    color: #999;
    &:after {
        content: '';
        display: block;
        width: 1px;
        height: 100%;
        background: #d7dde4;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
    }
}

.logo {
    text-align: center;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    margin: 28px 0;
    transition: all 0.3s ease-out;
    overflow: hidden;
    img {
        width: 40px;
        margin-right: 8px;
        transition: all 0.3s ease-out;
    }
    span {
        vertical-align: text-bottom;
        font-size: 16px;
        line-height: 40px;
        text-transform: uppercase;
        display: inline-block;
    }
}
</style>



