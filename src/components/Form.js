import React from 'react';

function Form(props) {
  return (
    <div className="popup__content popup__content_type_authentication">
      <h3 className="popup__title popup__title_theme_dark popup__title_direction_center">{props.title}</h3>
      <form
        className="popup__form form"
        name={`formPopup${props.name}`}
        noValidate
        onSubmit={props.onSubmit}
      >
        {props.children}
        <button className={`popup__save ${!props.isDisabled ? 'popup__save_no-active' : ''} popup__save_type_authentication`} type="submit" disabled={!props.isDisabled}>
          {props.buttonText}
        </button>
      </form>
    </div>
  );
}

export default Form;