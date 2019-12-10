import React, { Component } from 'react'
import '../News/News.scss'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import postMovieGenres from '../../actions/movieActions/postMovieGenres';
class News extends Component {
    componentDidMount() {
        this.props.postMovieGenres("https://api.themoviedb.org/3/genre/movie/list?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US")
    }
    handleGetGenre = genreId => {
        let mainGenre;
        if (this.props.movieGenres.genres) {
            this.props.movieGenres.genres.forEach(genre => {
                if (genre.id === genreId[0]) {
                    mainGenre = genre.name;
                }
            });
        }

        return mainGenre;
    }
    renderCarouselNews = () => {
        return this.props.items && this.props.items.map((item, index) => {

            if (index === 1)
                return (
                    <div className="carousel-item active">
                        <div className="card border-0 rounded-0 text-light overflow zoom">
                            <div className="position-relative">

                                <div className="ratio_left-cover-1 image-wrapper">
                                    <Link to={`/details/movie/${item.id}`}>
                                        <img className="img-fluid w-100" img src={` http://image.tmdb.org/t/p/w1280//${item.poster_path}`} style={{
                                            background: `linear-gradient(
                rgba(0, 0, 0, 0.6),
                rgba(0, 0, 0, 0.6)
              ) center center no-repeat, #fff url(https://image.tmdb.org/t/p/w1280/${item.poster_path}) center top no-repeat`, backgroundSize: 'cover, cover'
                                        }} />
                                    </Link>
                                </div>
                                <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow carousel-things">

                                    <Link to={`/details/movie/${item.id}`} className="textdec">
                                        <h2 className="h3 post-title text-white my-1">{item.original_title}</h2>
                                    </Link>

                                    <div className="news-meta">
                                        <span className="news-author"> <Link to className="text-white font-weight-bold" href="../category/author.html">{item.vote_average} | {this.handleGetGenre(item.genre_ids)}</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            if (index > 2 && index < 6)
                return (
                    <div className="carousel-item">
                        <div className="card border-0 rounded-0 text-light overflow zoom">
                            <div className="position-relative">
                                <div className="ratio_left-cover-1 image-wrapper">
                                    <Link to={`/details/movie/${item.id}`}>
                                        <img className="img-fluid w-100" src={` http://image.tmdb.org/t/p/w1280//${item.poster_path}`} style={{
                                            background: `linear-gradient(
                rgba(0, 0, 0, 0.6),
                rgba(0, 0, 0, 0.6)
              ) center center no-repeat, #fff url(https://image.tmdb.org/t/p/w1280/${item.poster_path}) center top no-repeat`, backgroundSize: 'cover, cover'
                                        }} />
                                    </Link>
                                </div>
                                <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                    <Link to={`/details/movie/${item.id}`}>
                                        <h2 className="h3 post-title text-white my-1">{item.original_title}</h2>
                                    </Link>
                                    <div className="news-meta">
                                        <span className="news-author"> <Link to className="text-white font-weight-bold">{item.vote_average} | {this.handleGetGenre(item.genre_ids)}</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
        })
    }
    renderBoxNews = () => {
        return this.props.boxItems && this.props.boxItems.map((item, index) => {
            if (index > 4 && index < 9)
                return (
                    <div className="col-6 pb-1 pt-0 pr-1">
                        <div className="card border-0 rounded-0 text-white overflow zoom">
                            <div className="position-relative">

                                <div className="ratio_right-cover-2 image-wrapper">
                                    <Link to href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                        <img className="img-fluid" src={` http://image.tmdb.org/t/p/w1280//${item.poster_path}`} style={{
                                            background: `linear-gradient(
                rgba(0, 0, 0, 0.6),
                rgba(0, 0, 0, 0.6)
              ) center center no-repeat, #fff url(https://image.tmdb.org/t/p/w1280/${item.poster_path}) center top no-repeat`, backgroundSize: 'cover, cover'
                                        }} />
                                    </Link>
                                </div>
                                <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                    <Link to className="p-1 badge badge-primary rounded-0" href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">{this.handleGetGenre(item.genre_ids)}</Link>

                                    <Link to href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                        <h2 className="h5 text-white my-1">{item.overview.length > 20 ? `${item.overview.substring(0, 20)}` + '...' : item.overview}</h2>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
        })
    }
    render() {
        return (
            <div>
                <div className="container-fluid wow fadeInDown" data-wow-delay=".5s" data-wow-duration="1s">
                    {/* <div className="row mb-2">
                        <div className="col-12 text-center pt-3">
                            <h1>Bootstrap 4 News Magazine Carousel</h1>
                            <p>This is a basic bootstrap sorce code for make responsive magazine big grid cover with carousel</p>
                            <h4>You like this snippet ? click like button</h4>
                        </div>
                    </div> */}
                    {/*Start code*/}
                    <div className="row">
                        <div className="col-12 pb-5">
                            <section className="row">
                                <div className="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
                                    <div id="featured" className="carousel slide carousel" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#featured" data-slide-to={0} className="active" />
                                            <li data-target="#featured" data-slide-to={1} />
                                            <li data-target="#featured" data-slide-to={2} />
                                            <li data-target="#featured" data-slide-to={3} />
                                        </ol>
                                        <div className="carousel-inner">
                                            {this.renderCarouselNews()}
                                        </div>
                                    </div>
                                    <Link to className="carousel-control-prev" href="#featured" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="sr-only">Previous</span>
                                    </Link>
                                    <Link to className="carousel-control-next" href="#featured" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="sr-only">Next</span>
                                    </Link>
                                </div>
                                <div className="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
                                    <div className="row">
                                        {this.renderBoxNews()}
                                    </div>
                                </div>
                            </section>
                            {/*END SECTION*/}
                        </div>
                    </div>
                    {/*end code*/}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        movieGenres: state.postMovieGenres,
    }
}
const mapDispatchToProps = dispatch => {
    return {

        postMovieGenres: url => dispatch(postMovieGenres(url)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(News)