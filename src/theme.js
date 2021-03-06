Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const theme = "theme";



function setTheme(){
    const root = document.documentElement;
    const newTheme = root.classList.contains('dark')? 'light' : 'dark';

    root.className = newTheme;

    localStorage.setObj(theme, newTheme);

    window.location.reload();
}

export {setTheme};