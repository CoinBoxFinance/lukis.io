

const Activity = () => {
    return(
        <>
   
        <section class="page-header-section style-1">
        <div class="container">
            <div class="page-header-content">
                <div class="page-header-inner">
                    <div class="page-title">
                        <h2>All Activities </h2>
                    </div>
                    <ol class="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li class="active">Activity</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>

    <section class="activity-section padding-top padding-bottom">
        <div class="container">

            <div class="section-wrapper">
                <div class="row">
                    <div class="col-xl-8">
                        <div class="section-header">
                            <h3>Sitewide Activites</h3>
                            <div class="nft-filter d-flex flex-wrap justify-content-center gap-15">
                                <div class="form-floating">
                                    <select class="form-select" id="sortSelect"
                                        aria-label="Floating label select example">
                                        <option selected>Newest</option>
                                        <option value="1">Trending</option>
                                        <option value="2">Most Viewed</option>
                                        <option value="3">Less Viewed</option>
                                        <option value="3">Ending Soon</option>
                                        <option value="3">Recently Sold </option>
                                        <option value="3">Recently Created </option>
                                        <option value="3">Recently Viewed </option>
                                        <option value="3">Ending Soon</option>
                                    </select>
                                    <label for="sortSelect">Sort By</label>
                                </div>
                            </div>
                        </div>
                        <div class="activity-wrapper">
                            <div class="row gy-3">
                                <div class="col-12">
                                    <div class="activity-item">
                                        <div class="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                                            <div class="lab-thumb me-3 me-md-4">
                                                <img src={require('../images/activity/01.gif').default} alt="" />
                                                {/* <img src="assets/images/activity/01.gif" alt="img"> */}
                                            </div>
                                            <div class="lab-content">
                                                <h4><a href="nft-single.html">Gold digger x</a>
                                                </h4>
                                                <p class="mb-2">GOLD DIGGER (x Antoni Tudisco)
                                                    #44/44 was put up for sale for
                                                    <b>0.0991
                                                        ETH</b>
                                                </p>
                                                <p class="user-id">By: <a href="author.html">@rasselmrh</a></p>
                                                <p>At: 10/07/2021, 10:03 am</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="activity-item">
                                        <div class="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                                            <div class="lab-thumb me-3 me-md-4">
                                                <img src={require('../images/activity/02.gif').default} alt="" />
                                                {/* <img src="assets/images/activity/02.gif" alt="img"> */}
                                            </div>
                                            <div class="lab-content">
                                                <h4><a href="nft-single.html">ghost lix xrf</a>
                                                </h4>
                                                <p class="mb-2">two rare collection purchased for
                                                    <b>0.001
                                                        ETH</b>
                                                </p>
                                                <p class="user-id">By: <a href="author.html">@reo2lxsr</a></p>
                                                <p>At: 10/07/2021, 08:23 am</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="activity-item">
                                        <div class="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                                            <div class="lab-thumb me-3 me-md-4">
                                                <img src={require('../images/activity/04.gif').default} alt="" />
                                                {/* <img src="assets/images/activity/04.gif" alt="img"> */}
                                            </div>
                                            <div class="lab-content">
                                                <h4><a href="nft-single.html">Trust In meh </a>
                                                </h4>
                                                <p class="mb-2">The Shopping Cart #54/65 was put up
                                                    for sale for <b>0.021
                                                        ETH</b>
                                                </p>
                                                <p class="user-id">By: <a href="author.html">@reo2lxsr</a></p>
                                                <p>At: 10/07/2021, 12:03 am</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="activity-item">
                                        <div class="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                                            <div class="lab-thumb me-3 me-md-4">
                                                <img src={require('../images/activity/05.gif').default} alt="" />
                                                {/* <img src="assets/images/activity/05.gif" alt="img"> */}
                                            </div>
                                            <div class="lab-content">
                                                <h4><a href="nft-single.html">Sysytan #0le </a>
                                                </h4>
                                                <p class="mb-2">A offer of $200.00 was placed for
                                                    ÜNDERSTANDING (Sean Williams) #1/20
                                                </p>
                                                <p class="user-id">By: <a href="author.html">@reo2lxsr</a></p>
                                                <p>At: 10/07/2021, 10:03 am</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="activity-item">
                                        <div class="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                                            <div class="lab-thumb me-3 me-md-4">
                                                <img src={require('../images/activity/03.gif').default} alt="" />
                                                {/* <img src="assets/images/activity/03.gif" alt="img"> */}
                                            </div>
                                            <div class="lab-content">
                                                <h4><a href="nft-single.html">ghost lix xrf</a>
                                                </h4>
                                                <p class="mb-2">two rare collection purchased for
                                                    <b>0.001
                                                        ETH</b>
                                                </p>
                                                <p class="user-id">By: <a href="author.html">@reo2lxsr</a></p>
                                                <p>At: 10/07/2021, 02:03 pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="load-btn mt-5">
                                <a href="#" class="default-btn move-bottom">
                                    <span>Load More</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-xl-4">
                        <aside class="mt-5 mt-xl-0">
                            <div class="widget widget-tags">
                                <div class="widget-header">
                                    <h5 class="title">Filters By</h5>
                                </div>

                                <ul class="widget-wrapper justify-content-start">
                                    <li><a href="#"><i class="icofont-listine-dots"></i> Listing</a></li>
                                    <li><a href="#" class="active"><i class="icofont-cart"></i> Purchases</a></li>
                                    <li><a href="#"><i class="icofont-sale-discount"></i> Sales</a></li>
                                    <li><a href="#"><i class="icofont-retweet"></i> Transfers</a></li>
                                    <li><a href="#"><i class="icofont-fire-burn"></i> Burns</a></li>
                                    <li><a href="#"><i class="icofont-court-hammer"></i> Bids</a></li>
                                    <li><a href="#"><i class="icofont-like"></i> Likes</a></li>
                                    <li><a href="#"><i class="icofont-favourite"></i> Following</a></li>
                                    <li><a href="#"><i class="icofont-history"></i> Recent</a></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

            </div>
        </div>
    </section>

        </>
    )
}

export default Activity;