import GALLERY from './GalleryActionTypes';

/**
 * Updates a file with new data.
 *
 * @param number id - The id of the file to update.
 * @param object updates - The new values.
 */
export function loadFile(id, file) {
  return (dispatch) => {
    dispatch({
      type: GALLERY.LOAD_FILE_SUCCESS,
      payload: {
        id,
        file,
      },
    });
  };
}

/**
 * Selects files. If no param is passed all files are selected.
 *
 * @param Array ids - Array of file ids to select.
 */
export function selectFiles(ids = null) {
  return (dispatch) =>
    dispatch({
      type: GALLERY.SELECT_FILES,
      payload: { ids },
    });
}

/**
 * Deselects files. If no param is passed all files are deselected.
 *
 * @param Array ids - Array of file ids to deselect.
 */
export function deselectFiles(ids = null) {
  return (dispatch) =>
    dispatch({
      type: GALLERY.DESELECT_FILES,
      payload: { ids },
    });
}

export function setNoticeMessage(message) {
  return (dispatch) =>
    dispatch({
      type: GALLERY.SET_NOTICE_MESSAGE,
      payload: { message },
    });
}

export function setErrorMessage(message) {
  return (dispatch) =>
    dispatch({
      type: GALLERY.SET_ERROR_MESSAGE,
      payload: { message },
    });
}

export function setEnableDropzone(enableDropzone) {
  return (dispatch) =>
    dispatch({
      type: GALLERY.SET_ENABLE_DROPZONE,
      payload: { enableDropzone },
    });
}

export function clearFileBadge(id) {
  return (dispatch) => {
    dispatch({
      type: GALLERY.CLEAR_FILE_BADGE,
      payload: { id },
    });
  };
}

export function setFileBadge(id, message, status, duration) {
  return (dispatch, getState) => {
    const { assetAdmin } = getState();
    const badge = assetAdmin.gallery.badges.find((item) => item.id === id);

    // restart the timer if a new message
    if (badge && badge.timer) {
      clearTimeout(badge.timer);
    }
    const timer = (duration > 0)
      ? setTimeout(() => clearFileBadge(id)(dispatch), duration)
      : null;

    dispatch({
      type: GALLERY.SET_FILE_BADGE,
      payload: { id, message, status, timer },
    });
  };
}
