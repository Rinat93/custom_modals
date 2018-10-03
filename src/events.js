/*
* Все события к диалоговому окну
* Принимем id_open элемента на которое нужно отреагировать
* и dial диалоговое окно на которое нужно отреагировать
* также id_close если имеется для закрытия окна
* */
class EventsCustom {
    constructor(id_open, dial, id_close=false){
        this.el_open = document.getElementById(id_open);
        this.dial = dial;
        this.open = this.open.bind(this);
        this.openEvent = this.openEvent.bind(this);
        this.close = this.close.bind(this);
        this.closeEvent = this.closeEvent.bind(this);
        this.CloseClickBody = this.CloseClickBody.bind(this);
        // Обязательно должо имется как элемент для открытия диал. окна так и само окно
        if (this.el_open && this.dial){
            this.openEvent()
        }

        // Если есть элемент для закрытия
        if(id_close){
            this.el_close = document.getElementById(id_close);
            this.closeEvent()
        }
    }

    // Открытие окна
    openEvent(){
        this.el_open.addEventListener('click', this.open, true);
    }

    // Зарегистрировать событие на закрытие окна
    closeEvent(){
        this.el_close.addEventListener('click', this.close, true);
    }

    // Закрыть окно
    close(){
        this.dial.close();
        document.body.removeEventListener('click', this.CloseClickBody, true);
    }
    // Открыть окно
    open(){
        this.dial.open();
        document.body.addEventListener('click', this.CloseClickBody, true);
    }

    //реагируем на событие если нажали вне диапозоне окна
    CloseClickBody(e){
        let coord = this.dial.getBoundingClientRect();
        if (e.clientX > coord.right || e.clientX < coord.left) {
            this.dial.close();
            document.body.removeEventListener('click', this.CloseClickBody, true);
        }
    }
}

export {EventsCustom}