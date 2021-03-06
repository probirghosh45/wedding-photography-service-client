import React from 'react';

const FeedbackList = ({ feedback }) => {
    return (
        <div className='col-md-3 card py-3 px-1 mb-3 mx-2'>
            <div className='feedback-card px-3'>
                <div className='d-flex align-items-center'>
                    {/* <img style={{ height: '60px', borderRadius: '50%' }} src={feedback.src} className="mx-auto" alt="..." /> */}
                    <div className="card-body d-flex flex-column">
                        <h4 className="card-title">{feedback.name}</h4>
                        <h6 className="card-text">{feedback.review}</h6>
                    </div>
                </div>
                <div>
                    <p className='card-text'>{feedback.feedback}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackList;