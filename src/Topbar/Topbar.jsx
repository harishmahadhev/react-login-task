import { Badge , Avatar} from '@material-ui/core';
import { NotificationsNone, Settings } from '@material-ui/icons';
import React from 'react'
import './topbar.css';
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <div className="topbarLogo">
                        #HASH
                    </div>
                </div>
                <div className="topbarRight">
                    <Badge className="topbarIcon" badgeContent={4}>
                        <NotificationsNone/>
                    </Badge>
                    <Badge className="topbarIcon" badgeContent={0}>
                        <Settings/>
                    </Badge>
                   <Avatar style={{width:"30px", height:"30px"}} className="topbarAvatar" src ="https://i.pinimg.com/564x/a1/54/ac/a154ac930cc938fa4401746e4d14dde6.jpg" alt="Avatar"></Avatar>
                </div>
            </div>
        </div>
    )
}
