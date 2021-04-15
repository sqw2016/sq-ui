import SqForm from '../';
import SqFormItem from '../../form-item';
import SqInput from '../../input';
import SqButton from '../../button';

export default {
  title: 'SqForm',
  component: SqForm
}

export const Login = () => ({
  components: { 
    SqForm,
    SqFormItem,
    SqInput,
    SqButton
   },
   template: `
   <sq-form class="form" ref="form" :model="user" :rules="rules">
    <sq-form-item label="用户名" prop="username">
      <sq-input :value="user.username" @input="user.username = $event" palceholder="请输入用户名"></sq-input>
    </sq-form-item>
    <sq-form-item label="密码" prop="password">
      <sq-input type="password" v-model="user.password"></sq-input>
    </sq-form-item>
    <sq-form-item>
      <sq-button type="primary" @click="login">登 录</sq-button>
    </sq-form-item>
  </sq-form>
   `,
   data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      // console.log('button')
      // return false
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})