<template>
  <div class="app-container">
    <div class="app-content">

      <div class="app-image">产业大脑项目</div>
      <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
        <el-form-item label="用户账号" prop="username">
          <el-input v-model="ruleForm.username" type="username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-input v-model.password="ruleForm.password" type="password" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="ruleForm.code" />
        </el-form-item>
        <el-form-item v-model="ruleForm.remember">
          <el-checkbox>记住密码</el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
          <el-button @click="resetForm(ruleFormRef)">没有注册？，去注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import {toRefs,ref,getCurrentInstance} from 'vue';
import {reactive} from "vue";

const {proxy} = getCurrentInstance();
const ruleFormRef = ref();
const data = reactive({
  ruleForm:{},
  rules:{
    username: [{ required: true, trigger: "blur", message: "请输入您的账号" }],
    password: [{ required: true, trigger: "blur", message: "请输入您的密码" }],
  }
});

function submitForm(form){
  proxy.$refs.form.validate(valid=>{
    if(valid){
      if(ruleForm.remember){
        Cookies.set('username',ruleForm.username,{exprise:30})
        Cookies.set('password',ruleForm.password,{exprise:30})
      }
    }
  })
}
function resetForm(){

}
const {ruleForm,rules} = toRefs(data);

</script>

<style lang="scss" scoped>
  .app-container{
    width: 100%;
    height: 100%;
    .app-content{
      position: relative;
      width: 30%;
      height: 200px;
      margin: 0 auto;
      padding-top:100px;
      .app-image{
        position: absolute;
        top: 42px;
        left: 230px;
        font-weight: 700;
        color: blue;
      }
    }
  }

</style>