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
                <h5>1,281</h5>
            </div>
        )
    }
}

class AvgRating extends React.Component{
    render() {
        return (
            <div id="avg-rating">
                <p>Average Rating</p>
                <h6>4.6</h6>
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
                <h5>821</h5>
            </div>
        )
    }
}

ReactDOM.render ( <App />, document.getElementById('main') );