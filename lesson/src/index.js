import avatar from './avatar.jpg'
// import style from './index.scss'
import createAvatar from './createAvatar'
import './icon.scss'

createAvatar(); 
var img = new Image();
img.src = avatar;
// img.classList.add(style.avatar);

var root = document.getElementById('root');
root.append(img);
root.innerHTML += '<div class="iconfont icondanta"></div>'
