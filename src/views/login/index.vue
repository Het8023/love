<template>
    <div class="container">
        <div class="box">
            <el-input placeholder="输入名字"></el-input>
            <el-button type="primary">确认</el-button>
        </div>
    </div>
</template>

<script setup></script>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .box {
        width: 300px;
        padding: 20px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 10px;
	  text-align: center;
        .el-button {
            margin: 20px auto 0;
        }
    }
}
</style>
