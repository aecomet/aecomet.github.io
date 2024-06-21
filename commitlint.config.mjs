export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
			2, // Error
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test',
        'config'
			],
		],
  }
};
