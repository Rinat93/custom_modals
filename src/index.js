'use strict';
/*
* Кастомный тег для диалогового окна
* */
import {Modals} from './init.js';
import {EventsCustom} from './events.js';

class Dialog_custom {
    constructor(tagName) {
        this.tagName=tagName;
        this.instanceElement = this.instanceElement.bind(this);
        this.renderElement = this.renderElement.bind(this);
        this.instanceElement();
    }

    // Находим все диалоговые окна и переходим к привязкам к ним событии
    instanceElement(){
        let tagInstances = document.getElementsByTagName(this.tagName);
        if (tagInstances.length > 0) {
            for (let i of tagInstances) {
                if (i != false && i != null && i != undefined) {
                    this.renderElement(i);
                }
            }
        } else {
            return null;
        }
    }

    renderElement(element){
        new Modals(element);
        // open_button - элемент на событие которого должно открываться окно
        if (element.getAttribute('open_b') != null && element.getAttribute('close_b')==null) {
            new EventsCustom(element.getAttribute('open_b'), element)
        } else if (element.getAttribute('open_b') != null && element.getAttribute('close_b') != null){
            new EventsCustom(element.getAttribute('open_b'), element, element.getAttribute('close_b'));
        } else {
            throw new DOMException('In element not attributes open_b')
        }
    }
}

window.Dialog_custom = Dialog_custom;
export {Dialog_custom}