console.log('hello');

class App extends React.Component{
    render() {
        return (
            <div id="container">
                <Sidebar />
                <Reviews />
                <AvgRating />
                <SentimentAnalysis />
                <SiteVisits />
            </div>
        )
    }
}

class Sidebar extends React.Component{
    render() {
        return (
            <div id="sidebar">
                <ul>
                    <li>Dashboard</li>
                    <li>Widget</li>
                    <li>Reviews</li>
                    <li>Customers</li>
                    <li>Online Analysis</li>
                    <li>Settings</li>
                </ul>
            </div>
        )
    }
}

class Reviews extends React.Component{
    render() {
        return (
            <div id="reviews">
                <p>Reviews</p>
                <p>1,281</p>
            </div>
        )
    }
}

class AvgRating extends React.Component{
    render() {
        return (
            <div id="avg-rating">
                <p>Average Rating</p>
                <p>4.6</p>
            </div>
        )
    }
}

class SentimentAnalysis extends React.Component{
    render() {
        return (
            <div id="analysis">
                <p>Sentiment Analysis</p>
                <p>960</p>
                <p>122</p>
                <p>321</p>
            </div>
        )
    }
}

class SiteVisits extends React.Component{
    render() {
        return (
            <div id="visitors">
                <p>Website visitors</p>
                <p>821</p>
                <div id="inner-visit"></div>
            </div>
        )
    }
}

ReactDOM.render ( <App />, document.getElementById('main') );