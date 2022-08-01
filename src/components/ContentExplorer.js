import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import axios from 'axios';
import { ContentExplorer } from 'box-ui-elements';
import { ScaleLoader } from 'react-spinners';
import { THEME_COLOR, EXPRESS_SERVER_HOST } from '../Constants';


export default ({ folderId, tokenChild }) => {
    const [token, setToken] = useState(null);
    const [rootFolderId, setRootFolderId] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchToken = async () => {
            setIsLoading(true);
            setRootFolderId(folderId);       
            
            if (tokenChild) {
                 setToken(tokenChild);
            }
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
                            canRename: false
                            canShare: false
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
