# An infinite type and delete animation in Angular 10
![demo-gif](https://media.giphy.com/media/BLwsAn4Gs2IVShvRLe/giphy.gif)

![Current Version](https://img.shields.io/badge/Current%20Version-2.0.1-brightgreen>)   
 ![License](https://img.shields.io/badge/License-GNU%20General%20Public%20License%20v3.0-blue)

An angular 10 component for infinite type and delete animation

## Demo
* [Stackblitz]
 
### Installation
1. run this:
   ```shell
   npm i ngx-sbz-type-delete
   ```
2. go to app.module and add this:
   ```shell
   import { InfiniteTypeDeleteModule } from "ngx-sbz-type-delete";
   
   @NgModule({
       imports: [
           InfiniteTypeDeleteModule
       ]
   })
   ```
3. use like this:
   ```shell
    <ngx-sbz-type-delete [wordArray]="['hello']"></ngx-sbz-type-delete>
   ```
4.. Enjoy :)

### Inputs to customize to animation

| Input                   | Type     | Default     | Description                                                      |
| ----------------------- | -------- | ----------- | ---------------------------------------------------------------- |
| wordArray               | string[] | ----------- | array of strings to be displayed on screen                       |
| textColor               | string   | 'black'     | text and blink color                                             |
| fontSize                | string   | '20px'      | size of the text. suffix must be px/vw/vh                        |
| blinkWidth              | string   | '2px'       | width of the blinking cursor at the end. suffix must be px/vw/vh |
| typingSpeedMilliseconds | number   | 300         | delay between each letter typing. 1000 milliseconds => 1 second  |
| deleteSpeedMilliseconds | number   | 300         | delay between each letter delete. 1000 milliseconds => 1 second  |

#### Contribution
Want to contribute? Great!
It's open source.
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

#### License
* You can find the license here: [License]


[//]: # (
These are reference links used in the body of this note and get stripped out when the markdown processor does its job.
There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Stackblitz]: <https://stackblitz.com/edit/ngx-sbz-infinite-type-delete?file=src/app/app.component.html>
   [License]: <https://github.com/blakazulu/Ngx-Sbz-Infinite-Type-Delete/blob/main/LICENSE>
