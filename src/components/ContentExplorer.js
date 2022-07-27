import React, { useState, useEffect } from 'react';
// import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import { ContentExplorer } from 'box-ui-elements';
import { ScaleLoader } from 'react-spinners';
import { THEME_COLOR, EXPRESS_SERVER_HOST } from '../Constants';


export default ({ folderId  }) => {
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [rootFolderId, setRootFolderId] = useState(0);
    
if (folderId) {
      setRootFolderId(folderId);
        return (
                <div className="elements">
                <ContentExplorer
                    logoUrl={""}
                    rootFolderId={rootFolderId}
                    token={"1!VTBOnZeU-EXp4-wb8sZO-woa6ZdOpDcSv6wBTonMLBZdzaQEgJvD-_VID4X8v4zQ8StxDz577KHbhbUvCYBwNiHjAY0gjWl7szhbY83GchByrcWHa_kMDG8Cy_SocNsobFJ66mG0Lf4hNGz2vSaawBoqdqktWUfduUlru7CxVYbkAmJ2QQ0xrRfF43MLHRrnGKTjnhs_BCinEZonBREbh0EgeRLH-zfaxAk0bcxFSaeUZIFekKqsPfV4Y8F0dUfo08EKTlk9dQKP9vZDuRZXCjAhLWEn5h7w2AFnoXxEQwQ0DRjQnliKXWiTRo4OqXEp77E7nLq1NaEzCsZkeLCIj_nMOmBflTAh3I2w4MdIGMFb3hI9wZOmhBB-NuGdXmxVdUn7ZNEc8wIL61IgOv726hadXcYduV-sbO3eJQMbF4vR6qisuiDm9HLVE84dOPrQ7nkz6ZMeePNWvA1fRgYhJKz5Ug2Vyedj5CqAfV1LihaZlFfvzoFrGC1nOS6McPsuVl0AxYkypFxSNI2-qJSDbcy8DKjejA7u9yxL6jx1ehqilENA4TvtdHTtp0QXlbsOhWP7dks3pHc9OgAaczehq-v4wgW6WJ_Ux1uBjEIRVpmxJRIDurp58LGrShoAO5kqLhHnXTAE9YzdcYxMDA2ohgkgza9wIHChJ-7M99-RyMML3FQT5ZzG2JHM4oCKrAYCrIVEtRUx8bm0OOgskz3GDfhU"}
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
                                hasVersions: true,
                            },
                            hasActivityFeed: true,
                            hasMetadata: true,
                            hasSkills: true
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
