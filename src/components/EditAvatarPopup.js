import React, { useEffect } from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {
  const textInput = React.useRef();

  function handleClick() {
    return textInput.current.value;
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({
      avatar: handleClick()
    });
  }

  useEffect(() => {
    textInput.current.value = '';
  }, [props.isOpen]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name='avatar'
      title='Обновить аватар'
      buttonText='Сохранить'
      isLoading={props.isLoading}
    >
      <input 
        className="popup__input" 
        type="url" 
        name="inputlink" 
        id="input-avatar"
        placeholder="Ссылка на картинку"
        required
        ref={textInput}
      />
      <span className="popup__form-error" id="input-avatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;