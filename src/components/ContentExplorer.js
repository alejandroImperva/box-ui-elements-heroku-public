import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { ContentExplorer } from 'box-ui-elements';
import { ScaleLoader } from 'react-spinners';
import { THEME_COLOR, EXPRESS_SERVER_HOST } from '../Constants';


export default ({ folderId }) => {
    const [token, setToken] = useState(null);
    const [rootFolderId, setRootFolderId] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchToken = async () => {
            setIsLoading(true);
            setRootFolderId(folderId);       
            const result = await axios.get(`${EXPRESS_SERVER_HOST}/box/explorer/token-downscope/${folderId}`);            
            console.log('good token ==>>' + result.data.accessToken);
            
            setToken('1!eKSNkCtWOOGYFUelxKqWihjWqTavmFrHNYSaRdr9BZdsq6l38LoC6jwpTLsoag65hmBScbI80-yp1l-CCN7Otqy8uP9kZs3S1nWpCSysIT1-Ban9hWJU3Z5BzbjrTWAxMu0BnGPy0457k4ckVKfJwqoC0eJPLTpV639C3QEa9OWlLh1l6g3fSv_DuEzefWft7yZ9ivygXCjWrkvPOQsTiltCWRzjiBYcvtVeTtd0Zi444PkNMab1HxMQroMQKOxn5CWbizJeGWTiD6bjq49PbuCrZFvvbHU_OTIpHDuyeAlVCvsNh0Lm4eOiu4MtDtxjxwLhydGKcWUbAuxWUfm9mjhtoUkuFM_3teuV5VKRXtrFeyBjopf9ibUARynPfZRxJzTjGnFE3C8n13KJAkYI3GmB20kDbCt7RcWWE5CIDDuyP6lcAzd7ob7zXZSarnTW-_XQ8BTh9n36eHIci0YGMtwm8wV9v31VGaFmwmtGAm-9BdwflvNMj5Mb6ivcUvmRxhYYotP69-3OJLZ5c3kGuxMgLbxhX2f0tO6YQkcK0V9ZVKX5iD9u4O-_HRvO5LYjTegz2tD4wv54_O51QiYkeYp3GqX43rRIrtf4L2j_lquZvSnj9ECE70ATq_9sIMWdszSJzULcDZKz7Jvxd0RjTWThuR562rw7jaT_1NDP6gT-wcUN7iSwK27dU3h4_gwwkmUxIEFhys9228ABLH7COttz');
            setIsLoading(false);
        }
        fetchToken();
    }, []);
console.log('token ' + token);
    if(token) {
        console.log('Loading UI Element...');

        return (
                <div className="elements">
                        <ContentExplorer
                            logoUrl={""}
                            rootFolderId={rootFolderId}
                            token={token}
                            language={"en_US"}
                            contentPreviewProps={{
                                showAnnotations: true,
                                contentSidebarProps: {
                                    detailsSidebarProps: {
                                        hasProperties: true,
                                        hasNotices: true,
                                        hasAccessStats: true,
                                        hasClassification: true,
                                        hasRetentionPolicy: true,
                                    },
                                    hasActivityFeed: true,
                                    hasMetadata: true,
                                    // hasSkills: true,
                                    hasVersions: true
                                }
                            }}
                        />
                </div>
        );
    }
    else {
        return(
                <div className="elements">
                    <div className="spinner">
                        <ScaleLoader 
                            color={THEME_COLOR}
                            loading={isLoading}
                        />
                    </div>                
                </div>
        );
    }
};
