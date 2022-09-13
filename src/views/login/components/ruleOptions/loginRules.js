export const loginRules = {
  username: [
    {
      required: true,
      message: "请输入账号",
      trigger: "blur",
    },
    {
      min: 5,
      max: 10,
      message: "请输入长度为5~10的账号长度",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
    {
      min: 4,
      max: 10,
      trigger: "blur",
      message: "请输入4到10长度的密码",
    },
  ],
};
