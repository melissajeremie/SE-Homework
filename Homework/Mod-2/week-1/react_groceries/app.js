console.log('js js js');

const groceries = [ ]

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            groceries: groceries,
            item: '',
            brand: '',
            units: '',
            quantity: 0
        }
    }


    render() {
        return (
            <div>
                <h1>Groceries</h1>
                {console.log(this.state.groceries)}

                <form>
                    <label>Item:</label>
                    <input type="text" value={this.state.item} placeholder="Item" id="item"></input><br></br>

                    <label>Brand:</label>
                    <input type="text" value={this.state.brand} placeholder="Item" id="item"></input><br></br>

                    <label>Units:</label>
                    <input type="text" value={this.state.units} placeholder="Item" id="item"></input><br></br>

                    <label>Quantity:</label>
                    <input type="text" value={this.state.quantity} placeholder="Item" id="item"></input><br></br>
                    <input type="submit" />
                </form>

                <h3>Available Today:</h3>
                <ul>
                    {this.state.products}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("main"));