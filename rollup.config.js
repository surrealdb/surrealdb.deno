import { defineConfig } from "rollup";
import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'
import { readFileSync } from "fs";

const targets = {
    deno: ['esm'],
    node: ['cjs', 'esm'],
    browser: ['esm']
}

const configs = defineConfig(Object.keys(targets).flatMap(target => targets[target].map(format => defineConfig({
    input: './src/mod.ts',
    output: {
        file: `./dist/${target}.${format}.js`,
        format: format
    },
    plugins: [
        {
            name: 'dep-resolver',
            load(id) {
                if(id.endsWith('src/deps/deps.ts')||id.endsWith('src\\deps\\deps.ts')) {
                    return readFileSync(`./src/deps/deps.${target}.ts`, 'utf-8')
                }
            }
        },
        esbuild({
            target: target === 'browser' ? 'es2017' : 'esNext',
            minify: target === 'browser'
        })
    ],
    external: [
        'ws'
    ]
}))))

configs.push({
    input: './tmp-dts/mod.d.ts',
    output: {
        file: './dist/types.d.ts',
        format: 'es'
    },
    plugins: [dts()]
})

export default configs