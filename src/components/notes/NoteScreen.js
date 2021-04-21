import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happened today?"
                    className="notes_textarea"
                >

                </textarea>

                <div className="notes__image">
                    <img
                        src="https://thumbs.dreamstime.com/b/black-wood-texture-background-old-panels-high-detailed-photo-black-wood-texture-background-old-panels-plank-parquet-129402866.jpg"
                        alt="imagen"
                    />
                </div>

            </div>

        </div>
    )
}
