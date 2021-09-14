# example
An example test `HtmlWebpackPlugin.template` render webpack template string `[name].html`

```js
  new HtmlWebpackPlugin({
    template: process.env.SKIP_TEMPLATE_TEMPLATE
      ? "first.html"
      : "[name].html",
    filename: "[name].html",
  }),
```

# compare
```sh
$ pnpm run test:skip && \
  ls dist/skip-template-template/{first,second}Entry.html && \
  echo 🎉 Test OK
```

`HtmlWebpackPlugin.filename` render webpack template string `[name].html` correctly.

```txt
🎉 Test OK
```

# test
``` sh
$ pnpm run test && \
  ls dist/template-template/{first,second}Entry.html && \
  echo 🎉 Test OK
```

`HtmlWebpackPlugin.template` render webpack template string `[name].html` with Error.

```txt
ERROR in   Error: Child compilation failed: 
  Module not found: Error: Can't resolve 'path/to/reproduce-example/[name].html' in 'path/to/reproduce-example'             
  ModuleNotFoundError: Module not found: Error: Can't resolve 'path/to/reproduce-example/[name].html' in 'path/to/reproduce-example'
```

Plus, ~60 lines of error is written into output.

```html
<head><script defer src="firstEntry.js"></script><script defer src="secondEntry.js"></script></head>Html Webpack Plugin:
<pre>
  Error: Child compilation failed:
  ....
</pre>
```
