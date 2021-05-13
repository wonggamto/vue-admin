<template>
    <el-container class="home_container">
        <!--    头部-->
        <el-header>
            <div>
                <!--                <img src="@/assets/logo.png" alt="">-->
                <span>后台管理系统</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <!--    主体-->
        <el-container>
            <!--      侧边栏-->
            <el-aside :width="collaspe ? '64px':'200px'">
                <div class="toggle-button" @click="toggleCollpase">
                    |||
                </div>
                <el-menu :collapse="collaspe"
                         background-color="#333743"
                         text-color="#fff"
                         active-text-color="#ffd04b"
                         :collapse-transition="false"
                         router>
                    <el-menu-item class="index" index="/home">
                        首页
                    </el-menu-item>
                </el-menu>
                <!--                侧边栏菜单-->
                <el-menu
                        :collapse="collaspe"
                        background-color="#333743"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        default-active="$route.path"
                        :collapse-transition="false"
                        router>
                    <!--                    一级菜单-->
                    <el-submenu index="1">

                        <!--                        一级菜单模板-->
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>门店信息</span>
                        </template>
                        <!--                        二级菜单-->
                        <el-menu-item index="/table" >
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>门店列表</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <!--      内容-->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import axios from "axios"

export default {
    data() {
        return {
            collaspe: false
        }
    },
    methods: {
        // saveNavState(activePath){
        //     //页面刷新时保持路由高亮状态
        // },
        toggleCollpase() {
            // 侧边栏展开折叠功能
            this.collaspe = !this.collaspe
        },
        logout() {
            window.sessionStorage.clear()
            this.$router.push('/login')
        },
        getRoomList() {
            axios.post('/api/agentsystem/PostGetSysShopList?apptype=0')
                    .then(response => {
                        console.log('所有门店信息')
                        console.log(response)
                    })
                    .catch(error => console.log(error))
        },
        getSingleShopInfo() {
            axios.post('/api/agentsystem/PostGetSysShopByID?id=3695d227-98f1-47b0-a07a-8adbec951e0a')
                    .then(response => {
                        console.log('单个门店信息')
                        console.log(response.data)
                    })
        },
        updateShopInfo() {
            axios.post('/api/agentsystem/PostEditSysSh')
                    .then(response => {console.log(response)})
        }
    },
    mounted() {
        // this.getRoomList()
        // this.getSingleShopInfo()
        // this.updateShopInfo()
    },

}
</script>
<style lang="scss" scoped>
.el-header {
    background: #373d41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 20px;

    > div {
        display: flex;
        align-items: center;

        span {
            margin-left: 15px;
        }
    }
}

.el-aside {
    background: #333744;

    .el-menu {
        border-right: none;
    }
}

.el-main {
    background: #eaedf1;
}

.home_container {
    height: 100%;
}

.toggle-button {
    background: #4a5064;
    font-size: 10px;
    color: #fff;
    line-height: 24px;
    text-align: center;
    letter-spacing: .2em;
    cursor: pointer;
}
.index{
    text-align: center;
}
</style>