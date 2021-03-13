# SHADWOO

Get **perfect** shadows like you've never seen... For non-designers


# Installation

`npm i shadwoo --save`

Then...

```js
import { shadwoo } from 'shadwoo';
shadwoo({
    myShadwoo: '.shadwoo',
    shadwoo_type: 'medium',
    shadwoo_opacity: '56',
    shadwoo_color: '#7792bd',
    padding: false
});
```
## OPTIONS

* *myShadwoo* : _Define the class or id_
* *shadwoo_type* : _hard (0px) / medium (7px) / soft (15px)_
* *shadwoo_opacity* : _0 to 100_
* *shadwoo_color* : _Color in HEX format_
* *padding* : _boolean_
    If you enable the **padding** option, add the following option:

        padding_value : Padding value
