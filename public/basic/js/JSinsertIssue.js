function createMenuItem(item, itemURL) {
    let li = document.createElement('li');
    let a = document.createElement('a')
    li.appendChild(a);
    a.setAttribute('href', itemURL);
    a.innerHTML = item;
    return li;
    }
document.getElementById('menu').appendChild(createMenuItem('Issue 1', '/issue1/1'));
document.getElementById('menu').appendChild(createMenuItem('Issue 2', '/issue2/1'));
document.getElementById('menu').appendChild(createMenuItem('Issue 3', '/issue3/1'));
document.getElementById('menu').appendChild(createMenuItem('Issue 4', '/issue4/1'));
document.getElementById('menu').appendChild(createMenuItem('Issue 5', '/issue5/1'));
document.getElementById('menu').appendChild(createMenuItem('Issue 6', '/issue6/1'));
document.getElementById('menu').appendChild(createMenuItem('Issue 7', '/issue7/1'));
document.getElementById('menu').appendChild(createMenuItem('Issue 8', '/issue8/1'));


    


