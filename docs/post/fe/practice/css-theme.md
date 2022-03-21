# CSS主题替换

### css主题替换原理

CSS3变量特性

```css
:root {
    --local-color-value: red;
    --local-bg-color: red;
}
html {
    color: var(--local-color-value);
    background-color: var(--local-bg-color);
}

```

替换主题

```js
const themes = {
    dark: {
        'local-color-value': 'green',
        'local-bg-color': 'green'
    },
    light: {
        'local-color-value': "purple",
        'local-bg-color': 'purple'
    }
}

function changeTheme(theme){
    const styleConfig = themes[theme];
    Object.entries(styleConfig).forEach(([key,value])=>{
        document.body.style.setProperty(`--${key}`,value);
    })
}
```
