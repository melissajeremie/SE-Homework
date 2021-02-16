console.log('hello');

class App extends React.Component{
    render() {
        return (
            <div id="container">

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
                <h5>Reviews</h5>
                <p>lorem ipsum</p>
            </div>
        )
    }
}

class AvgRating extends React.Component{
    render() {
        return (
            <div id="avg-rating">
                <p>Average Rating</p>
            </div>
        )
    }
}

class SentimentAnalysis extends React.Component{
    render() {
        return (
            <div id="analysis">
                <p>Sentiment Analysis</p>
            </div>
        )
    }
}

class SiteVisits extends React.Component{
    render() {
        return (
            <div id="container">

            </div>
        )
    }
}

ReactDOM.render ( <App />, document.getElementById('main') );