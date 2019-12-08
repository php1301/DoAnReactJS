import React, { Component } from 'react'
import './css/style.min.css'
import './css/responsive.min.css'
import '../Stuff/Stuff.scss'
import BoxOffice from '../BoxOffice/BoxOffice'
import Schedule from '../Schedule/Schedule'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import '../../../node_modules/font-awesome/scss/font-awesome.scss'
export default class Stuff extends Component {
    render() {
        return (
            <div>
                <div className="row omb-latest">
                    <div className="col-xs-12 col-sm-6">
                        <h5>Latest News
        <a href="news/" className="omb-heading-more">More News</a>
                        </h5>
                        <hr />
                        <ul className="omb-movies-list">
                            <li className="row">
                                <div className="col-lg-5"><a href="http://demo.aa-team.com/tf/omb/what-pixar-movies-will-be-launched-in-the-next-2-years/"><i /><img width={430} height={345} src="http://demo.aa-team.com/tf/omb/wp-content/uploads/2015/09/news_detail1-430x345.jpg" className="attachment-omb-news-list size-omb-news-list wp-post-image" alt /></a></div>
                                <div className="col-lg-7">
                                    <div className="omb-post-meta">
                                        by						<a href="http://demo.aa-team.com/tf/omb/author/melissa/" title="Posts by Melissa" rel="author">Melissa</a>						on						September 15th, 2015						{/*with						<a href="http://demo.aa-team.com/tf/omb/what-pixar-movies-will-be-launched-in-the-next-2-years/#comments">4 comments
						*/}
                                    </div>
                                    <h4><a href="http://demo.aa-team.com/tf/omb/what-pixar-movies-will-be-launched-in-the-next-2-years/">What pixar movies will be launched in the next 2 years</a></h4>
                                    <div className="omb-categories"><a href="http://demo.aa-team.com/tf/omb/category/hot-stuff/" rel="category tag">Hot Stuff</a>, <a href="http://demo.aa-team.com/tf/omb/category/whats-next/" rel="category tag">What's Next</a></div>
                                    <div className="omb-post-content"><p>Mutat lucilius gubergren ei vim, ullum percipit ne mel, essent dicunt volumus mea ad. Possit definitionem nec ad, nam paulo <a className="read-more" href="http://demo.aa-team.com/tf/omb/what-pixar-movies-will-be-launched-in-the-next-2-years/">Read More</a></p>
                                    </div>
                                </div>
                            </li>
                            <li className="row">
                                <div className="col-lg-5"><a href="http://demo.aa-team.com/tf/omb/watch-a-new-star-wars-the-force-awakens-teaser/"><i /><img width={430} height={345} src="http://demo.aa-team.com/tf/omb/wp-content/uploads/2015/09/The-Force-Awakens-Trailer-Description-430x345.jpg" className="attachment-omb-news-list size-omb-news-list wp-post-image" alt /></a></div>
                                <div className="col-lg-7">
                                    <div className="omb-post-meta">
                                        by						<a href="http://demo.aa-team.com/tf/omb/author/melissa/" title="Posts by Melissa" rel="author">Melissa</a>						on						September 12th, 2015						{/*with						<a href="http://demo.aa-team.com/tf/omb/watch-a-new-star-wars-the-force-awakens-teaser/#comments">1 comments
						*/}
                                    </div>
                                    <h4><a href="http://demo.aa-team.com/tf/omb/watch-a-new-star-wars-the-force-awakens-teaser/">Watch a New Star Wars: The Force Awakens Teaser!</a></h4>
                                    <div className="omb-categories"><a href="http://demo.aa-team.com/tf/omb/category/awards/" rel="category tag">Awards</a>, <a href="http://demo.aa-team.com/tf/omb/category/hot-stuff/" rel="category tag">Hot Stuff</a>, <a href="http://demo.aa-team.com/tf/omb/category/whats-next/" rel="category tag">What's Next</a></div>
                                    <div className="omb-post-content"><p>Suspendisse a ipsum vitae dui commodo tempor id et felis. Quisque eu congue sapien. Suspendisse rutrum nulla et fermentum tempus. <a className="read-more" href="http://demo.aa-team.com/tf/omb/watch-a-new-star-wars-the-force-awakens-teaser/">Read More</a></p>
                                    </div>
                                </div>
                            </li>
                        </ul><br />
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <h5>Latest Trailers
      </h5>
                        <hr />
                        <ul className="omb-movie-trailers omb-listing-cols-2">
                            <li>
                                <a href="#" className="omb-lightbox" data-lightbox="{&quot;type&quot;:&quot;trailer&quot;,&quot;video&quot;:{&quot;type&quot;:&quot;youtube&quot;,&quot;id&quot;:&quot;frdj1zb9sMY&quot;,&quot;title&quot;:&quot;Official Trailer&quot;,&quot;thumb&quot;:&quot;http:\/\/img.youtube.com\/vi\/frdj1zb9sMY\/mqdefault.jpg&quot;}}">
                                    <figure>
                                        <span><img src="http://img.youtube.com/vi/frdj1zb9sMY/mqdefault.jpg" alt="Official Trailer" /></span>
                                        <figcaption>Official Trailer</figcaption>
                                    </figure>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="omb-lightbox" data-lightbox="{&quot;type&quot;:&quot;trailer&quot;,&quot;video&quot;:{&quot;type&quot;:&quot;youtube&quot;,&quot;id&quot;:&quot;gwqSi_ToNPs&quot;,&quot;title&quot;:&quot;\&quot;Global War\&quot; Spot&quot;,&quot;thumb&quot;:&quot;http:\/\/img.youtube.com\/vi\/gwqSi_ToNPs\/mqdefault.jpg&quot;}}">
                                    <figure>
                                        <span><img src="http://img.youtube.com/vi/gwqSi_ToNPs/mqdefault.jpg" alt="&quot;Global War&quot; Spot" /></span>
                                        <figcaption>"Global War" Spot</figcaption>
                                    </figure>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="omb-lightbox" data-lightbox="{&quot;type&quot;:&quot;trailer&quot;,&quot;video&quot;:{&quot;type&quot;:&quot;youtube&quot;,&quot;id&quot;:&quot;8yASbM8M2vg&quot;,&quot;title&quot;:&quot;Official Movie Teaser Trailer&quot;,&quot;thumb&quot;:&quot;http:\/\/img.youtube.com\/vi\/8yASbM8M2vg\/mqdefault.jpg&quot;}}">
                                    <figure>
                                        <span><img src="http://img.youtube.com/vi/8yASbM8M2vg/mqdefault.jpg" alt="Official Movie Teaser Trailer" /></span>
                                        <figcaption>Official Movie Teaser Trailer</figcaption>
                                    </figure>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="omb-lightbox" data-lightbox="{&quot;type&quot;:&quot;trailer&quot;,&quot;video&quot;:{&quot;type&quot;:&quot;vimeo&quot;,&quot;id&quot;:&quot;108018156&quot;,&quot;title&quot;:&quot;Watchtower of Turkey&quot;,&quot;thumb&quot;:&quot;http:\/\/i.vimeocdn.com\/video\/491616871_200x150.jpg&quot;}}">
                                    <figure>
                                        <span><img src="http://i.vimeocdn.com/video/491616871_200x150.jpg" alt="Watchtower of Turkey" /></span>
                                        <figcaption>Watchtower of Turkey</figcaption>
                                    </figure>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="omb-lightbox" data-lightbox="{&quot;type&quot;:&quot;trailer&quot;,&quot;video&quot;:{&quot;type&quot;:&quot;youtube&quot;,&quot;id&quot;:&quot;wDRTjzLNK0g&quot;,&quot;title&quot;:&quot;Cycles Demoreel 2015&quot;,&quot;thumb&quot;:&quot;http:\/\/img.youtube.com\/vi\/wDRTjzLNK0g\/mqdefault.jpg&quot;}}">
                                    <figure>
                                        <span><img src="http://img.youtube.com/vi/wDRTjzLNK0g/mqdefault.jpg" alt="Cycles Demoreel 2015" /></span>
                                        <figcaption>Cycles Demoreel 2015</figcaption>
                                    </figure>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="omb-lightbox" data-lightbox="{&quot;type&quot;:&quot;trailer&quot;,&quot;video&quot;:{&quot;type&quot;:&quot;youtube&quot;,&quot;id&quot;:&quot;EJed22ShxLc&quot;,&quot;title&quot;:&quot;Cycles Demoreel 2014&quot;,&quot;thumb&quot;:&quot;http:\/\/img.youtube.com\/vi\/EJed22ShxLc\/mqdefault.jpg&quot;}}">
                                    <figure>
                                        <span><img src="http://img.youtube.com/vi/EJed22ShxLc/mqdefault.jpg" alt="Cycles Demoreel 2014" /></span>
                                        <figcaption>Cycles Demoreel 2014</figcaption>
                                    </figure>
                                </a>
                            </li>
                        </ul><br />
                    </div>
                </div>
                <BoxOffice />
                <Schedule />
            </div>
        )
    }
}
