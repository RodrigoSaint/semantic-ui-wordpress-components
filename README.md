## semantic-ui-wordpress-components

This is a component that by just passing a wordpress address can query its posts and display them.

To install you can add it to your dependencies along with [semantic-ui-react](https://react.semantic-ui.com/introduction):

> npm i semantic-ui-wordpress-components semantic-ui-react --save
 
or
> yarn add semantic-ui-wordpress-components semantic-ui-react

Then import it on the component that you will use it:

```javascript
import WordPress from  "semantic-ui-wordpress-components";
```
And after that pass the address of your wordpress on the address prop:
```javascript
const app = () => <WordPress address="foreignerdeveloper.wordpress.com"  />
```
Done, you should have something like this:

![Example](http://i.imgur.com/zIJhW1N.png)