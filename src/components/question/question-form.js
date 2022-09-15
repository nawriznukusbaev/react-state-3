let QuestionForm=(
    <form action="" className="question-form">
        <div className="form-head">
                        <span className="label-name">
                            <input type="text" name="" id="name" placeholder=" "/>
                            <label htmlFor="name">Имя</label>
                        </span>
            <span className="label-mail">
                            <input type="text" name="" id="mail" placeholder=" "/>
                            <label htmlFor="mail">E-mail</label>
                        </span>
        </div>
        <div className="form-body">
                        <span className="label-sms">
                            <input type="text" name="" id="sms" placeholder=" "/>
                            <label htmlFor="sms">Сообщение</label>
                        </span>
        </div>
        <div className="form-footer">
            <a className="form-footer__link" href="#">Отправить</a>
        </div>
    </form>
);
export default QuestionForm;