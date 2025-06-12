module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 自定义规则
    'type-enum': [
      2, // 错误级别：0=禁用，1=警告，2=错误
      'always', // 应用时机：always/never
      [
        'feat', // 新功能
        'fix', // 修复 bug
        'docs', // 文档更新
        'style', // 格式调整（不影响功能）
        'refactor', // 重构
        'test', // 添加/修改测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回滚
        'perf', // 性能优化
        'ci', // CI 配置变更
      ],
    ],
    'type-case': [2, 'always', 'lower-case'], // 类型必须小写
    'type-empty': [2, 'never'], // 类型不能为空
    'subject-full-stop': [0, 'never'], // 主题结尾不允许有句号
    'subject-case': [0, 'never'], // 主题不强制大小写
    'header-max-length': [2, 'always', 72], // 标题最大长度
  },
};
