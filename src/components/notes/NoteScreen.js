import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { activeNote } from '../actions/notes';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

   const dispatch = useDispatch();

    const {active:note}                     = useSelector(state => state.notes)
    const [formValues, handleInputChange, reset]   = useForm(note);
    const { body, title}                    = formValues;

    const activeId = useRef(note.id);

    useEffect(() => {
    
        if( note.id !== activeId.current ){
            reset(note);
            activeId.current = note.id;
        }

    }, [note, reset])

    useEffect(() => {
        
        dispatch(activeNote(formValues.id, {...formValues}));

    }, [formValues, dispatch])


    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                    name="title"
                />

                <textarea
                    placeholder="What happened today?"
                    className="notes_textarea"
                    value={body}
                    onChange={handleInputChange}
                    name="body"
                >

                </textarea>

                {
                    (note.url) 

                    && (<div className="notes__image">
                        <img
                            src="https://thumbs.dreamstime.com/b/black-wood-texture-background-old-panels-high-detailed-photo-black-wood-texture-background-old-panels-plank-parquet-129402866.jpg"
                            alt="imagen"
                        />
                    </div>)
                }

            </div>

        </div>
    )
}
