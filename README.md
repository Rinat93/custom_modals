Кастомное модальное окно

клонируйте код и подключите к своему проекту, более нечего не требуется.

Для создания диалогового окна используйте кастомный tags :
    <modal-dialog open_b='target' close_b='target_close'>'ALL'</modal-dialog>
где аттрибут: 
    open_b - является обязательным т.к. это элемент при нажатии на которого должнен открываться диалоговое окно
    close_b - соответственно кнопка при котором происходить закрытие, однако данный аттрибуте(close_b) является не обязательным т.к.
закрытие происходить по нажатию на пустое место в экране.

События прикрепляются ко всем элемент modal-dialog без вашего вмешательства в JS.
Пока что событие "закрытия" не отрабатывает только по Y, в ближащее время это будет устарнено. 