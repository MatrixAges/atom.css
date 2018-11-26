
<p align="center"><a href="#" target="_blank" rel="noopener noreferrer"><img width="200" src="https://s1.ax1x.com/2018/11/25/Fkb1F1.png" alt="atom.css logo"></a></p>

# <p align="center"> atom.css </p>

_<p align="center">像风一样的男子一样快乐地写代码！只有CSS文件，不需要安装任何东西!</p>_

<p align="center"> atom.css 是一个原子化风格的CSS class集合。 </p>

<p align="center"> 它的灵感来源于有机化学，它让开发者在构建Web应用时更加快速和灵活！ </p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/join-welcome-brightgreen.svg" alt="attitude_img"></a>
  <a href="#"><img src="https://img.shields.io/badge/version-1.0-orange.svg" alt="version_img"></a>
  <a href="#"><img src="https://img.shields.io/badge/uncompres%20size-12k-red.svg" alt="size_img"></a>
  <a href="#"><img src="https://img.shields.io/badge/style-fic%20design-yellow.svg" alt="style_img"></a>
  <a href="#"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
  <a href="#"><img src="https://img.shields.io/badge/update-weekly-lightgrey.svg" alt="Chat"></a>
</p>

## 如何安装

通过npm安装:

```bash
$ npm i @verticalv/atom.css --save
```

## 用法

使用atom.css，只需要将atom.css作为样式表加入到 `<head>`标签当中, 如果需要让DOM元素拥有 `flex` 属性，只需要将`flex` 加入到元素的`class` 中。

```html
<head>
  <link rel="stylesheet" href="atom.min.css">
</head>
```

### 类

使用下面的`class`可以给元素加上各种属性：

| Class Name        |                    |                     |                      |
| ----------------- | ------------------ | ------------------- | -------------------- |
| `border_box`      | `content_box`      | `flex`              | `flex_row`        |
| `flex_row_reverse `           | `flex_column`        | `flex_column_reverse`             | `flex_wrap`               |
| `flex_nowrap`          | `flex_wrap_reverse`            | `justify_center`          | `justify_start`       |
| `justify_end`    | `justify_between`    | `justify_around`        | `justify_evenly`          |
| `justify_initial`   | `align_center`    | `align_start`    | `align_end`        |
| `align_stretch`          | `align_baseline`       | `align_initial`     | `left`         |
| `right`   | `clearfix`      | `margin_center`    | `margin_xcenter`           |
| `margin_ycenter`     | `text_center`          | `text_left`       | `text_right`     |
| `text_justify`     | `text_last_center`   | `text_last_left`      | `text_last_right`    |
| `text_last_justify`       | `absolute`     | `relative`           | `fixed`            |
| `static`        | `sticky`         | `none`      | `block`      |
| `inline`        | `inline_block` | `list_item` | `radius_0 - radius_20`     |
| `w_100` | `h_100`        | `w_100vw` | `h_100vh` |
| `m_0 - m_200` | `mt_0 - mt_200` | `mb_0 - mb_200`             | `ml_0 - ml_200`       |
| `mr_0 - mr_200`          | `p_0 - p_200`          | `pt_0 - pt_200`            | `pb_0 - pb_200`         |
| `pl_0 - pl_200`      | `pr_0 - pr_200`      | `shadow_normal`          | `shadow_medium`            |
| `shadow_high`     | `white`      | `whitesmoke`      | `white_sub`          |
| `black`     | `color_333`      | `color_888`      | `black_sub`          |
| `red`    | `blue`     | `green`     | `bg_white`         |
| `bg_whitesmoke`    | `bg_white_deep`     | `bg_black`     | `bg_333`         |
| `bg_888`    | `font_normal`     | `font_bold`     | `font_bolder`         |


Full example:

```html
<div class="color_333 font_bold text_center">Example</div>
```

## 可用性

Atom.css 支持IE6+，但如果要使用`flex`这样的类，建议在IE9+上使用。所有现代浏览器都支持atom.css。

## License

Atom.css 使用的是开放的MIT协议。(http://opensource.org/licenses/MIT)

## Contributing

想要pull requests的看这里，我们只有两条原则：一是要遵循下划线的命名规则，二是保持`class`的单一属性原则。



