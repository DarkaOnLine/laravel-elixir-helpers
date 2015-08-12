# laravel-elixir-helpers
Various Laravel Elixir 3 helpers 


## Installation

`npm install --save-dev laravel-elixir-helpers`

Add it to your Elixir Gulpfile, like so:

```javascript
require('laravel-elixir-helpers');
```


## Usage

### Rename
elixir(function(mix) {
   mix.rename('./path/to/source/file.css', 'new_file_name.css', './destination/path');
});

### Url Adjuster

#### Prepend / Append
```javascript
    mix.urlAdjuster('style.css', {
        prependRelative: '/new/image/directory/',
    });
```
```css
    .bg-image { background-image: url('image.jpg'); }
    //Result:
    .bg-image { background-image: url('/new/image/directory/image.jpg?version=1'); }
```
#### Relative paths
```javascript
    mix.urlAdjuster('style.css', {
        prepend: '/new/image/directory/',
        append: '?version=1'
    });
```
```css
    .bg-image { background-image: url('image.jpg'); }
    .bg-image2 { background-image: url('/img/image.jpg'); }
    //Result:
    .bg-image { background-image: url('/new/image/directory/image.jpg'); }
    .bg-image2 { background-image: url('/img/image.jpg'); }
```

#### Replace
```javascript
    mix.urlAdjuster('style.css', {
        replace: ['/old/path', '/new/image/directory']
    });
```
```css
    .bg-image { background-image: url('/old/path/image.jpg'); }
    //Result:
    .bg-image { background-image: url('/new/image/directory/image.jpg'); }
```

## Bugs and Contributions

If you find bugs, please [post an issue on GitHub](https://github.com/DarkaOnLine/laravel-elixir-helpers/issues) describing the problem.
Or better yet, make a pull request with the solution.

## License

This is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
