<div align="center">
<img src="https://raw.githubusercontent.com/react-boilerplate/react-boilerplate-brand/master/assets/banner-metal-optimized.jpg" alt="react boilerplate banner" align="center" width="300px" />
<img src="http://startupexplainer.com/wp-content/uploads/2016/12/client_logo_crossbar.png" alt="react boilerplate banner" align="center" width="300px" />
</div>
<br/>
<div align="center"><strong>Start your next project with react-boilerplate and crossbar</strong></div>
<div align="center">React-boilerplate doesn't need any introduction credit goes to <a href="https://github.com/mxstbr" target="_blank">mxstbr</a>, this repo is to describe implementation of crossbar in react-boilerplate</div>

## Crossbar Implementation
 ```bash
 npm install --save autobahn-react
 ```


  ```js
browserInitialize: function browserInitialize(port, path, realm) {
    return this.initialize('ws://' + document.location.hostname + ':' + port + '/' + path,   realm);
```
change this line
 ```bash
    return this.initialize('ws://' + document.location.hostname + ':' + port + '/' + path, realm);
 ```
 with your crossbar (ws://104.131.99.192:)

 ```bash
        return this.initialize('ws://104.131.99.192:' + port + '/' + path, realm);
 ```
 1. then go to <strong>app.js</strong> in <strong>app</strong>
2. Import <strong>Autobahn</strong>
3. Create connection & dispatch the connected event(<italic>Autobahn Object</italic>) to App(Main) Store
4. Then use that dispatched <italic>Autobahn Object</italic> wherever you want to <italic>subscribe</italic> in app like i did in <strong>HomePage</strong> container

## Collaborations
A little work by me to help others, although there will be plenty of mistakes, thats why collaborations are highly Welcome. Thanks!
