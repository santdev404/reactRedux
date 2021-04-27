import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startSaveNote } from '../actions/notes'

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes)

    const handleSave = () =>{
        
        //console.log(active);
        dispatch(startSaveNote(active));

    }


    return (
        <div className="notes_appbar">
            <span>04-20-21</span>

            <div>
                <button className="btn">
                    Picture
                </button>

                <button 
                    className="btn"
                    onClick= { handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    )
}
