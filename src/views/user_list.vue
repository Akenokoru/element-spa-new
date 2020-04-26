<template>
  <div class="page">
    <search-field title="高级搜索">
      <el-form :inline="true" size="medium">
        <el-row>
          <el-col :span="5">
            <!-- i18n样例 -->
            <el-form-item :label="$t('message.uname')">
              <el-input v-model="search.searchFields.login_name" placeholder="请输入登录名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="状态">
              <el-select size="small" v-model="search.searchFields.status" placeholder="请选择状态">
                <el-option
                  v-for="(item, index) in statusList"
                  :key="index"
                  :label="item"
                  :value="index"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </search-field>
    <div class="page-content">
      <div class="button-field">
        <el-button type="primary" size="small">添加用户</el-button>
      </div>
      <v-table
        :data="tableData"
        :columns="columns"
      ></v-table>
    </div>
  </div>
</template>

<script>
import vTable from '@/components/tools/vtable'
import searchField from '@/components/tools/searchField'

export default {
  data: () => ({
    columns: [{
      label: '日期',
      key: 'date',
      filter: 'formatDate',
      filterProps: ['yyyy/MM/dd hh:mm'],
      sortable: true
    }, {
      label: '姓名',
      key: 'name',
    }, {
      label: '地址',
      key: 'address',
    }, {
      label: '操作',
      type: 'action',
      width: '100',
      buttonInfos: [{
        name: 'detail',
        label: '编辑',
        color: 'success'
      }]
    }],

    tableData: [{
      date: '2016-05-02',
      name: '王小虎',
      address: ''
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }],

    search: {
      searchFields: {
        loginName: '',
        status: ''
      }
    },

    statusList: ['正常', '废弃']
  }),

  components: {
    vTable, searchField
  }
}
</script>
