({
    appDir: ".",
    baseUrl: ".",
    dir: "../scripts-build",
    optimize: "uglify",
    closure: {
        CompilerOptions: {},
        CompilationLevel: 'SIMPLE_OPTIMIZATIONS',
        loggingLevel: 'INFO'
    },
    modules: [
        {
            name: "main"
        }
    ]
})
