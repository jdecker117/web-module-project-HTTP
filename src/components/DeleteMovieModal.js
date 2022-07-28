import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const DeleteMovieModal = (props) => {
console.log(props)
const {id} = useParams();
const {push} = useHistory();

const handleDelete = (evt) => {
    evt.preventDefault();
    props.deleteMovie(id)
}

const handleExit = (evt) => {
    evt.preventDefault();
    push(`/movies/${id}`)
}

    return (<div id="deleteEmployeeModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">						
                        <h4 className="modal-title">Delete Employee</h4>
                        <button type="button" onClick={handleExit} className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">					
                        <p>Are you sure you want to delete these Records?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div className="modal-footer">
                        <input type="button" onClick={handleExit} className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                        <input onClick={handleDelete} type="submit" className="btn btn-danger" value="Delete"/>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}

export default DeleteMovieModal;