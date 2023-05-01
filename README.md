<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Non-Enumerable Property

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Define][@stdlib/utils/define-property] a **non-enumerable** property.



<section class="usage">

## Usage

```javascript
import setNonEnumerableProperty from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-property@deno/mod.js';
```

#### setNonEnumerableProperty( obj, prop, value )

[Defines][@stdlib/utils/define-property] a **non-enumerable** property.

```javascript
var obj = {};

setNonEnumerableProperty( obj, 'foo', 'bar' );

var v = obj.foo;
// returns 'bar'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Non-enumerable properties are **writable** and **configurable**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@deno/mod.js';
import setNonEnumerableProperty from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-property@deno/mod.js';

function Foo( name ) {
    if ( !(this instanceof Foo) ) {
        return new Foo( name );
    }
    setNonEnumerableProperty( this, 'name', name );
    return this;
}

var foo = new Foo( 'beep' );

var v = foo.name;
// returns 'beep'

var keys = objectKeys( foo );
// returns []
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-define-nonenumerable-read-only-accessor`][@stdlib/utils/define-nonenumerable-read-only-accessor]</span><span class="delimiter">: </span><span class="description">define a non-enumerable read-only accessor.</span>
-   <span class="package-name">[`@stdlib/utils-define-nonenumerable-read-only-property`][@stdlib/utils/define-nonenumerable-read-only-property]</span><span class="delimiter">: </span><span class="description">define a non-enumerable read-only property.</span>
-   <span class="package-name">[`@stdlib/utils-define-nonenumerable-read-write-accessor`][@stdlib/utils/define-nonenumerable-read-write-accessor]</span><span class="delimiter">: </span><span class="description">define a non-enumerable read-write accessor.</span>
-   <span class="package-name">[`@stdlib/utils-define-nonenumerable-write-only-accessor`][@stdlib/utils/define-nonenumerable-write-only-accessor]</span><span class="delimiter">: </span><span class="description">define a non-enumerable write-only accessor.</span>
-   <span class="package-name">[`@stdlib/utils-define-read-only-property`][@stdlib/utils/define-read-only-property]</span><span class="delimiter">: </span><span class="description">define a read-only property.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-define-nonenumerable-property.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-define-nonenumerable-property

[test-image]: https://github.com/stdlib-js/utils-define-nonenumerable-property/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-define-nonenumerable-property/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-define-nonenumerable-property/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-define-nonenumerable-property?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-define-nonenumerable-property.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-define-nonenumerable-property/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-define-nonenumerable-property/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-define-nonenumerable-property/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-define-nonenumerable-property/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-define-nonenumerable-property/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-define-nonenumerable-property/main/LICENSE

[@stdlib/utils/define-property]: https://github.com/stdlib-js/utils-define-property/tree/deno

<!-- <related-links> -->

[@stdlib/utils/define-nonenumerable-read-only-accessor]: https://github.com/stdlib-js/utils-define-nonenumerable-read-only-accessor/tree/deno

[@stdlib/utils/define-nonenumerable-read-only-property]: https://github.com/stdlib-js/utils-define-nonenumerable-read-only-property/tree/deno

[@stdlib/utils/define-nonenumerable-read-write-accessor]: https://github.com/stdlib-js/utils-define-nonenumerable-read-write-accessor/tree/deno

[@stdlib/utils/define-nonenumerable-write-only-accessor]: https://github.com/stdlib-js/utils-define-nonenumerable-write-only-accessor/tree/deno

[@stdlib/utils/define-read-only-property]: https://github.com/stdlib-js/utils-define-read-only-property/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
