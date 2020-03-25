<template>
  <div class="login-container">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <FormItem prop="user">
        <Input v-model="formInline.user" type="text" placeholder="Username" />
        <Icon slot="prepend" type="ios-person-outline" />
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input v-model="formInline.password" type="password" placeholder="Password" />
        <Icon slot="prepend" type="ios-lock-outline" />
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$store.dispatch('user/login', this.formInline)
            .then(() => {
              this.$Message.success('登录成功!');
              this.$router.push({ path: '/' });
            })
            .catch((err) => {
              console.log(err);
              this.$Message.error('登录处理失败!');
            });
        } else {
          this.$Message.error('登录失败!');
        }
      });
    }
  }
};
</script>
