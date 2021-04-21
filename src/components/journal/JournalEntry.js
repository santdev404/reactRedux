import React from 'react'

export const JournalEntry = () => {



    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1522152586713-56bab67de1b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Fuck off
                </p>
                <p className="journal__entry-content">
                    The winter has gone
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>

            
        </div>
    )
}
