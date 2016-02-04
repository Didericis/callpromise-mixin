Package.describe({
    name: 'didericis:callpromise-mixin',
    version: '0.0.1',
    summary: 'A mixin for the mdg:validated-method package that adds a callPromise method',
    git: 'https://github.com/didericis/callpromise-mixin.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use(['ecmascript']);
    api.addFiles('callpromise-mixin.js');
    api.export('CallPromiseMixin');
});