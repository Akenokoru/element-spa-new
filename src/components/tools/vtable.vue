/* eslint-disable vue/no-use-v-if-with-v-for */
<template>
  <div class="table-container">
    <el-table
      :data="paginationData"
      :border="border"
      :stripe="stripe"
      style="width: 100%"
      v-loading="loading"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="selection"
        type="selection"
        width="55"
        align="center"
      >
      </el-table-column>
      <el-table-column
        v-for="(column, index) in columns"
        :prop="column.key"
        :label="column.label"
        :width="column.width"
        :sortable="column.sortable"
        :key="index"
        :align="column.align || 'center'"
      >
        <template slot-scope="scope">
          <img v-if="column.type === 'image'" :src="scope.row[column.key]" :alt="scope.row[column.key]">
          <div class="action-con" v-else-if="column.type === 'action'">
            <template v-for="button in column.buttonInfos">
              <el-button
              v-if="column.selectButton ? scope.row.btnList.some((item) => {return item === button.name}) : true"
              :key="button.name"
              size="mini"
              :type="button.color"
              :class="[column.multiActions ? 'multi-actions' : '']"
              @click="handleButtonClick(button.name, scope.row)">{{ button.label }}</el-button>
            </template>
          </div>
          <span v-else-if="column.type === 'html'" v-html="scope.row[column.key]"></span>
          <span v-else>{{ scope.row[column.key] | filter(column.filter, column.filterProps) }}</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :current-page="currentPage"
        layout="total, prev, pager, next, sizes"
        :page-sizes="[10, 20, 50, 100, 500, 1000]"
        :page-size="pageSize"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { ROW_SELECT } from '@/store/tableActions'

export default {
  props: {
    isBackPage: {
      type: Boolean,
      required: false,
      default: false
    },

    totalCount: {
      type: Number,
      required: false,
      default: 0
    },

    selection: {
      type: Boolean,
      required: false,
      default: false
    },

    data: {
      type: Array,
      required: true,
      default: () => ([])
    },

    columns: {
      type: Array,
      required: true,
      default: () => ([])
    },

    border: {
      type: Boolean,
      required: false,
      default: true
    },

    stripe: {
      type: Boolean,
      required: false,
      default: true
    },

    defaultPageSize: {
      type: Number,
      required: false,
      default: 10
    },

    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      currentPage: 1,
      pageSize: this.defaultPageSize,
    }
  },

  computed: {
    paginationData() {
      let tempData = []
      if (this.isBackPage) {
        tempData = this.data
      } else {
        let pageTotal = this.data.length,
          pageFirstCount = this.pageSize * (this.currentPage - 1),
          maxCount = pageTotal - pageFirstCount < this.pageSize ? pageTotal : (pageFirstCount + this.pageSize)

        for (let i = pageFirstCount; i < maxCount; i++) {
          tempData.push(this.data[i])
        }
      }
      return tempData
    },

    total: function () {
      return this.isBackPage ? this.totalCount : this.data.length
    }
  },

  methods: {
    ...mapActions([ROW_SELECT]),

    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      if (this.isBackPage) {
        this.$emit('handleCurrentChange', currentPage)
      }
    },

    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      if (this.isBackPage) {
        this.$emit('handleSizeChange', pageSize)
      }
    },

    handleButtonClick(button, row) {
      this.$emit('buttonClick', {
        button: button,
        data: Object.assign({}, row)
      })
    },

    handleSelectionChange(val) {
      this.rowSelections = val
      this.ROW_SELECT(val) // save row info in an Array into vuex.state called `rowAction`
      this.$emit('selected')
    }
  }
}
</script>

<style lang="less">
.table-container{
  .pagination{
    padding: 20px 0 0;
    text-align: right;
  }
  .action-con{
    text-align: center;
  }
  .multi-actions{
    margin: 0 0 5px 0;
  }
}
</style>
