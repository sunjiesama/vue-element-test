<template>
  <div class="time">
    <el-calendar class="time">
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template slot="dateCell" slot-scope="{ date, data }">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{
            data.day
              .split("-")
              .slice(1)
              .join("-")
          }}
          {{ data.isSelected ? "✔️" : "" }}
        </p>
      </template>
    </el-calendar>
  </div>
</template>

<style lang="less">
.el-calendar-table .el-calendar-day {
  height: 64px;
}
.time {
  height: 100%;
  width: 70%;
}
.is-selected {
  color: #1989fa;
}
</style>
