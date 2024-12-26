export const IPC_CHANNELS = {
  UTILS: {
    GET_APP_VERSION: "get-app-version",
    GET_OS: "get-os",
    LOG_MESSAGE: "log-message",
    SET_PREVENT_APP_CLOSE: "set-prevent-app-close",
    OPEN_ON_BROWSER: "open-on-browser",
    SELECT_FOLDER_DIALOG: "select-folder-dialog"
  },
  APP_UPDATER: {
    UPDATE_AVAILABLE: "update-available",
    UPDATE_DOWNLOADED: "update-downloaded"
  },
  CONFIG_MANAGER: {
    GET_CONFIG: "get-config",
    SAVE_CONFIG: "save-config"
  },
  PATHS_MANAGER: {
    GET_CURRENT_USER_DATA_PATH: "get-current-user-data-path",
    DELETE_PATH: "delete-path",
    FORMAT_PATH: "format-path",
    CHECK_PATH_EMPTY: "check-empty-path",
    CHECK_PATH_EXISTS: "check-path-exists",
    OPEN_PATH_ON_FILE_EXPLORER: "open-path-on-file-explorer"
  },
  FILES_MANAGER: {
    DOWNLOAD_ON_PATH: "download-on-path",
    EXTRACT_ON_PATH: "extract-on-pathn",
    DOWNLOAD_PROGRESS: "download-progress",
    EXTRACT_PROGRESS: "extract-progress",
    CHANGE_PERMS: "change-perms",
    LOOK_FOR_A_GAME_VERSION: "look-for-a-game-version"
  },
  GAME_MANAGER: {
    EXECUTE_GAME: "execute-game"
  }
}
