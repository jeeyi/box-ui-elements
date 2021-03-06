// @flow

// Shared link access level constants
const ANYONE_WITH_LINK: 'peopleWithTheLink' = 'peopleWithTheLink';
const ANYONE_IN_COMPANY: 'peopleInYourCompany' = 'peopleInYourCompany';
const PEOPLE_IN_ITEM: 'peopleInThisItem' = 'peopleInThisItem';

// Shared link permission level constants
const CAN_VIEW_DOWNLOAD: 'canViewDownload' = 'canViewDownload';
const CAN_VIEW_ONLY: 'canViewOnly' = 'canViewOnly';

// Invitee permission level constants
const EDITOR = 'Editor';
const CO_OWNER = 'Co-owner';
const PREVIEWER = 'Previewer';
const PREVIEWER_UPLOADER = 'Previewer Uploader';
const OWNER = 'Owner';
const VIEWER = 'Viewer';
const VIEWER_UPLOADER = 'Viewer Uploader';
const UPLOADER = 'Uploader';

const COLLAB_GROUP_TYPE = 'group';
const COLLAB_USER_TYPE = 'user';
const COLLAB_PENDING_TYPE = 'pending';

// To do: connect to Item API if this data becomes available
const ALLOWED_ACCESS_LEVELS = {
    peopleInThisItem: true,
    peopleInYourCompany: true,
    peopleWithTheLink: true,
};

export {
    ALLOWED_ACCESS_LEVELS,
    ANYONE_IN_COMPANY,
    ANYONE_WITH_LINK,
    CAN_VIEW_DOWNLOAD,
    CAN_VIEW_ONLY,
    COLLAB_GROUP_TYPE,
    COLLAB_PENDING_TYPE,
    COLLAB_USER_TYPE,
    CO_OWNER,
    EDITOR,
    OWNER,
    PEOPLE_IN_ITEM,
    PREVIEWER,
    PREVIEWER_UPLOADER,
    UPLOADER,
    VIEWER,
    VIEWER_UPLOADER,
};
