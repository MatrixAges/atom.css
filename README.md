
<p align="center"><a href="#" target="_blank" rel="noopener noreferrer"><img width="200" src="https://s1.ax1x.com/2018/11/25/Fkb1F1.png" alt="atom.css logo"></a></p>

# <p align="center"> atom.css </p>

_<p align="center">Write Your Atom.css Like A Gentleman!Only atom-style CSS elements!</p>_

<p align="center"> atom.css is a atom-style css collection,and inspired by Organic Chemistry,the concept is build app more flexible and faster,to reduce overtime,I hope it can help.</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/join-welcome-brightgreen.svg" alt="attitude_img"></a>
  <a href="#"><img src="https://img.shields.io/badge/version-1.0-orange.svg" alt="version_img"></a>
  <a href="#"><img src="https://img.shields.io/badge/uncompres%20size-12k-red.svg" alt="size_img"></a>
  <a href="#"><img src="https://img.shields.io/badge/style-fic%20design-yellow.svg" alt="style_img"></a>
  <a href="#"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
  <a href="#"><img src="https://img.shields.io/badge/update-weekly-lightgrey.svg" alt="Chat"></a>
</p>

## Installation

Install via npm:

```bash
$ npm i @verticalv/atom.css --save
```

## Usage

To use atom.css in your website, simply drop the stylesheet into your document's `<head>`, and add the class like `flex` to an element,it will display flex. That's it! 

```html
<head>
  <link rel="stylesheet" href="atom.min.css">
</head>
```

### Classes

To decorate an element, add the class like below to an element. 

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

## Accessibility

Atom.css supports the IE6+ and all modern browsers,and you can use class like flex in IE9+.

## License

Atom.css is licensed under the MIT license. (http://opensource.org/licenses/MIT)

## Contributing

Pull requests are the way to go here. We only have two rules for submitting a pull request: match the naming convention (name_rules) and the single attribute principle.



