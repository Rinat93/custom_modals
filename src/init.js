const style = require("./style/el.json");

/*
* el - диалоговое окно
* options {
*          style - изменить стили по умолчанию
*    }
* Открытие и закрытие окна будет производится при помощи target.open() and target.close()
* Данный класс добавляет методы раскрытие и скрытие окна, не каких событии тут нет, так-же
* Можно изменить стили по умолчанию в el.json в папке style
* */
class Modals {
    constructor(el) {
        this.domElements = this.domElements.bind(this);
        if (typeof el !== 'object') {
            this.el = this.domElements(el);
        } else {
            this.el = el;
        }
        this.el.style.display = 'none';
        this.el.close = this.close.bind(this);
        this.el.open = this.open.bind(this);
    }

    // Находим элемент в DOM
    domElements(el){
        return document.getElementById(el);
    }


    // Закрытие окна
    close(){
        this.el.setAttribute('open', false);
        this.el.style.display = 'none';

        // Удаляем оверлфлоу
        let over_off = document.getElementsByClassName('overlay');
        for (let el of over_off){
            if (el.getAttribute("dialog")=="true"){
                el.remove();
                return true;
            }
        }
    }

    // Затемняем оставшийся экран оверлеем
    overlay(){
        let overlay_el = document.createElement("div");
        overlay_el.className = "overlay";
        overlay_el.style.display = "block";
        overlay_el.style.height = "100%";
        overlay_el.style.width = "100%";
        overlay_el.style.top = "0";
        overlay_el.style.position = "fixed";
        overlay_el.style['z-index']=8000;
        overlay_el.style['background-color']="#f0f1f7";
        overlay_el.style.opacity = '.8';
        overlay_el.style.animation = "fade 500ms";
        overlay_el.setAttribute('dialog', 'true');
        document.body.appendChild(overlay_el);
    }

    // Открытие окна
    open(){
        // Применяем стили
        for (let i of Object.keys(style.dialog)) {
            this.el.style[i] = style.dialog[i];
        }
        this.el.setAttribute('open', true);
        this.overlay();
    }


}

export {Modals};