# MouseWheelUtil
mouse wheel util, custom sensitivity

### Dependency

depend on jQuery, I will remove the jQuery dependency in future.

### parameters
*   `target` jquery Dom object
*   `opts` options object
*   `opts.sensitivity` mouse wheel sensitivity, default is 4, the min value is 1(the highest sensitivity)
*   `opts.timeLimit` how long to trigger wheel event if user wheel mouse but not reach the sensitivity defined in opts, default is 500ms
*   `opts.preventDefault` boolean, default is true, if the value is true, default page scroll will be prevent
*   `opts.onWheel` when customer mouse wheel trigger, the method will be called, it accepts a direction param, value <code>1</code> means scroll up, value <code>2</code> means scroll dwon.


### demo
```javascript
new MouseWheelUtil($('.wrapper'), {
  sensitivity: 3,
  timeLimit: 400,
  onWheel: function (direction) {
    if (direction === 1) {
      console.log('scroll up');
    } else {
      console.log('scroll down');
    }
  }
});
```
