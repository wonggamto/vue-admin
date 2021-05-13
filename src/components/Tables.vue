<template>
    <div>
        <!--        面包屑-->
        <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">门店列表</a></el-breadcrumb-item>
        </el-breadcrumb>
        <!--        卡片-->
        <el-card>
            <!--            搜索与添加-->
            <el-row :gutter="8">
                <el-col :span="10">
                    <el-input placeholder="请输入内容">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary">按钮</el-button>
                </el-col>
            </el-row>
            <!--            店铺列表-->
            <el-table
                    :data="ShopList"
                    stripe
                    style="width: 100%"
                    height="800"
                    @row-dblclick="handleRowClick">
                <el-table-column type="index"></el-table-column>
                <el-table-column
                        prop="ID"
                        label="ID"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="ShopID"
                        label="ShopID"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="CustomerID"
                        label="CustomerID">
                </el-table-column>
                <el-table-column
                        prop="ShopName"
                        label="ShopName"
                        width="180">
                </el-table-column>
                <el-table-column
                        label="操作"
                        width="180"
                        fixed="right">
                    <template>
                        <!--                        修改-->
                        <el-tooltip effect="dark" content="修改"
                                    placement="top"
                                    :enterable="false">
                            <el-button size="small" type="primary"
                                       icon="el-icon-edit"
                            ></el-button>
                        </el-tooltip>
                        <!--                        删除-->
                        <el-tooltip effect="dark" content="删除"
                                    placement="top"
                                    :enterable="false">
                            <el-button size="small" type="danger" icon="el-icon-delete"></el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>


            </el-table>

            <!--                店铺详情对话框-->
            <el-dialog title="店铺详情" :visible.sync="handleDialog">
                <el-form :model="shop">
                    <el-form-item label="ID" :label-width="formLabelWidth">
                        <el-input v-model="shop.ID" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="ShopID" :label-width="formLabelWidth">
                        <el-input v-model="shop.ShopID" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="CustomerID" :label-width="formLabelWidth">
                        <el-input v-model="shop.CustomerID" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="ShopName" :label-width="formLabelWidth">
                        <el-input v-model="shop.ShopName" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
            <!--            分页-->
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="queryInfo.pagenum"
                    background
                    :page-sizes="[5, 30, 45]"
                    :page-size="queryInfo.pagesize"
                    layout="sizes, prev, pager, next"
                    :total="total">>
            </el-pagination>
        </el-card>
        <!--        {{this.ShopList}}-->
    </div>

</template>
<script>
import axios from "axios"

export default {
    name: 'Tables',
    data() {
        return {
            queryInfo: {
                query: '',
                // 当前页数
                pagenum: 1,
                //每页显示的数据条数
                pagesize: 2
            },
            form: {
                name: 'xxx',
                region: 'xxx',
                date1: 'xxx',
                date2: 'xxx',
                delivery: false,
                type: [],
                resource: 'xxx',
                desc: 'xxx',
                formLabelWidth: 200
            },
            shop:{
                ID: '',
                ShopID: '',
                CustomerID: '',
                ShopName: '',
            },
            ID: '',
            ShopID: '',
            CustomerID: '',
            ShopName: '',
            ShopList: [],
            total: 0,
            dialogFormVisible: false,
            dialogTableVisible: false,
            handleDialog: false,
            formLabelWidth: '120px'
        }
    },
    mounted() {
        this.getAllShops()
        // console.log(this.shop.ID)
    },
    methods: {
        handleRowClick(row) {
            this.handleDialog = !this.handleDialog
            this.shop.ID = row.ID
            this.shop.ShopID = row.ShopID
            this.shop.CustomerID = row.CustomerID
            this.shop.ShopName = row.ShopName
            console.log(row.ID)
        },
        handleCurrentChange(newPage) {//监听页码值改变的事件
            console.log(newPage)
            this.queryInfo.pagenum = newPage
            this.getAllShops()
        },
        handleSizeChange(newSize) {//监听pagesize改变的事件
            // console.log(newSize)
            this.queryInfo.pagesize = newSize
            this.getAllShops()

        },
        getAllShops() {
            axios.post('/api/agentsystem/PostGetSysShopList?apptype=0')
                    .then(response => {
                        // console.log('所有门店信息')
                        // console.log(response.data.Data)
                        this.ShopList = response.data.Data
                        // console.log(this.total)
                    })
                    .catch(error => console.log(error))

        }
    }

}
</script>
<style lang="scss" scoped>

</style>