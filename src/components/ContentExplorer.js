export default ({ folderId, tokenChild }) => {
  const [token, setToken] = useState(null);
  const [rootFolderId, setRootFolderId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  if (tokenChild) {
      setRootFolderId(folderId);
      console.log('Loading UI Element...');

      return (
              <div className="elements">
                      <ContentExplorer
                          logoUrl={""}
                          rootFolderId={rootFolderId}
                          token={tokenChild}
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
