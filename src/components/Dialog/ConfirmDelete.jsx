import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


function ConfirmDelete() {
  return (
    <div className="cd">
      <button
        type="button"
        className="btn p-0 border-0 bg-transparent text-danger"
        data-bs-toggle="modal"
        data-bs-target="#deleteModal"
        aria-label="Ta bort pass"
      >
        <FontAwesomeIcon icon={faTrash} className="fs-4"/>
      </button>

      <div
        class="modal fade"
        id="deleteModal"
        tabindex="-1"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-danger text-white">
              <h5 class="modal-title" id="deleteModalLabel">
                Bekräfta borttagning av pass
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p class="mb-0">Är du säker på att du vill ta bort detta pass?</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Avbryt
              </button>
              <button type="button" class="btn btn-danger" id="confirmDelete">
                Ta bort pass
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete